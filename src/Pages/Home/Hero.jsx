import React from "react";
import { FaStar, FaPhoneAlt, FaArrowRight, FaClock } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="md:px-4 p-2 py-12 rounded-lg">
      {/* Reversed grid order with md:order-none to control mobile vs desktop layout */}
      <div className="bg-[#030303] min-h-[80vh] rounded-2xl grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 md:p-12">
        {/* Right side - now first on mobile */}
        <div className="flex items-center justify-center order-first md:order-none">
          <div className="relative w-full h-full max-w-lg">
            <img
              src="/pest-man.avif"
              alt="A man spraying insecticide"
              className="rounded-3xl object-cover w-full h-full max-h-[600px] shadow-2xl"
            />
            <div className="absolute -bottom-5 -right-5 bg-[#eee82c] text-black p-4 rounded-xl shadow-lg">
              <p className="font-bold">Since 2005</p>
              <p className="text-sm">Trusted Service</p>
            </div>
          </div>
        </div>

        {/* Left side - now second on mobile */}
        <div className="flex flex-col justify-center space-y-6 text-white md:mr-20 order-last md:order-none">
          {/* Rating */}
          <div className="flex items-center space-x-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="text-yellow-400" />
              ))}
            </div>
            <p className="text-gray-300">500+ ratings</p>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Reliable Pest Control for a Safer Tomorrow
          </h1>

          {/* Description */}
          <p className="text-lg text-gray-400 max-w-2xl">
            Available 24/7, dedicated to providing effective, eco-friendly pest
            solutions that protect your family, home, and business from unwanted
            pests.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-4">
            <button className="bg-[#eee82c] cursor-pointer text-black font-bold py-2 px-6 rounded-full flex items-center gap-2 transition-all duration-300 transform hover:scale-105">
              Book Now
              <span className="bg-white p-3 rounded-full text-black">
                <FaArrowRight />
              </span>
            </button>
            <button className="border-2 border-white hover:border-[#eee82c] text-white font-bold py-3 px-6 rounded-full flex items-center gap-2 transition-all duration-300 hover:text-[#eee82c]">
              <FaPhoneAlt />
              <a href="tel:+123456789">+123 456 789</a>
            </button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 sm:border-t-2 lg:border-none border-gray-400">
            <div className="p-5 transition-all duration-300 ">
              <h2 className="text-md font-medium mb-2 flex items-center gap-2">
                Experienced Professionals
              </h2>
              <p className="text-gray-300">
                Certified experts delivering reliable results.
              </p>
            </div>

            <div className="p-5 rounded-xl transition-all duration-300">
              <h2 className="text-md font-medium mb-2 flex items-center gap-2">
                24/7 Availability
              </h2>
              <p className="text-gray-300">
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