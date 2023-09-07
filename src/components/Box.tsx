import clsx from "clsx";
import React from "react";

interface BoxProps {
  id: number;
  price: number;
  onClick?: () => void;
  isSelected?: boolean;
}

function Box({ id, price, onClick, isSelected }: BoxProps) {
  return (
    <div role="button" className="cursor-pointer" onClick={onClick}>
      <div
        className={clsx(
          "bg-rose-200 w-30 h-30 rounded-3xl shadow-lg shadow-gray-500 p-5 hover:bg-rose-300 transition duration-300",
          isSelected && "!bg-rose-300"
        )}
      >
        <h3 className="text-gray-600 text-center text-5xl font-bold mb-5">
          {id}
        </h3>
        <p className="text-gray-600 text-center text-3xl">{price} zł</p>
      </div>
    </div>
  );
}

export default Box;
