import React from "react";
import product_2 from "../images/product_2.png";
const Card = () => {
  return (
    <>
      <div className="w-full shadow-xl rounded-xl mb-2">
        <div className="w-full">
          <p className="bg-red w-1/2 rounded-br-xl rounded-tl-xl text-white text-sm py-1 px-2">
            ⭐ Featured
          </p>
        </div>
        <img src={product_2} className="w-full" alt="product" />
        <div className="mx-2">
          <p className="font-light text-sm">Lenovo P8 Tab3 8 plus TB</p>
          <p className="text-gray text-xs font-light mt-4 text-xs">
            <i class="fas fa-clock px-2 text-red"></i>06/09/2021 05:23 PM
          </p>
          <p className="font-light mt-4 text-xs">
            <i class="fas fa-map-marker-alt px-2 text-red"></i>Riyadh, Saudi
            Arabia
          </p>
          <p className="font-light mt-4 text-xs">
            <i class="fas fa-shopping-cart px-2 text-red"></i>For Sale
          </p>
          <p className="mt-4 text-green text-sm font-semibold">329.99 SAR</p>
          <div className="flex w-full py-2 border-gray-100">
            <button className="w-1/3 text-center hover:text-red-700">
              <i class="far fa-heart"></i>
            </button>
            <button className="w-1/3 text-center hover:text-red-700">
              <i class="fas fa-share-alt"></i>
            </button>
            <button className="w-1/3 text-center hover:text-red-700">
              <i class="far fa-eye"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Card;
