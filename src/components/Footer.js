import { FaFacebook, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
export default function Footer() {

  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  }

  return (

    <footer className="bg-blue-300 text-black py-20 px-6 md:px-20">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
        <div className="col-span-2 md:col-span-1">
          <h2 className="text-2xl font-bold">Crescendo</h2>
        </div>
        <div>
          <h3 className="font-bold uppercase text-sm">Platform</h3>
          <ul className="mt-2 space-y-1">
            <li onClick={() => navigate('/courses')} style={{cursor:"pointer"}}>Courses</li>
            <li><a href="mailto:nitinkapoor117@gmail.com" style={{ textDecoration: "none", color: "inherit", cursor: "pointer" }}>Email</a></li>
            <ul>
              {token ? (
                <li onClick={handleLogout} style={{cursor:"pointer"}}>Logout</li> 
              ): (
                <li onClick={() => navigate('/login')} style={{cursor:"pointer"}}>Login</li>
              )}
            </ul>
          </ul>
        </div>
        <div>
          <h3 className="font-bold uppercase text-sm">Features</h3>
          <ul className="mt-2 space-y-1" style={{cursor:"pointer"}}>
            <li>Online courses</li>
            <li>Webinars</li>
            <li onClick={() => navigate('/contact')}>Coaching</li>
            <li>Community</li>
            <li>Blogging</li>
            <li>Newsletters</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold uppercase text-sm">Resources</h3>
          <ul className="mt-2 space-y-1">
            <li onClick={() => navigate('/about')}>About Us</li>
            <li>Staff</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold uppercase text-sm">Support</h3>
          <ul className="mt-2 space-y-1" style={{cursor:"pointer"}}>
            <li onClick={() => navigate('/contact')}>Contact us</li>
            <li onClick={() => navigate('/')}>Getting started</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center mt-10 border-t pt-6 px-8 bg-blue-300">
      <p className="text-sm text-gray-700">The Crescendo &copy; 2025</p>
      
      <div className="flex space-x-6 mt-4 md:mt-0">
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="text-2xl hover:text-blue-200 transition duration-300" />
        </a>
        
        <a href="https://www.linkedin.com/in/garv-kapoor-188984202/" target="_blank" rel="noopener noreferrer">
          <FaFacebook className="text-2xl hover:text-blue-200 transition duration-300" />
        </a>
        
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="text-2xl hover:text-blue-200 transition duration-300" />
        </a>
        
        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
          <FaYoutube className="text-2xl hover:text-blue-200 transition duration-300" />
        </a>
      </div>
    </div>
    </footer>
  );
}