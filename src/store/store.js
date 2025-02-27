import { create } from "zustand";

const useBlogStore = create((set) => ({
  posts: [],
  setPosts: (posts) => set({ posts }),
}));

export default useBlogStore;