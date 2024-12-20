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
      timeblocks: [],
      checkedTasks: {},
      userData: {},

      setBuckets: (buckets) => set({ buckets }),
      setActivities: (activities) => set({ activities }),
      setTasks: (tasks) => set({ tasks }),
      setRelationships: (relationships) => set({ relationships }),

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

      updateBucketHeader: (bucketId, newHeader) =>
        set((state) => ({
          buckets: state.buckets.map((bucket) =>
            bucket.id === bucketId
              ? { ...bucket, headerImage: newHeader }
              : bucket
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
          const updatedActivities = state.activities.filter(
            (activity) => activity.id !== activityId
          );
          const updatedTasks = state.tasks.filter(
            (task) => task.activityId !== activityId
          );
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

      removeRelationship: (relationshipId) =>
        set((state) => ({
          relationships: state.relationships.filter(
            (rel) => rel.id !== relationshipId
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

      deleteCompletedTasks: () =>
        set((state) => ({
          tasks: state.tasks.filter((task) => !state.checkedTasks[task.id]),
          checkedTasks: Object.fromEntries(
            Object.entries(state.checkedTasks).filter(
              ([id, checked]) => !checked
            )
          ),
        })),

      toggleTaskCompletion: (taskId) =>
        set((state) => ({
          checkedTasks: {
            ...state.checkedTasks,
            [taskId]: !state.checkedTasks[taskId],
          },
        })),

      deleteBucket: (bucketId) =>
        set((state) => ({
          buckets: state.buckets.filter((bucket) => bucket.id !== bucketId),
        })),

      addTimeBlock: (activityId, timeblockObject) =>
        set((state) => ({
          timeblocks: [...state.timeblocks, { ...timeblockObject, activityId }],
        })),
      updateTimeBlock: (activityId, timeblockObject) =>
        set((state) => {
          const updatedTimeblocks = state.timeblocks.map((tb) =>
            tb.activityId === activityId ? { ...tb, ...timeblockObject } : tb
          );
          return { timeblocks: updatedTimeblocks };
        }),
    }),
    {
      name: "board-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default boardStore;
