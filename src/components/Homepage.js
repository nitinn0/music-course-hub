import React from "react";
import Instructors from "./Instructors";
import Testimonials from "./Testimonials";
import MusicEducation from "./MusicEducation";

const Homepage = () => {
  return (
    <div className="bg-[#e5f0f7] text-center py-24 px-6">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
        🎶 Your Music, Your Way 🎶
      </h1>
      <p className="text-lg text-gray-700 mt-6 max-w-2xl mx-auto">
        Start your music learning journey here. Whether you're a beginner or an advanced musician, our structured courses will help you play, perform, and perfect your skills in no time!
      </p>
      <button className="mt-6 bg-black text-white px-6 py-3 rounded-md text-lg hover:bg-gray-800 transition">
        Start Learning Today
      </button>
      
      <Instructors />
      <Testimonials />
      <MusicEducation />
    </div>
  );
};

export default Homepage;
