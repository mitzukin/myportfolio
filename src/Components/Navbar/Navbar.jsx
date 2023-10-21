import React, { useEffect, useState } from "react"; // Import useEffect and useState
import { FaHome, FaInfo } from "react-icons/fa";
import { BiMessageAltDetail } from "react-icons/bi";
import { FcServices } from "react-icons/fc";
import SmoothScroll from 'smooth-scroll';

import { IoMdContact } from "react-icons/io";
import { CgMenuHotdog } from "react-icons/cg";

const Navbar = () => {
  useEffect(() => {
    const scroll = new SmoothScroll('a[href*="#"]', {
      speed: 500,
      speedAsDuration: true,
      // Add more options here if needed
    });
  }, []);

  const [isNavOpen, setIsNavOpen] = useState(false); // Fixed the typo here

  const Navtoggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div>
      <div
        className="fixed flex justify-center p-3 rounded-md top-2 right-2 align-center bg-secondary text-custom-blue md:top-1"
        onClick={() => {
          setTimeout(Navtoggle, 300);
        }}
        
      >
        <CgMenuHotdog size={20} />
      </div>

      {isNavOpen && (
        <div
          
          className="fixed flex flex-col items-center justify-between w-12 px-2 py-1 mt-10 bg-opacity-50 rounded-full md:mt-32 lg:mt-56 md:w-16 left-1 md:left-2 top-32 h-84 bg-secondary"
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
              <div className="p-2 mt-5 text-gray-300 rounded-full cursor-pointer hover.bg-secondary hover:text-custom-blue">
                <FcServices size={18} />
              </div>
            </a>
            <a href="#Contact" data-scroll>
              <div className="p-2 mt-5 mb-5 text-gray-300 rounded-full cursor-pointer hover.bg-secondary hover:text-custom-blue">
                <IoMdContact size={18} />
              </div>
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
