import React from "react";
import andriod from "../images/andriod.svg";
import ios from "../images/ios.svg";
import huawei from "../images/huawei.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="mt-20">
      <div className="bg-grey border border-grey pb-4">
        <div className="w-11/12 mx-auto">
          <h2 className="text-grey text-lg font-semibold py-4">
            Most Search Keywords
          </h2>
          <p className="text-md font-light text-grey-100 leading-loose">
            <b>Laptops:</b> Appleo Laptop | Acero Laptop | Samsing Laptop |
            Lenov Laptop | Sonyo Laptop | Delli Laptop | Asuso Laptop | Toshibao
            Laptop | LGG Laptop | HPO Laptop <br />
            <b>Tablet:</b> FUKIO Watches | Titan Watches | Casioo Watches |
            Fastrack Watches | Timexi Watches | Fossili Watches | Dieselo
            Watches | Toshibao Watches | Luxury Watches <br />
            <b>Mobile phone:</b> Shoes | Casual Shoes | Sports Shoes | Adidasi
            Shoes | Gas Shoes | Pumai Shoes | Reeboki Shoes | Woodlandi Shoes |
            Red Tape Shoes | Nikeo Shoes
          </p>
        </div>
      </div>
      <div id="show_bg" className="">
        <div className="w-11/12 mx-auto flex">
          <div className="w-1/5 text-white">
            <h2 className="font-semibold py-4">Contact Us</h2>
            <p className="text-sm py-2">
              <i class="fas fa-mobile-alt px-2"></i>(+966) 123 456 7890
            </p>
            <p className="text-sm py-2">
              <i class="far fa-envelope px-2"></i>Info@web.com
            </p>
            <p className="text-sm py-2">
              <i class="fas fa-map-marker-alt px-2"></i>Riyadh, Saudi Arabia
            </p>
          </div>
          <div className="w-1/5 text-white">
            <h2 className="font-semibold py-4">Download</h2>
            <img className="py-2 w-1/3" alt="#" src={andriod} />
            <img className="py-2 w-1/3" alt="#" src={ios} />
            <img className="py-2 w-1/3" alt="#" src={huawei} />
          </div>
          <div className="w-1/5 text-white">
            <h2 className="font-semibold py-4">Quick links</h2>
            <Link className="block text-sm py-2 hover:underline">Login</Link>
            <Link className="block text-sm py-2 hover:underline">Sign up</Link>
            <Link className="block text-sm py-2 hover:underline">
              Change Country
            </Link>
            <Link className="block text-sm py-2 hover:underline">Setting </Link>
            <Link className="block text-sm py-2 hover:underline">About us</Link>
          </div>
          <div className="w-1/5 text-white">
            <h2 className="font-semibold py-4">My accounts</h2>
            <Link className="block text-sm py-2 hover:underline">
              Post an AD
            </Link>
            <Link className="block text-sm py-2 hover:underline">My ADS</Link>
            <Link className="block text-sm py-2 hover:underline">
              Favorite ADS
            </Link>
            <Link className="block text-sm py-2 hover:underline">Vouchers</Link>
            <Link className="block text-sm py-2 hover:underline">
              Profile Setting
            </Link>
          </div>
          <div className="w-1/5 text-white">
            <h2 className="font-semibold py-4">Subscribe now</h2>
            <p className="text-sm py-2">
              Contrary to popular belief of lorem Ipsm Latin amet ltin from.
            </p>
            <div className="flex py-2 h-16">
              <input
                className="w-2/3 px-2 border border-gray-400 shadow-xl rounded-l-lg font-light focus:outline-none"
                placeholder="Your email address"
              />
              <button className="w-1/3 shadow-xl shadow-xl rounded-r-lg focus:outline-none text-white bg-red text-xl hover:bg-red-800">
                <i class="far fa-paper-plane"></i>
              </button>
            </div>
            <div>
              <i class="px-4 hover:text-gray-400 cursor-pointer fab fa-twitter"></i>
              <i class="px-4 hover:text-gray-400 cursor-pointer fab fa-instagram"></i>
              <i class="px-4 hover:text-gray-400 cursor-pointer fab fa-whatsapp"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
