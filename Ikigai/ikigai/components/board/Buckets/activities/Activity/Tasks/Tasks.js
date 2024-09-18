import React, { useEffect } from "react";
import { Stack, Paper, Checkbox, Button } from "@mui/material";
import boardStore from "../../../../store";
import TaskTitle from "./TaskTitle";
import { auth } from "../../../../../../utils/firebase/firebase";

export default function Tasks({ activity, styles }) {
  const tasks = boardStore((state) => state.tasks);
  const checkedTasks = boardStore((state) => state.checkedTasks);

  const user = auth.currentUser
  
  useEffect(() => {  
    auth.onAuthStateChanged((user)=> {
      if (user){
       tasks.map((individualTasks) => {   
         const data = individualTasks
        //  const itemId = individualRelationships.id
         updateUserData(user.uid, `tasks`, data)
       }) 
      }
      // console.log(user)
    })    
   }, [tasks])


  const toggleTaskCompletion = boardStore(
    (state) => state.toggleTaskCompletion
  );
  const deleteCompletedTasks = boardStore(
    (state) => state.deleteCompletedTasks
  );

  const handleTaskCheck = (taskId) => {
    toggleTaskCompletion(taskId);
  };

  const handleDeleteCompleted = () => {
    deleteCompletedTasks();
  };

  return (
    <div>
      <Stack spacing={2}>
        {tasks
          .filter((task) => task.activityId === activity.id)
          .map((task) => (
            <Paper
              key={task.id}
              sx={{
                display: "flex",
                alignItems: "center",
                padding: "16px",
                backgroundColor: styles.cardColor,
                color: "#CBD6D6",
              }}
            >
              <Checkbox
                checked={checkedTasks[task.id] || false}
                onChange={() => handleTaskCheck(task.id)}
                style={{ color: "#CBD6D6" }}
              />
              <TaskTitle
                activity={activity}
                styles={styles}
                task={task}
                checkedTasks={checkedTasks}
              />
            </Paper>
          ))}
      </Stack>
      <Button
        onClick={handleDeleteCompleted}
        style={{ marginTop: "20px", color: "#CBD6D6" }}
      >
        Delete Completed Tasks
      </Button>
    </div>
  );
}
