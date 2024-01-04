import Book from "../components/Book";
import { useEffect, useState } from "react";
import BookApi from "../services/bookapi";

export default function MyBooks() {
  const [books, setBooks] = useState([]);

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
  const generateRandomPrice = () => {
    return Math.floor(Math.random() * (100 - 10 + 1)) + 100;
  };
  return (
    <div className="flex flex-wrap m-10">
      {books.map((singleBook) => (
        <div key={singleBook._id} className="m-5">
          <Book
            imagesrc={singleBook["Image-URL-L"]}
            title={String(singleBook["Book-Title"])}
            description={String(singleBook["Book-Author"])}
            price={generateRandomPrice()}
            sale={generateRandomPrice()}
          />
        </div>
      ))}
    </div>
  );
}
