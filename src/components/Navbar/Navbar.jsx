import React, { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/website/coffee_logo.png";
import { FaCoffee, FaBars, FaTimes } from "react-icons/fa";

const Navbar = ({ cart, setCart }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const servicesRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleCheckout = () => {
    navigate("/checkout");
  };

  const scrollToServices = () => {
    if (servicesRef.current) {
      servicesRef.current.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false); // Close mobile menu after click
    }
  };

  return (
    <div className="bg-brandDark text-white">
      <div className="mx-6 sm-lg:mx-10 py-2">
        <div className="flex justify-between items-center">
          {/* Logo section */}
          <div>
            <Link
              to="/"
              className="font-bold text-2xl sm-lg:text-2xl flex justify-center items-center gap-2 tracking-wider font-cursive"
            >
              <img src={Logo} alt="Logo" className="w-12 sm-lg:w-14" />
              Coffee Cafe
            </Link>
          </div>

          {/* Link section */}
          <div className="flex items-center gap-4">
            {/* Desktop Menu */}
            <div className="hidden sm-lg:flex items-center gap-4">
              <ul className="flex items-center gap-4">
                <li>
                  <Link
                    to="/"
                    className="inline-block text-lg sm-lg:text-xl py-2 sm-lg:py-4 px-4 text-white/70 hover:text-white duration-200"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <button
                    onClick={scrollToServices}
                    className="inline-block text-lg sm-lg:text-xl py-2 sm-lg:py-4 px-4 text-white/70 hover:text-white duration-200 bg-transparent border-none"
                  >
                    Services
                  </button>
                </li>
                <li>
                  <Link
                    to="/#about"
                    className="inline-block text-lg sm-lg:text-xl py-2 sm-lg:py-4 px-4 text-white/70 hover:text-white duration-200"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/products"
                    className="inline-block text-lg sm-lg:text-xl py-2 sm-lg:py-4 px-4 text-white/70 hover:text-white duration-200"
                  >
                    Products
                  </Link>
                </li>
              </ul>
              <button
                onClick={handleCheckout}
                className="bg-primary/70 text-white px-4 py-2 rounded-full flex items-center gap-3"
              >
                Cart ({cart.length})
                <FaCoffee className="text-lg sm-lg:text-xl text-white drop-shadow-sm cursor-pointer" />
              </button>
            </div>

            {/* Hamburger Menu */}
            <div className="sm-lg:hidden">
              <button onClick={toggleMenu} className="text-white">
                {isMenuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="sm-lg:hidden mt-4">
            <ul className="flex flex-col gap-4 text-center">
              <li>
                <Link
                  to="/"
                  onClick={toggleMenu}
                  className="inline-block text-lg sm-lg:text-xl py-4 px-4 text-white/70 hover:text-white duration-200"
                >
                  Home
                </Link>
              </li>
              <li>
                <button
                  onClick={() => {
                    scrollToServices();
                    toggleMenu();
                  }}
                  className="inline-block text-lg sm-lg:text-xl py-4 px-4 text-white/70 hover:text-white duration-200 bg-transparent border-none"
                >
                  Services
                </button>
              </li>
              <li>
                <Link
                  to="/#about"
                  onClick={toggleMenu}
                  className="inline-block text-lg sm-lg:text-xl py-4 px-4 text-white/70 hover:text-white duration-200"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  onClick={toggleMenu}
                  className="inline-block text-lg sm-lg:text-xl py-4 px-4 text-white/70 hover:text-white duration-200"
                >
                  Products
                </Link>
              </li>
              <li>
                <button
                  onClick={handleCheckout}
                  className="bg-primary/70 text-white px-4 py-2 rounded-full flex items-center gap-3 mx-auto"
                >
                  Cart ({cart.length})
                  <FaCoffee className="text-lg sm-lg:text-xl text-white drop-shadow-sm cursor-pointer" />
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
