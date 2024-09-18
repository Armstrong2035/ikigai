import React, {useEffect} from "react";
import boardStore from "../../../store";
import { Chip, Box } from "@mui/material";
import { auth } from "../../../../../utils/firebase/firebase";


export default function Relationships({ activity, getPriorityStyle }) {
  const relationships = boardStore((state) => state.relationships);
  const removeRelationship = boardStore((state) => state.removeRelationship);

  const userData = boardStore((state) => state.userData)

  const user = auth.currentUser
  
  useEffect(() => {  
    auth.onAuthStateChanged((user)=> {
      if (user){
       relationships.map((individualRelationships) => {   
         const data = individualRelationships
        //  const itemId = individualRelationships.id
         updateUserData(user.uid, `relationships`, data)
       }) 
      }
      // console.log(user)
    })    
   }, [relationships])


  const handleDelete = (relationshipToDelete) => {
    removeRelationship(relationshipToDelete.id);
  };

  return (
    <Box sx={{}}>
      {relationships
        .filter(
          (rel) =>
            rel.activity1.id === activity.id || rel.activity2.id === activity.id
        )
        .map((rel) => {
          const relatedActivity =
            rel.activity1.id === activity.id ? rel.activity2 : rel.activity1;
          const style = getPriorityStyle(relatedActivity.priority);

          return (
            <Chip
              key={rel.id}
              label={relatedActivity.title}
              onDelete={() => handleDelete(rel)}
              sx={{
                backgroundColor: style.cardColor,
                color: "#FFFFFF",
                mr: 1,
                mb: 1,
              }}
            />
          );
        })}
    </Box>
  );
}
