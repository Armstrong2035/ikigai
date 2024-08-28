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
    set((state) => ({ buckets: [...buckets, newBucket] })),
}));

export default boardStore;
