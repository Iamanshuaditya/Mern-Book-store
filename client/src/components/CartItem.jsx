import CartBook from "./CartBook";
import { useMyContext } from "../components/Context";

export default function CartItem() {
  const { Bookdata } = useMyContext();

  console.log("Hey i am datafromA", Bookdata);

  if (!Bookdata || Object.keys(Bookdata).length === 0) {
    return (
      <>
        <div className="mt-5">
          <center>
            {" "}
            <h1>NO Item In the Cart</h1>
          </center>
        </div>
      </>
    );
  }
  return (
    <div className="flex flex-col">
      {Bookdata.map((bookData, _id) => (
        <CartBook
          key={_id}
          imagesrc={bookData && bookData["Image-URL-L"]}
          title={bookData["Title"]}
          description={bookData.Authors[0]}
          price={bookData["price"]}
          sale={bookData["salePrice"]}
        />
      ))}
    </div>
  );
}
