import { create } from "zustand";

const useAppStore = create((set) => ({
  editMode: false,
  setEditMode: (bool) => {
    set(() => ({
      editMode: bool
    }))
  }
}))

export default useAppStore