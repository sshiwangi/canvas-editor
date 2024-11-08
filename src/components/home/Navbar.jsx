import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeSwitcher from "../custom/theme-switcher";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Features", href: "#features" },
    { name: "How It Works", href: "#how-it-works" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-lg bg-white/70 dark:bg-gray-900/70 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="/"
            className="text-2xl font-bold bg-gradient-to-r from-primary-500 to-primary-700 dark:from-primary-400 dark:to-primary-600 bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            CanvasEdge
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Nav Links */}
            <div className="flex space-x-6">
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="relative text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.name}
                  <motion.div
                    className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary-500 dark:bg-primary-400"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  />
                </motion.a>
              ))}
            </div>

            {/* Right Side Items */}
            <div className="flex items-center space-x-4">
              <ThemeSwitcher />
              <motion.a
                href="/dashboard"
                className="relative inline-flex items-center px-6 py-2 overflow-hidden rounded-full group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-primary-600 rounded-full group-hover:w-56 group-hover:h-56" />
                <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-t from-transparent via-transparent to-primary-600" />
                <span className="relative px-6 py-2 transition-all duration-200 bg-primary-600 dark:bg-primary-700 text-white rounded-full group-hover:bg-opacity-0">
                  Try now
                </span>
              </motion.a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden relative w-10 h-10 flex items-center justify-center"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            whileTap={{ scale: 0.9 }}
          >
            <div className="relative w-6 h-5">
              <motion.span
                className="absolute w-6 h-0.5 bg-gray-800 dark:bg-white transform transition-all duration-300"
                animate={{
                  top: mobileMenuOpen ? "50%" : "0%",
                  rotate: mobileMenuOpen ? 45 : 0,
                  translateY: mobileMenuOpen ? "-50%" : 0,
                }}
              />
              <motion.span
                className="absolute w-6 h-0.5 bg-gray-800 dark:bg-white top-1/2 -translate-y-1/2 transform transition-all duration-300"
                animate={{
                  opacity: mobileMenuOpen ? 0 : 1,
                }}
              />
              <motion.span
                className="absolute w-6 h-0.5 bg-gray-800 dark:bg-white transform transition-all duration-300"
                animate={{
                  bottom: mobileMenuOpen ? "50%" : "0%",
                  rotate: mobileMenuOpen ? -45 : 0,
                  translateY: mobileMenuOpen ? "50%" : 0,
                }}
              />
            </div>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4"
            >
              <div className="flex flex-col space-y-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-xl">
                {navItems.map((item) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                    whileHover={{ x: 10 }}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </motion.a>
                ))}
                <motion.div
                  className="pt-4 border-t border-gray-200 dark:border-gray-700"
                  whileHover={{ x: 10 }}
                >
                  <a
                    href="/dashboard"
                    className="inline-block w-full text-center bg-primary-600 dark:bg-primary-700 text-white px-6 py-2 rounded-full hover:bg-primary-700 dark:hover:bg-primary-600 transition-colors"
                  >
                    Try now
                  </a>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}

export default Navbar;
