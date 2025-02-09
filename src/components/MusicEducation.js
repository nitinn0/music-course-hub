import React, { useEffect, useState } from "react";

const MusicEducation = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("http://localhost:3000/course/getCategories"); // Correct GET endpoint
        const data = await response.json();

        if (response.ok) {
          setCategories(data.categories); 
        } else {
          console.error("Error fetching categories:", data.error);
        }
      } catch (error) {
        console.error("Network error:", error);
      } finally {
        setLoading(false); 
      }
    };

    fetchCategories();
  }, []);

  if (loading) {
    return (
      <div className="text-center py-24">
        <h2 className="text-3xl font-bold">Loading...</h2>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-white to-blue-200 text-black py-24 px-6 md:px-20 min-h-screen">
      <h2 className="text-4xl font-bold text-center mb-10">Explore the World of Music</h2>
      <p className="text-lg text-center mb-12">Unlock your musical potential with our expertly designed courses.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories.map((category, index) => (
          <div
            key={index}
            className="bg-white text-black p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform mt-4 mb-16"
          >
            <img
              src={category.image} // Assuming each category has an 'image' property
              alt={category.title}
              className="w-full h-80 object-cover rounded-xl mb-4"
            />
            <h3 className="text-2xl font-semibold">{category.title}</h3>
            <p className="mt-2 text-gray-700">{category.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MusicEducation;
