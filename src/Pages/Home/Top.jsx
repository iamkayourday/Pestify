import React from "react";
import { FaPhoneFlip, FaClock } from "react-icons/fa6";

const Top = () => {
  return (
    <div className="bg-[#eee82c] h-[40px] flex justify-center lg:justify-end items-center px-4 md:px-20">
      <span className="flex items-center space-x-2 mr-6 md:mr-10">
        <FaPhoneFlip className="text-[#000] text-[16px] md:text-[20px]" />
        <a className="text-[#000] text-xs md:text-sm" href="tel:+123456789">
          +123 456 789
        </a>
      </span>

      <span className="flex items-center space-x-2">
        <FaClock className="text-[#000] text-[16px] md:text-[20px]" />
        <p className="text-[#000] text-xs md:text-sm">Available 24/7</p>
      </span>
    </div>
  );
};

export default Top;