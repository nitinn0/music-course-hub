import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:3000/course/availableCourses")
      .then((response) => response.json())
      .then((data) => setCourses(data.availableCourses))
      .catch((error) => console.error("Error fetching courses:", error));
  }, []);

  return (
    <div className="bg-[#e5f0f7] min-h-screen py-14 px-6 md:px-20">
      <div className="bg-gradient-to-r from-blue-300 to-blue-500 py-6 rounded-xl mb-8 max-w-8xl mx-auto">
        <h1 className="text-3xl font-extrabold text-center text-white">Explore Our Courses</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {courses.map((course) => (
          <div
            key={course._id}
            className="bg-white p-6 rounded-2xl shadow-lg hover:scale-105 transition-all duration-300 transform cursor-pointer hover:shadow-xl"
            onClick={() => navigate(`/course/${course._id}`)} 
          >
            <img
              src={course.imageUrl}
              alt={course.title}
              className="w-full h-56 object-cover rounded-xl mb-4 transition-all duration-300 transform hover:scale-105"
            />
            <h3 className="text-2xl font-semibold text-gray-800">{course.title}</h3>
            <p className="text-gray-700 mt-2 text-sm">{course.description}</p>
            <p className="text-lg font-bold mt-3 text-blue-900">₹{course.price}</p>
            <div className="mt-3 text-blue-500 font-medium">Learn More &rarr;</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
