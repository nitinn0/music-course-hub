import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-blue-50 text-gray-900 min-h-screen py-32 px-8 md:px-24">
      <h2 className="text-5xl font-extrabold text-center mb-12">
        About <span className="text-blue-600">The Crescendo</span>
      </h2>
      
      <p className="text-xl text-center max-w-4xl mx-auto mb-16">
        The Crescendo is your ultimate destination for learning music. Whether you're a beginner or an advanced musician, our expertly designed courses will help you master your favorite instruments and refine your musical skills.
      </p>

      {/* About Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        {/* Image Section */}
        <div className="flex justify-center">
          <img
            src="/logo.png"
            alt="About Us"
            className="w-full max-w-lg rounded-xl shadow-2xl transition-transform transform hover:scale-105"
          />
        </div>

        {/* Text Section */}
        <div>
          <h3 className="text-4xl font-semibold text-blue-600 mb-6">Our Mission</h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            We aim to make music education accessible, engaging, and enriching for all. Our structured courses, expert instructors, and hands-on learning approach ensure that every student gets the best experience. Whether you are a beginner or already an expert, our courses will guide you step-by-step.
          </p>
        </div>
      </div>

      <div className="mt-28">
        <h3 className="text-4xl font-semibold text-center text-blue-600 mb-16">Why Choose Us?</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="bg-white p-8 rounded-xl shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out">
            <h4 className="text-2xl font-bold text-blue-600 mb-4">Expert Instructors</h4>
            <p className="text-gray-700">
              Learn from industry professionals with years of experience in teaching and performing music.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out">
            <h4 className="text-2xl font-bold text-blue-600 mb-4">Structured Learning</h4>
            <p className="text-gray-700">
              Step-by-step courses designed for beginners and experts alike, ensuring a smooth learning curve.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out">
            <h4 className="text-2xl font-bold text-blue-600 mb-4"> Learn Anytime, Anywhere</h4>
            <p className="text-gray-700">
              Access our courses online and practice at your own pace, from the comfort of your home or on the go.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
