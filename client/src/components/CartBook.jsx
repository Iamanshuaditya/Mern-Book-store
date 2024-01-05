/* eslint-disable no-unused-vars */
import PropTypes from "prop-types";
import { useState } from "react";
import { useMyContext } from "./Context";
import { Divider } from "@mui/material";

export default function CartBook(props) {
  const [count, setCount] = useState(1);
  const { Bookdata } = useMyContext();
  function handleIncrement() {
    setCount(() => count + 1);
  }
  function handleDecrement() {
    setCount(() => count - 1);
  }
  function Subtotal() {
    let totalPrice = 0;

    const subtotal = Bookdata.map((book) => {
      totalPrice += book["price"];
      return totalPrice;
    });

    return totalPrice * count;
  }

  Subtotal();

  const { imagesrc, title, description, price, sale, onClick } = props;
  return (
    <div
      className="font-[nunito-sans] flex w-[20rem] justify-between items-center flex-col"
      onClick={onClick}
    >
      <div className="flex">
        <div>
          {imagesrc && (
            <img
              src={imagesrc}
              alt={"bookimage"}
              className="h-[7em] w-[11.25em] object-contain relative top-16"
              onError={(e) => {
                e.target.src =
                  "http://images.amazon.com/images/P/0195153448.01.LZZZZZZZ.jpg";
              }}
            />
          )}
        </div>
        <div className="w-40 pt-[4.1rem] grid justify-center">
          <div>
            <div className="w-32 flex flex-col gap-2 ">
              <h2 className="font-normal text-base font-[Montserrat]">
                {title}
              </h2>
              <p className="text-sm text-[#0D084285]">{description}</p>
              <div className="flex justify-between">
                <p>$ {price}</p> <br />
                <span className="line-through text-[#6C6C6C]">$ {sale} </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-2 border-slate-200 w-20 flex justify-between mt-5 ml-48">
        <button onClick={handleDecrement}>-</button>
        {count} <button onClick={handleIncrement}>+</button>
      </div>
      <hr />
      <Divider />
      <p className="font-semibold ml-5 mt-5 flex justify-between w-[95%]">
        Subtotal:<span className="mr-5">${Subtotal()}</span>
      </p>
    </div>
  );
}

CartBook.propTypes = {
  imagesrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  sale: PropTypes.number,
};
