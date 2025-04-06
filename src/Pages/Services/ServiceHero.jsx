import React from "react";
import { FaArrowRight } from "react-icons/fa";

const ServiceHero = () => {
  return (
    <section className="px-4 py-8 md:py-12 rounded-lg">
      <div className="bg-[#030303] min-h-[90vh] md:min-h-[40vh] lg:min-h-[80vh] rounded-2xl flex flex-col md:flex-row items-center p-4 sm:p-6 md:p-8 lg:px-40 py-20 md:py-0">
        {/* Content Section */}
        <div className="flex-1 flex flex-col justify-center space-y-4 md:space-y-6 text-white md:pr-8 lg:pr-12">
          {/* Main Heading */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight max-w-2xl">
            Comprehensive Pest Control Services Tailored to Your Needs
          </h1>

          {/* Description */}
          <p className="text-base md:text-lg text-gray-400 max-w-xl">
            Explore our range of customized pest control services, designed to
            protect your home and business from pests with effective,
            eco-friendly solutions.
          </p>
        </div>

        {/* Button Section */}
        <div className="flex-shrink-0 mt-6 md:mt-0">
          <button className="bg-[#eee82c] cursor-pointer text-black font-bold py-3 px-6 rounded-full flex items-center gap-3 transition-all duration-300 transform hover:scale-105 hover:shadow-lg text-sm md:text-base">
            Book Now
            <span className="bg-white p-3 rounded-full text-black transition-all duration-300 transform hover:scale-110">
              <FaArrowRight />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;
