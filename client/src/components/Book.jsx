import { FaShoppingCart } from "react-icons/fa";
import PropTypes from "prop-types";

export default function Book(props) {
  const { imagesrc, title, description, price, sale } = props;
  return (
    <div className="font-[nunito-sans] flex w-[22rem] justify-between">
      <div>
        <img
          src={imagesrc}
          alt="andrew"
          className="h-[15.625em] w-[11.25em] object-contain"
        />
      </div>
      <div className="w-40 pt-[4.1rem] grid justify-center">
        <div>
          <div className="w-32 flex flex-col gap-2 ">
            <h2 className="font-normal text-base font-[Montserrat]">{title}</h2>
            <p className="text-sm text-[#0D084285]">{description}</p>
            <div className="flex justify-between">
              <p>$ {price}</p> <br />
              <span className="line-through text-[#6C6C6C]">$ {sale} </span>
            </div>
          </div>
          <button className="h-[1em] w-15 flex items-center justify-between box-border px-3 py-3 font-bold font-[nunito-sans] rounded-lg text-[#FFFFFF] bg-[#FFCE1A] border-none">
            <FaShoppingCart />
            Add to Basket
          </button>
        </div>
      </div>
    </div>
  );
}

Book.propTypes = {
  imagesrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  sale: PropTypes.number,
};