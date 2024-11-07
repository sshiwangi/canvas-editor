import React from "react";
import ThemeSwitcher from "../custom/theme-switcher";

function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 dark:bg-gray-800 bg-white shadow-sm">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="/" className="text-2xl font-bold text-primary-600 dark:text-white">
          CanvasEdge
        </a>
        <div className="hidden md:flex space-x-6">
          <a
            href="#features"
            className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition"
          >
            Features
          </a>
          <a
            href="#how-it-works"
            className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition"
          >
            How It Works
          </a>
          {/* <a
              href="#pricing"
              className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition"
            >
              Pricing
            </a> */}
        </div>
        <div className="flex items-center space-x-4">
          <ThemeSwitcher />
          {/* <a
              href="#"
              className="text-primary-600 dark:text-white hover:text-primary-700 dark:hover:text-primary-400 transition"
            >
              Log In
            </a> */}
          <a
            href="/dashboard"
            className="bg-primary-600 dark:bg-primary-700 text-white px-4 py-2 rounded-lg hover:bg-primary-700 dark:hover:bg-primary-600 transition"
          >
            Try now
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
