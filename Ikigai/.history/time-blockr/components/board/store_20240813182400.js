import { create } from "zustand";

const boardStore = create((set) => ({
  buckets: [
    {
      id: "default 1",
      title: "Career",
      activities: [
        {
          id: Date.now(),
          title: "New Activity",
          priority: ["high", "medium", "low"],
          tasks: [],
          relationships: [],
          stats: [],
        },
      ],
    },
    {
      id: "default 2",
      title: "Learning",
      activities: [
        {
          id: Date.now(),
          title: "New Activity",
          priority: ["high", "medium", "low"],
          tasks: [],
          relationships: [],
          stats: [],
        },
      ],
    },
    {
      id: "default 3",
      title: "Extracurriculars",
      activities: [
        {
          id: Date.now(),
          title: "New Activity",
          priority: ["high", "medium", "low"],
          tasks: [],
          relationships: [],
          stats: [],
        },
      ],
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
                        ...activity.relationships,
                        newRelationship,
                      ],
                    }
                  : activity
              ),
            }
          : bucket
      ),
    })),
}));

export default boardStore;
