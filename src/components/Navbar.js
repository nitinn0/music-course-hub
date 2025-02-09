import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isInstrumentsOpen, setInstrumentsOpen] = useState(false);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <nav className="flex justify-between items-center p-6 bg-[#e5f0f7] relative">
      {/* Logo */}
      <div className="text-2xl font-bold cursor-pointer" onClick={() => navigate("/")}>
        The Crescendo
      </div>

      {/* Navigation Links */}
      <div className="flex space-x-6 text-gray-700 relative">
        {/* Courses Dropdown */}
        <div
          className="relative cursor-pointer hover:text-black"
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
        >
          <span onClick={() => navigate("/courses")}>Courses ▾</span>
          {isDropdownOpen && (
            <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md p-4">
              {/* Instruments Submenu */}
              <div
                className="font-semibold cursor-pointer hover:text-black"
                onMouseEnter={() => setInstrumentsOpen(true)}
                onMouseLeave={() => setInstrumentsOpen(false)}
              >
                Instruments ▸
              </div>
              {isInstrumentsOpen && (
                <div className="absolute left-48 top-0 w-64 bg-white shadow-lg rounded-md p-4">
                  <div className="font-semibold">Instrument Categories</div>
                  <ul className="mt-2 space-y-2">
                    {[
                      "🎹 Piano",
                      "🎸 Acoustic Guitar",
                      "🎸 Electric Guitar",
                      "🎻 Violin",
                      "🎹 Electronic Keyboard",
                      "🪕 Ukulele",
                      "🎼 Flute",
                      "🥁 Tabla",
                    ].map((instrument, index) => (
                      <li key={index} className="hover:text-black cursor-pointer">
                        {instrument}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Other Navigation Links */}
        <Link to="/about" className="hover:text-black">About us</Link>
        <Link to="/contact" className="hover:text-black">Talk to us</Link>
      </div>

      {/* Authentication Links */}
      <div className="flex space-x-4">
        {token ? (
          <button onClick={handleLogout} className="text-gray-700">Logout</button>
        ) : (
          <>
            <Link to="/login" className="text-gray-700">Login</Link>
            <Link to="/register" className="bg-black text-white px-4 py-2 rounded">
              Sign up free
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
