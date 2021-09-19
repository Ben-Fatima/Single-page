import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav class="w-full sticky flex top-0 z-10 background-color-menu text-gray-100 py-3 font-light">
        <div className="w-1/2">
          <div className="mx-24">
            <Link className="px-2 hover:text-gray-400">
              <i className="px-2 fas fa-map-marker-alt"></i>
              Saudi Arabia
            </Link>
            <div className="dropdown inline-block relative">
              <i className="fas fa-caret-down inline-flex items-center cursor-pointer mr-4"></i>
              <ul className="dropdown-menu absolute hidden pt-1 -mx-8">
                <Link className="px-12 py-2 background-color-menu hover:text-gray-400 block whitespace-no-wrap">
                  One
                </Link>
                <Link className="px-12 py-2 background-color-menu hover:text-gray-400 block whitespace-no-wrap">
                  Two
                </Link>
                <Link className="px-12 py-2 rounded-b background-color-menu hover:text-gray-400 block whitespace-no-wrap">
                  Three
                </Link>
              </ul>
            </div>
            <Link className="px-6 hover:text-gray-400">
              <i className="px-2 fas fa-info-circle"></i>
              About
            </Link>
            <Link className="px-6 hover:text-gray-400">
              <i className="px-2 fas fa-phone"></i>
              Contact Us
            </Link>
          </div>
        </div>
        <div className="w-1/2 flex">
          <div className="ml-auto mx-24">
            <Link className="px-6 hover:text-gray-400">
              <i class="fas fa-heart px-2"></i>
              Favorite ADS
            </Link>
            <Link className="px-6 hover:text-gray-400">
              <i class="fas fa-user px-2"></i>
              Register
            </Link>
            <Link className="px-6 hover:text-gray-400">Sign in</Link>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
