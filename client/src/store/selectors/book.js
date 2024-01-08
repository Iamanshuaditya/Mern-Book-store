import { selector } from "recoil";
import { bookState } from "../atoms/book";

export const isbookLoading = selector({
  key: "isBookLoadingState",
  get: ({ get }) => {
    const state = get(bookState);

    return state.isLoading;
  },
});

export const bookDetails = selector({
  key: "bookDetailsState",
  get: ({ get }) => {
    const state = get(bookState);
    return state.books;
  },
});

export const bookTitle = selector({
  key: "bookTitleState",
  get: ({ get }) => {
    const state = get(bookState);
    if (state.books) {
      return state.books.Title;
    }

    return "";
  },
});

export const bookPrice = selector({
  key: "bookPriceState",
  get: ({ get }) => {
    const state = get(bookState);
    if (state.books) {
      return state.books.price;
    }

    return;
  },
});
export const bookImage = selector({
  key: "bookImageState",
  get: ({ get }) => {
    const state = get(bookState);
    if (state.books) {
      return state.books["Image-URL-L"];
    }

    return;
  },
});

export const salePrice = selector({
  key: "salePriceState",
  get: ({ get }) => {
    const state = get(bookState);
    if (state.books) {
      return state.books.salePrice;
    }

    return;
  },
});
