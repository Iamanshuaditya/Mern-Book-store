import Book from "../components/Book";
import { useEffect } from "react";
import BookApi from "../services/bookapi";
import { bookState } from "../store/atoms/book";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { isbookLoading, bookDetails } from "../store/selectors/book";
import { cartState } from "../store/atoms/cart";

import { Loading } from "../components/Loading";

export default function MyBooks() {
  const setBooks = useSetRecoilState(bookState);
  const bookLoading = useRecoilValue(isbookLoading);
  const setCart = useSetRecoilState(cartState);

  useEffect(() => {
    async function fetchBooks() {
      try {
        const response = await BookApi.get("/book");
        if (response.status !== 200) {
          throw new Error(`Error! status: ${response.status}`);
        }
        console.log(response);

        setBooks({
          isLoading: false,
          books: response.data,
        });
      } catch (error) {
        setBooks({
          isLoading: false,
          books: null,
        });
        console.error("Error", error);
      }
    }
    fetchBooks();
  }, []);

  const handleBookClick = (book) => {
    console.log("Clicked book ID:", book);
    setCart((prevCart) => [...prevCart, book]);
  };

  if (bookLoading) {
    return (
      <>
        <Loading />
      </>
    );
  }

  return <Books handleBookClick={handleBookClick} />;
}

function Books(props) {
  const { handleBookClick } = props;

  const books = useRecoilValue(bookDetails);
  return (
    <>
      <div className="flex flex-wrap m-10">
        {books.map((singleBook) => (
          <div key={singleBook._id} className="m-5">
            <Book
              imagesrc={singleBook["Image-URL-L"]}
              title={String(singleBook["Title"])}
              description={String(singleBook["Authors"])}
              price={singleBook["price"]}
              sale={singleBook["salePrice"]}
              onClick={() => handleBookClick(singleBook)}
            />
          </div>
        ))}
      </div>
    </>
  );
}
