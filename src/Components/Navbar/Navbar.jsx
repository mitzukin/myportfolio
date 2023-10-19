import React from "react";
import { FaHome, FaInfo} from "react-icons/fa";
import {BiMessageAltDetail} from "react-icons/bi"
import {FcServices}from "react-icons/fc"
import SmoothScroll from 'smooth-scroll';
import{IoMdContact} from "react-icons/io"

const Navbar = () => {
  const scroll = new SmoothScroll('a[href*="#"]', {
    speed: 1000,
    speedAsDuration: true
  });

  return (
    <div
      className="fixed flex flex-col items-center justify-between w-12 px-2 py-1 mt-10 bg-opacity-50 rounded-full md:w-16 left-1 md:left-5 top-60 h-84 bg-secondary"
      style={{ zIndex: 9999 }}
    >
      <div className="mt-5 space-y-8">
        <a href="#Home" data-scroll>
          <div className="p-2 text-gray-300 rounded-full cursor-pointer hover:bg hover:text-green-500">
            <FaHome size={22} />
          </div>
        </a>
        <a href="#Testimonial" data-scroll>
          <div className="p-2 mt-5 text-gray-300 rounded-full cursor-pointer hover:bg-secondary hover:text-custom-blue">
            <BiMessageAltDetail size={22} />
          </div>
        </a>
        <a href="#Info" data-scroll>
          <div className="p-2 mt-5 text-gray-300 rounded-full cursor-pointer hover:bg-secondary hover:text-custom-blue">
            <FaInfo size={20} />
          </div>
        </a>
        <a href="#Project" data-scroll>
          <div className="p-2 mt-5 text-gray-300 rounded-full cursor-pointer hover:bg-secondary hover:text-custom-blue">
            <FcServices size={18} />
          </div>
        </a>
        <a href="#Contact" data-scroll>
          <div className="p-2 mt-5 mb-5 text-gray-300 rounded-full cursor-pointer hover:bg-secondary hover:text-custom-blue">
            <IoMdContact size={18} />
          </div>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
