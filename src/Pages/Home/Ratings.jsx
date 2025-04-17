import React from "react";

const Ratings = () => {
  return (
    <section className="mb-10 px-4">
      <div className="bg-black text-white grid grid-cols-2  lg:grid-cols-4 gap-6 mx-auto max-w-7xl rounded-xl p-10 md:p-16 lg:p-20">
        {[
          { value: "10+", label: "Years of Experience" },
          { value: "500+", label: "Satisfied Clients" },
          { value: "4k+", label: "Locations Served" },
          { value: "10k+", label: "Inspections Conducted" },
        ].map((item, index) => (
          <div key={index}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold mb-3">
              {item.value}
            </h1>
            <p className="text-gray-400 font-semibold text-base md:text-lg">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Ratings;