import { atom } from "recoil";

export const bookState = atom({
  key: "bookState",
  default: {
    isLoading: true,
    books: [],
  },
});
