import React from "react";

const instructors = [
  {
    name: "Garv Kapoor",
    specialization: "Head",
    qualification: "Qualification --",
    experience: "3+ Years",
    image: "https://via.placeholder.com/150", // Replace with actual image URL
  },
  {
    name: "Garv Kapoor",
    specialization: "Guitar",
    qualification: "Certified Guitarist",
    experience: "1+ Years",
    image: "https://via.placeholder.com/150", // Replace with actual image URL
  },
];

const Instructors = () => {
  return (
    <section className="bg-[#e5f0f7] py-12 mt-28 text-center">
      <h2 className="text-3xl font-semibold text-gray-800">Meet Our</h2>
      <h1 className="text-4xl font-bold text-blue-900 mb-14">Talented Instructors</h1>
      <div className="flex justify-center">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 max-w-3xl w-full">
    {instructors.map((instructor, index) => (
      <div key={index} className="bg-white p-6 rounded-xl shadow-lg max-w-sm mx-6 hover:scale-105 transition-transform">
        <img
          src={instructor.image}
          alt={instructor.name}
          className="w-36 h-48 object-cover rounded-lg mx-auto mb-4"
        />
        <h3 className="text-xl font-semibold text-gray-800 text-center">{instructor.name}, {instructor.specialization}</h3>
        <p className="text-gray-600 text-center">{instructor.qualification}</p>
        <p className="text-gray-600 font-bold text-center">Experience - {instructor.experience}</p>
      </div>
    ))}
  </div>
</div>
    </section>
  );
};

export default Instructors;
