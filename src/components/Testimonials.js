import React from "react";

const Testimonials = () => {
  return (
    <section className="flex flex-col md:flex-row items-center bg-[#b0cee3] p-6 md:p-16 rounded-lg gap-6 md:gap-12 mt-20">
      <div className="w-full md:w-1/2 flex justify-center">
        <div className="relative overflow-hidden rounded-2xl shadow-xl transform md:rotate-1">
          <img
            src='/mainImg.jpg'
            alt="Testimonial"
            className="w-[98%] max-w-[300px] md:max-w-[530px] object-cover rounded-2xl"
          />
        </div>
      </div>
      
      <div className="w-full md:w-1/2 text-center md:text-left px-4 md:px-8">
        <p className="text-xl md:text-5xl font-bold text-[#003366] leading-snug font-serif">
          "Unlock your musical potential and inspire the world—learn, create, and grow with expert guidance!"
        </p>

        <p className="mt-8 text-gray-700 text-base md:text-lg font-sans">
          Welcome to The Crescendo, your one-stop destination for high-quality music education. Led by experienced instructors, our courses cover a wide range of instruments and techniques to help you grow as a musician.
        </p>
        
        <p className="mt-8 font-semibold text-gray-900 text-lg uppercase font-sans">Garv Kapoor</p>
        <p className="text-gray-600 text-lg font-sans">Head Teacher</p>
      </div>
    </section>
  );
};

export default Testimonials;
