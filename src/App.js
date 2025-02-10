import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Register from "./components/Register";
import Courses from "./components/Courses";
import CourseDetails from "./components/CourseDetails";
import EnrollForm from "./components/Enroll";
import BuyCourse from "./components/BuyCourse";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import MusicEducation from "./components/MusicEducation";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/instruments" element={<MusicEducation/>} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/course/:id" element={<CourseDetails />} />
        <Route path="/enroll/:courseId" element={<EnrollForm />} />
        <Route path="/buy-course/:id" element={<BuyCourse />} /> {/* Fixed duplicate route */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
