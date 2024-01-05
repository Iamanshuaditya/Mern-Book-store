import { FaShoppingCart } from "react-icons/fa";
import PropTypes from "prop-types";

export default function Book(props) {
  const { imagesrc, title, description, price, sale, onClick } = props;
  const handleClick = (event) => {
    console.log("Clicked Add to Basket button");
    event.stopPropagation();
    onClick();
  };

  return (
    <div className="font-[nunito-sans] flex w-[22rem] justify-between items-center">
      <div>
        {imagesrc && (
          <img
            src={imagesrc}
            alt={"bookimage"}
            className="h-[15.625em] w-[11.25em] object-contain"
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
            <h2 className="font-normal text-base font-[Montserrat]">{title}</h2>
            <p className="text-sm text-[#0D084285]">{description}</p>
            <div className="flex justify-between">
              <p>$ {price}</p> <br />
              <span className="line-through text-[#6C6C6C]">$ {sale} </span>
            </div>
          </div>
          <button
            className="h-[1em] w-15 flex items-center justify-between box-border px-3 py-3 font-bold font-[nunito-sans] rounded-lg text-[#FFFFFF] bg-[#FFCE1A] border-none"
            onClick={handleClick}
          >
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
