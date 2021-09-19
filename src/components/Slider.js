import React from "react";
import { useState } from "react";
import ItemsCarousel from "react-items-carousel";
import item from "../images/item.png";

const Slider = () => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;
  return (
    <div style={{ padding: `0 ${chevronWidth}px` }} className="mt-12">
      <ItemsCarousel
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={10}
        gutter={20}
        leftChevron={
          <button>
            <i class="fas fa-caret-square-left text-2xl text-red-800 focus:outline-none hover:text-red-900"></i>
          </button>
        }
        rightChevron={
          <button>
            <i class="fas fa-caret-square-right text-2xl text-red-800 focus:outline-none hover:text-red-900"></i>
          </button>
        }
        outsideChevron
        chevronWidth={chevronWidth}
      >
        <div>
          <img
            src={item}
            className="border-2 border-red-700 rounded px-6 py-4 bg-white shadow"
            alt="#"
          />
          <label className="uppercase text-gray-700 text-center font-semibold text-sm mt-4">
            Electronique
          </label>
        </div>
        <div>
          <img
            src={item}
            className="border-2 border-red-700 rounded px-6 py-4 bg-white shadow"
            alt="#"
          />
          <label className="uppercase text-gray-700 text-center font-semibold text-sm mt-4">
            Electronique
          </label>
        </div>
        <div>
          <img
            src={item}
            className="border-2 border-red-700 rounded px-6 py-4 bg-white shadow"
            alt="#"
          />
          <label className="uppercase text-gray-700 text-center font-semibold text-sm mt-4">
            Electronique
          </label>
        </div>
        <div>
          <img
            src={item}
            className="border-2 border-red-700 rounded px-6 py-4 bg-white shadow"
            alt="#"
          />
          <label className="uppercase text-gray-700 text-center font-semibold text-sm mt-4">
            Electronique
          </label>
        </div>
        <div>
          <img
            src={item}
            className="border-2 border-red-700 rounded px-6 py-4 bg-white shadow"
            alt="#"
          />
          <label className="uppercase text-gray-700 text-center font-semibold text-sm mt-4">
            Electronique
          </label>
        </div>
        <div>
          <img
            src={item}
            className="border-2 border-red-700 rounded px-6 py-4 bg-white shadow"
            alt="#"
          />
          <label className="uppercase text-gray-700 text-center font-semibold text-sm mt-4">
            Electronique
          </label>
        </div>
        <div>
          <img
            src={item}
            className="border-2 border-red-700 rounded px-6 py-4 bg-white shadow"
            alt="#"
          />
          <label className="uppercase text-gray-700 text-center font-semibold text-sm mt-4">
            Electronique
          </label>
        </div>
        <div>
          <img
            src={item}
            className="border-2 border-red-700 rounded px-6 py-4 bg-white shadow"
            alt="#"
          />
          <label className="uppercase text-gray-700 text-center font-semibold text-sm mt-4">
            Electronique
          </label>
        </div>
        <div>
          <img
            src={item}
            className="border-2 border-red-700 rounded px-6 py-4 bg-white shadow"
            alt="#"
          />
          <label className="uppercase text-gray-700 text-center font-semibold text-sm mt-4">
            Electronique
          </label>
        </div>
        <div>
          <img
            src={item}
            className="border-2 border-red-700 rounded px-6 py-4 bg-white shadow"
            alt="#"
          />
          <label className="uppercase text-gray-700 text-center font-semibold text-sm mt-4">
            Electronique
          </label>
        </div>
        <div>
          <img
            src={item}
            className="border-2 border-red-700 rounded px-6 py-4 bg-white shadow"
            alt="#"
          />
          <label className="uppercase text-gray-700 text-center font-semibold text-sm mt-4">
            Electronique
          </label>
        </div>
        <div>
          <img
            src={item}
            className="border-2 border-red-700 rounded px-6 py-4 bg-white shadow"
            alt="#"
          />
          <label className="uppercase text-gray-700 text-center font-semibold text-sm mt-4">
            Electronique
          </label>
        </div>
        <div>
          <img
            src={item}
            className="border-2 border-red-700 rounded px-6 py-4 bg-white shadow"
            alt="#"
          />
          <label className="uppercase text-gray-700 text-center font-semibold text-sm mt-4">
            Electronique
          </label>
        </div>
        <div>
          <img
            src={item}
            className="border-2 border-red-700 rounded px-6 py-4 bg-white shadow"
            alt="#"
          />
          <label className="uppercase text-gray-700 text-center font-semibold text-sm mt-4">
            Electronique
          </label>
        </div>
        <div>
          <img
            src={item}
            className="border-2 border-red-700 rounded px-6 py-4 bg-white shadow"
            alt="#"
          />
          <label className="uppercase text-gray-700 text-center font-semibold text-sm mt-4">
            Electronique
          </label>
        </div>
      </ItemsCarousel>
    </div>
  );
};
export default Slider;
