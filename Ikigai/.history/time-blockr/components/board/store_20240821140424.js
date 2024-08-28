import { create } from "zustand";

const boardStore = create((set) => ({
  buckets: [
    {
      id: "default 1",
      title: "Career",
      activities: [],
      headerImage: "",
      icon: "",
      color: "",
    },
    {
      id: "default 2",
      title: "Learning",
      headerImage: "",
      icon: "",
      activities: [],
    },
    {
      id: "default 3",
      title: "Extracurriculars",
      headerImage: "",
      icon: "",
      activities: [],
    },
  ],

  addBucket: (newBucket) =>
    set((state) => ({ buckets: [...state.buckets, newBucket] })),
  updateBucketTitle: (id, newTitle) =>
    set((state) => ({
      buckets: state.buckets.map((bucket) =>
        bucket.id === id ? { ...bucket, title: newTitle } : bucket
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
      buckets: state.buckets.map((bucket) =>
        bucket.id === bucketId
          ? { ...bucket, activities: [...bucket.activities, newActivity] }
          : bucket
      ),
    })),
  editActivity: (bucketId, activityId, updatedActivity) =>
    set((state) => ({
      buckets: state.buckets.map((bucket) =>
        bucket.id === bucketId
          ? {
              ...bucket,
              activities: bucket.activities.map((activity) =>
                activity.id === activityId
                  ? { ...activity, ...updatedActivity }
                  : activity
              ),
            }
          : bucket
      ),
    })),
  addRelationship: (bucketId, activityId, newRelationship) =>
    set((state) => ({
      buckets: state.buckets.map((bucket) =>
        bucket.id === bucketId
          ? {
              ...bucket,
              activities: bucket.activities.map((activity) =>
                activity.id === activityId
                  ? {
                      ...activity,
                      relationships: [
                        ...(activity.relationships || []),
                        newRelationship,
                      ],
                    }
                  : activity
              ),
            }
          : bucket
      ),
    })),

  removeRelationship: (bucketId, activityId, relationshipId) =>
    set((state) => ({
      buckets: state.buckets.map((bucket) =>
        bucket.id === bucketId
          ? {
              ...bucket,
              activities: bucket.activities.map((activity) =>
                activity.id === activityId
                  ? {
                      ...activity,
                      relationships: (activity.relationships || []).filter(
                        (rel) => rel.id !== relationshipId
                      ),
                    }
                  : activity
              ),
            }
          : bucket
      ),
    })),

  setPriority: (bucketId, activityId, priority) =>
    set((state) => ({
      buckets: state.buckets.map((bucket) =>
        bucket.id === bucketId
          ? {
              ...bucket,
              activities: bucket.activities.map((activity) =>
                activity.id === activityId
                  ? { ...activity, priority }
                  : activity
              ),
            }
          : bucket
      ),
    })),

  addTask: (bucketId, activityId, newTask) =>
    set((state) => ({
      buckets: state.buckets.map((bucket) =>
        bucket.id === bucketId
          ? {
              ...bucket,
              activities: bucket.activities.map((activity) =>
                activity.id === activityId
                  ? { ...activity, tasks: [...(activity.tasks || []), newTask] }
                  : activity
              ),
            }
          : bucket
      ),
    })),
}));

export default boardStore;
