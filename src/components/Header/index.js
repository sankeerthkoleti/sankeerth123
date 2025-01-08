import { FaSearch } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { Component } from "react";
import "./index.css"
class Header extends Component {
  render() {
    return (
      <header className="h-12 md:h-14 lg:h-[6vw] w-[100vw] bg-black text-white sticky top-0 z-50 flex flex-col justify-center">
        <div className="mx-auto w-full px-6 py-1 flex flex-row justify-between md:items-center">
          
          {/* Logo Section */}
          <div className="flex sm:justify-start">
            <img
              src="https://assets.api.uizard.io/api/cdn/stream/8b3c73a9-22e6-4f88-ba3c-b3390de93eb1.png.png"
              alt="Logo"
              className="w-10 h-10  md:w-16 md:h-16 lg:w-20 lg:h-20" // Adjust logo size for different devices
            />
          </div>

          {/* Navigation Section */}
          <nav className="navi hidden lg:flex"> {/* Show only on medium and larger devices */}
            <ul className="md:text-sm lg:text-lg flex flex-row justify-center lg:space-x-6 font-bold">
              <li><a href="#" className="hover:text-yellow-600">Home</a></li>
              <li><a href="#" className="hover:text-yellow-600">Living</a></li>
              <li><a href="#" className="hover:text-yellow-500">Storage</a></li>
              <li><a href="#" className="hover:text-yellow-500">Dining</a></li>
              <li><a href="#" className="hover:text-yellow-500">Bedroom</a></li>
              <li><a href="#" className="hover:text-yellow-500">Mattress</a></li>
              <li><a href="#" className="hover:text-yellow-500">Study</a></li>
              <li><a href="#" className="hover:text-yellow-500">Office</a></li>
              <li><a href="#" className="hover:text-yellow-500">Outdoor</a></li>
            </ul>
          </nav>

          {/* Icons Section */}
          <div className="flex space-x-4 lg:space-x-10 mt-4 md:mt-0">
            <FaSearch className="h-3 w-3 lg:h-7 lg:w-7 " />
            <IoPersonSharp className="h-3 w-3 lg:h-7 lg:w-7" />
          </div>
        </div>
      </header>
    );
  }
}

export default Header;