import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ComplimentState {
  selected: string;
  setSelected: (s: string) => void;
  clearSelected: () => void;
}

export const useComplimentStore = create<ComplimentState>()(
  persist(
    (set) => ({
      selected: "",
      setSelected: (s) => set({ selected: s }),
      clearSelected: () => set({ selected: "" }),
    }),
    {
      name: "compliment-storage",
    }
  )
);
