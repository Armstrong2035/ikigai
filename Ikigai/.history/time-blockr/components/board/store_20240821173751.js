import { create } from "zustand";

const boardStore = create((set) => ({
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

  activities: [
    // Example activity structure:
    // {
    //   id: "activity1",
    //   title: "Update Resume",
    //   bucketId: "default1",
    //   relationships: ["activity2"],
    //   priority: "High",
    // }
  ],

  tasks: [
    // Example task structure:
    // {
    //   id: "task1",
    //   activityId: "activity1",
    //   title: "Draft Resume",
    //   completed: false,
    // }
  ],

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

  addRelationship: (activityId, relatedActivityId) =>
    set((state) => ({
      activities: state.activities.map((activity) => {
        if (activity.id === activityId) {
          return {
            ...activity,
            relationships: [...activity.relationships, relatedActivityId],
          };
        }
        if (activity.id === relatedActivityId) {
          return {
            ...activity,
            relationships: [...activity.relationships, activityId],
          };
        }
        return activity;
      }),
    })),

  removeRelationship: (activityId, relationshipId) =>
    set((state) => ({
      activities: state.activities.map((activity) =>
        activity.id === activityId
          ? {
              ...activity,
              relationships: activity.relationships.filter(
                (relId) => relId !== relationshipId
              ),
            }
          : activity
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
      tasks: state.tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      ),
    })),
}));

export default boardStore;
