import React from "react";
import Ads from "../components/Ads";
import Card from "../components/Card";
import LastAds from "../components/LastAds";
import Slider from "../components/Slider";
import path from "../images/path.png";
import sa from "../images/sa.png";
function Home() {
  return (
    <div className="w-11/12 mx-auto">
      <div className="flex">
        <div className="flex w-1/3">
          <img src={path} alt="logo" className="w-full mt-10 mx-8" />
          <img
            src={sa}
            alt="saudi arabia"
            className="w-16 mt-10 mx-8 ml-auto"
          />
        </div>
        <div className="flex w-full mt-12 h-12">
          <input
            className="w-full px-2 border border-gray-400 shadow-xl rounded-l-lg font-light focus:outline-none"
            placeholder="#Laptop, Mobile, TV ..."
          />
          <input
            className="w-full px-2 border-t border-b border-gray-400 shadow-xl 
            font-light focus:outline-none"
            placeholder="Location"
          />
          <select className="font-light text-gray-400 w-full px-2 border border-gray-400 shadow-xl focus:outline-none">
            <option className="font-light ">choose category</option>
            <option className="font-light">category 1</option>
            <option className="font-light">category 2</option>
            <option className="font-light">category 3</option>
          </select>
          <button className="w-full border-t border-b border-r border-gray-400 shadow-xl shadow-xl rounded-r-lg focus:outline-none text-white bg-red text-xl hover:bg-red-800">
            <i class="fas fa-search"></i>
          </button>
          <button className="w-full mx-6 shadow-xl shadow-xl rounded-lg focus:outline-none bg-red text-white hover:bg-red-800">
            <i class="far fa-plus-square px-2 text-xl font-light"></i>Post an Ad
          </button>
        </div>
      </div>
      <div className="grid gap-x-2 mt-24 2xl:grid-cols-8 xl:grid-cols-6 lg-grid-cols:4 md:grid-cols-3 sm:grid-cols-1">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <Slider />
      <Ads />
      <div className="w-full border-2 border-gray-400 bg-white text-center text-xl rounded py-2 mt-2 text-red">
        <i class="fas fa-redo-alt px-2"></i>
        Show more
      </div>
      <LastAds />
      <div className="w-full border-2 border-gray-400 bg-white text-center text-xl rounded py-2 mt-2 text-red">
        <i class="fas fa-redo-alt px-2"></i>
        Show more
      </div>
    </div>
  );
}
export default Home;
