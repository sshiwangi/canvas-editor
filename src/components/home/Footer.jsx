import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">CanvasEdge</h3>
            <p className="text-gray-400 dark:text-gray-300">
              Empowering creativity with our intuitive canvas editor. Create
              stunning designs effortlessly.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Product</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition dark:text-gray-300 dark:hover:text-gray-200"
                >
                  Features
                </a>
              </li>
              {/* <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition dark:text-gray-300 dark:hover:text-gray-200"
                  >
                    Pricing
                  </a>
                </li> */}
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition dark:text-gray-300 dark:hover:text-gray-200"
                >
                  Templates
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition dark:text-gray-300 dark:hover:text-gray-200"
                >
                  AI Tools
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition dark:text-gray-300 dark:hover:text-gray-200"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition dark:text-gray-300 dark:hover:text-gray-200"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition dark:text-gray-300 dark:hover:text-gray-200"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition dark:text-gray-300 dark:hover:text-gray-200"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition dark:text-gray-300 dark:hover:text-gray-200"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition dark:text-gray-300 dark:hover:text-gray-200"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition dark:text-gray-300 dark:hover:text-gray-200"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition dark:text-gray-300 dark:hover:text-gray-200"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr className="border-gray-700 my-8 dark:border-gray-600" />
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm dark:text-gray-300">
            © 2023 CanvasEdge. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white transition dark:text-gray-300 dark:hover:text-gray-200">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition dark:text-gray-300 dark:hover:text-gray-200">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition dark:text-gray-300 dark:hover:text-gray-200">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
