import { create } from "zustand";

const useStore = create((set) => ({
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
  increasePopulation: () => set((state) => ({ buckets: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
  updateBears: (newBears) => set({ bears: newBears }),
}));
