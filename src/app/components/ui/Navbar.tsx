"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const Navbar = () => {
  const [bgColor, setBgColor] = useState("bg-gray-900");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition < 100) {
        setBgColor("bg-gray-900"); // Moonlight-like color
      } else if (scrollPosition < 200) {
        setBgColor("bg-yellow-900"); // Brown color
      } else {
        setBgColor("bg-red-900"); // Red color
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <motion.nav
      className={`fixed top-0 w-full p-4 flex items-center justify-between z-50 transition-colors duration-300 ${bgColor} shadow-md`}
    >
      {/* Logo */}
      <div className="flex items-center">
        <Link href="/">
          <div className="cursor-pointer">
            <img src="/images/only-new-icon.png" alt="Logo" className="h-8 w-auto" />
          </div>
        </Link>
      </div>

      {/* Hamburger Menu (Visible on Small Screens) */}
      <div className="md:hidden">
        <button
          className="flex flex-col space-y-1 focus:outline-none"
          onClick={toggleMenu}
        >
          <span className={`block h-1 w-6 bg-white transition-transform ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block h-1 w-6 bg-white transition-opacity ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
          <span className={`block h-1 w-6 bg-white transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Desktop Menu (Visible on Medium and Large Screens) */}
      <ul className="hidden md:flex space-x-4">
        <li>
          <Link href="/components/info" className="text-white hover:text-gray-400">
            Info
          </Link>
        </li>
        <li>
          <Link href="/components/about" className="text-white hover:text-gray-400">
            About
          </Link>
        </li>
        <li>
          <Link href="/components/contact" className="text-white hover:text-gray-400">
            Contact
          </Link>
        </li>
      </ul>

      {/* Mobile Menu (Visible when Hamburger Menu is clicked) */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-gray-900 text-white md:hidden">
          <ul className="flex flex-col items-center space-y-4 py-4">
            <li>
              <Link
                href="/components/info"
                className="hover:text-gray-400"
                onClick={() => setIsMenuOpen(false)}
              >
                Info
              </Link>
            </li>
            <li>
              <Link
                href="/components/about"
                className="hover:text-gray-400"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/components/contact"
                className="hover:text-gray-400"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;
