import React from "react";
import { FaStar, FaPhoneAlt, FaArrowRight } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="px-4 py-8 md:py-12 rounded-lg">
      <div className="bg-[#030303] min-h-[70vh] md:min-h-[80vh] rounded-2xl flex flex-col lg:grid md:grid-cols-2 gap-6 md:gap-8 p-4 sm:p-6 md:p-8 lg:p-12">
        {/* Image Section */}
        <div className="order-1 lg:order-2 flex items-center justify-center">
          <div className="relative w-full h-full max-w-md md:max-w-xl lg:max-w-lg">
            <img
              src="/pest-man.avif"
              alt="A man spraying insecticide"
              className="rounded-3xl object-cover w-full h-full max-h-[400px] md:max-h-[550px] lg:max-h-[600px] shadow-2xl"
            />
            <div className="absolute -bottom-4 -right-4 bg-[#eee82c] text-black p-3 md:p-4 rounded-xl shadow-lg">
              <p className="font-bold text-sm md:text-base">Since 2005</p>
              <p className="text-xs md:text-sm">Trusted Service</p>
            </div>
          </div>
        </div>

        {/* Content Section - Second on mobile/tablet */}
        <div className="order-2 lg:order-none flex flex-col justify-center space-y-4 md:space-y-6 text-white lg:ml-20">
          {/* Rating */}
          <div className="flex items-center space-x-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="text-yellow-400 text-sm md:text-base" />
              ))}
            </div>
            <p className="text-gray-300 text-sm md:text-base">500+ ratings</p>
          </div>

          {/* Main heading */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Reliable Pest Control for a Safer Tomorrow
          </h1>

          {/* Description */}
          <p className="text-base md:text-lg text-gray-400 max-w-xl">
            Available 24/7, dedicated to providing effective, eco-friendly pest
            solutions that protect your family, home, and business from unwanted
            pests.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-3 md:gap-4 mt-3 md:mt-4">
            <button className="bg-[#eee82c] cursor-pointer text-black font-bold py-2 px-4 md:py-2 md:px-6 rounded-full flex items-center gap-2 transition-all duration-300 transform hover:scale-105 text-sm md:text-base">
              Book Now
              <span className="bg-white p-2 md:p-3 rounded-full text-black">
                <FaArrowRight className="text-xs md:text-sm" />
              </span>
            </button>
            <button className="border-2 border-white hover:border-[#eee82c] text-white font-bold py-2 px-4 md:py-3 md:px-6 rounded-full flex items-center gap-2 transition-all duration-300 hover:text-[#eee82c] text-sm md:text-base">
              <FaPhoneAlt className="text-xs md:text-sm" />
              <a href="tel:+123456789">+123 456 789</a>
            </button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mt-6 md:mt-8 pt-4 md:pt-6 border-t-2 border-gray-400 lg:border-none">
            <div className="p-3 md:p-5 transition-all duration-300">
              <h2 className="text-sm md:text-md font-medium mb-1 md:mb-2">
                Experienced Professionals
              </h2>
              <p className="text-gray-300 text-xs md:text-sm">
                Certified experts delivering reliable results.
              </p>
            </div>

            <div className="p-3 md:p-5 transition-all duration-300">
              <h2 className="text-sm md:text-md font-medium mb-1 md:mb-2">
                24/7 Availability
              </h2>
              <p className="text-gray-300 text-xs md:text-sm">
                Always ready for emergency pest control.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;