/* eslint-disable no-unused-vars */
import PropTypes from "prop-types";
import { useState } from "react";
import { cartState } from "../store/atoms/cart";
import { useRecoilValue } from "recoil";

import { Divider } from "@mui/material";

export default function CartBook(props) {
  const cartItems = useRecoilValue(cartState);

  const [count, setCount] = useState(1);

  function handleIncrement() {
    setCount(() => count + 1);
  }
  function handleDecrement() {
    setCount(() => count - 1);
  }

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
