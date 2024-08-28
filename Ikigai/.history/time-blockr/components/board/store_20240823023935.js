import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const boardStore = create(
  persist(
    (set) => ({
      buckets: [
        {
          id: "default1",
          title: "Career",
          headerImage: "",
          icon: "",
          color: "",
        },
        {
          id: "default2",
          title: "Learning",
          headerImage: "",
          icon: "",
          color: "",
        },
        {
          id: "default3",
          title: "Extracurriculars",
          headerImage: "",
          icon: "",
          color: "",
        },
      ],

      activities: [],
      tasks: [],
      relationships: [],
      checkedTasks: {},

      addBucket: (newBucket) =>
        set((state) => ({ buckets: [...state.buckets, newBucket] })),

      updateBucketTitle: (bucketId, newTitle) =>
        set((state) => ({
          buckets: state.buckets.map((bucket) =>
            bucket.id === bucketId ? { ...bucket, title: newTitle } : bucket
          ),
        })),

      updateBucketColor: (bucketId, newColor) =>
        set((state) => ({
          buckets: state.buckets.map((bucket) =>
            bucket.id === bucketId ? { ...bucket, color: newColor } : bucket
          ),
        })),

      addActivity: (bucketId, newActivity) =>
        set((state) => ({
          activities: [...state.activities, newActivity],
        })),

      editActivity: (activityId, updatedActivity) =>
        set((state) => ({
          activities: state.activities.map((activity) =>
            activity.id === activityId
              ? { ...activity, ...updatedActivity }
              : activity
          ),
        })),
      deleteActivity: (activityId) =>
        set((state) => {
          // Remove the activity
          const updatedActivities = state.activities.filter(
            (activity) => activity.id !== activityId
          );

          // Remove all tasks associated with this activity
          const updatedTasks = state.tasks.filter(
            (task) => task.activityId !== activityId
          );

          // Remove all relationships involving this activity
          const updatedRelationships = state.relationships.filter(
            (rel) =>
              rel.activity1Id !== activityId && rel.activity2Id !== activityId
          );

          return {
            activities: updatedActivities,
            tasks: updatedTasks,
            relationships: updatedRelationships,
          };
        }),

      addRelationship: (newRelationship) =>
        set((state) => ({
          relationships: [...state.relationships, newRelationship],
        })),

      removeRelationship: (activity1Id, activity2Id) =>
        set((state) => ({
          relationships: state.relationships.filter(
            (rel) =>
              !(
                (rel.activity1Id === activity1Id &&
                  rel.activity2Id === activity2Id) ||
                (rel.activity1Id === activity2Id &&
                  rel.activity2Id === activity1Id)
              )
          ),
        })),

      setPriority: (activityId, priority) =>
        set((state) => ({
          activities: state.activities.map((activity) =>
            activity.id === activityId ? { ...activity, priority } : activity
          ),
        })),

      addTask: (newTask) =>
        set((state) => ({
          tasks: [...state.tasks, newTask],
        })),

      editTask: (taskId, updatedTask) =>
        set((state) => ({
          tasks: state.tasks.map((task) =>
            task.id === taskId ? { ...task, ...updatedTask } : task
          ),
        })),

      removeTask: (taskId) =>
        set((state) => ({
          tasks: state.tasks.filter((task) => task.id !== taskId),
        })),

     
    toggleTaskCompletion: (taskId) =>
      set((state) => ({
        checkedTasks: {
          ...state.checkedTasks,
          [taskId]: !state.checkedTasks[taskId],
        },
      })),

    deleteCompletedTasks: () =>
      set((state) => ({
        tasks: state.tasks.filter((task) => !state.checkedTasks[task.id]),
        checkedTasks: Object.fromEntries(
          Object.entries(state.checkedTasks).filter(([id, checked]) => !checked)
        ),
      })),
    {
      name: "board-storage", // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
    }
  )
);

export default boardStore;
