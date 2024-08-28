import { create } from "zustand";

const boardStore = create((set) => ({
  buckets: [
    {
      id: "default 1",
      title: "Career",
      activities: [],
    },
    {
      id: "default 2",
      title: "Learning",
      activities: [],
    },
    {
      id: "default 3",
      title: "Extracurriculars",
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
}));

export default boardStore;
