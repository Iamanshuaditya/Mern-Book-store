import Book from "../components/Book";
import { useEffect, useState } from "react";
import BookApi from "../services/bookapi";
import { useMyContext } from "../components/Context";

export default function MyBooks() {
  const [books, setBooks] = useState([]);
  let { setBookdata } = useMyContext();

  useEffect(() => {
    async function fetchBooks() {
      try {
        const response = await BookApi.get("/book");
        if (response.status !== 200) {
          throw new Error(`Error! status: ${response.status}`);
        }
        console.log(response);

        setBooks(response.data);
      } catch (error) {
        console.error("Error", error);
      }
    }
    fetchBooks();
  }, []);

  const handleBookClick = (book) => {
    console.log("Clicked book ID:", book);
    setBookdata(book);
  };

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
