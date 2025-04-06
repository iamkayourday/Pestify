import React, { useState } from "react";
import { Link } from "react-router-dom";
import Top from "../Pages/Home/Top";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Animation variants
  const mobileMenuVariants = {
    open: { 
      height: "auto",
      opacity: 1,
      transition: { 
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    closed: { 
      height: 0,
      opacity: 0,
      transition: { 
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const navItemVariants = {
    hidden: { y: -10, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <>
      <Top />
      <header className="sticky top-0 z-50 bg-white max-w-7xl mx-auto">
        <nav>
          <div className="container mx-auto flex justify-between items-center py-4 px-4 md:px-10">
            {/* Logo Section */}
            <motion.div 
              className="flex items-center space-x-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <img src="/pest.png" alt="Pestora Logo" className="h-6 w-auto" />
              <h1 className="text-xl font-medium text-black">Pestora</h1>
            </motion.div>

            {/* Desktop Navigation Links */}
            <motion.ul 
              className="hidden md:flex space-x-6"
              initial="hidden"
              animate="visible"
              transition={{ staggerChildren: 0.1 }}
            >
              <motion.li variants={navItemVariants}>
                <Link
                  to="/"
                  className="text-black hover:text-gray-400 font-medium transition duration-300"
                >
                  Home
                </Link>
              </motion.li>
              <motion.li variants={navItemVariants}>
                <Link
                  to="/about"
                  className="text-black hover:text-gray-400 font-medium transition duration-300"
                >
                  About
                </Link>
              </motion.li>
              <motion.li variants={navItemVariants}>
                <Link
                  to="/services"
                  className="text-black hover:text-gray-400 font-medium transition duration-300"
                >
                  Services
                </Link>
              </motion.li>
              <motion.li variants={navItemVariants}>
                <Link
                  to="/blog"
                  className="text-black hover:text-gray-400 font-medium transition duration-300"
                >
                  Blog
                </Link>
              </motion.li>
              <motion.li variants={navItemVariants}>
                <Link
                  to="/contact"
                  className="text-black hover:text-gray-400 font-medium transition duration-300"
                >
                  Contact
                </Link>
              </motion.li>
            </motion.ul>

            {/* Mobile Menu Button */}
            <motion.div 
              className="md:hidden"
              whileTap={{ scale: 0.9 }}
            >
              <button
                onClick={toggleMobileMenu}
                className="text-black hover:text-gray-600 focus:outline-none"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <FaTimes className="h-6 w-6" />
                ) : (
                  <FaBars className="h-6 w-6" />
                )}
              </button>
            </motion.div>
          </div>

          {/* Mobile Navigation Menu */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                className="md:hidden bg-white overflow-hidden"
                variants={mobileMenuVariants}
                initial="closed"
                animate="open"
                exit="closed"
              >
                <div className="container mx-auto px-4 flex justify-center items-center">
                  <ul className="flex flex-col space-y-4 text-center w-full py-4">
                    <motion.li
                      initial={{ y: -10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.1 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Link
                        to="/"
                        className="block text-black hover:text-gray-400 font-medium py-2"
                        onClick={toggleMobileMenu}
                      >
                        Home
                      </Link>
                    </motion.li>
                    <motion.li
                      initial={{ y: -10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.15 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Link
                        to="/about"
                        className="block text-black hover:text-gray-400 font-medium py-2"
                        onClick={toggleMobileMenu}
                      >
                        About
                      </Link>
                    </motion.li>
                    <motion.li
                      initial={{ y: -10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Link
                        to="/services"
                        className="block text-black hover:text-gray-400 font-medium py-2"
                        onClick={toggleMobileMenu}
                      >
                        Services
                      </Link>
                    </motion.li>
                    <motion.li
                      initial={{ y: -10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.25 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Link
                        to="/blog"
                        className="block text-black hover:text-gray-400 font-medium py-2"
                        onClick={toggleMobileMenu}
                      >
                        Blog
                      </Link>
                    </motion.li>
                    <motion.li
                      initial={{ y: -10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Link
                        to="/contact"
                        className="block text-black hover:text-gray-400 font-medium py-2"
                        onClick={toggleMobileMenu}
                      >
                        Contact
                      </Link>
                    </motion.li>
                  </ul>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </header>
    </>
  );
};

export default Header;