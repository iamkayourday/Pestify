import React from 'react'
import Hero from './Hero'
import Ratings from './Ratings'
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const Home = () => {
  return (
    <div>
      <Hero />
      <div className="flex flex-col md:flex-row justify-center p-6 md:p-10 max-w-6xl mx-auto gap-8">
        {/* Solutions Section */}
        <div className="max-w-md textleft md:text-left">
          <p className="text-[#807b00] text-lg font-medium uppercase mb-2">
            Solutions
          </p>
          <h2 className="font-bold text-2xl md:text-3xl leading-relaxed ">
            Tailored Pest Control Solutions for Every Need
          </h2>
        </div>

        {/* Description Section */}
        <div className="max-w-xl textleft md:text-left">
          <p className="mb-5 text-lg leading-relaxed">
            Our expert team offers customized pest control services, designed to
            meet the unique challenges of your home or business. Trust us to
            provide reliable, long-lasting solutions that ensure your space
            remains pest-free.
          </p>
          <Link
            to="/services"
            className="inline-flex items-center gap-3  font-semibold text-lg  rounded-md transition-transform transform hover:scale-105"
          >
            All Services
            <FaArrowRight className="text-xl" />
          </Link>
        </div>
      </div>
      <Ratings />
    </div>
  )
}

export default Home