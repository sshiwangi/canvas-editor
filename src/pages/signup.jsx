import React from "react";
import { motion } from "framer-motion";
import { Apple, Wand2, Layout, Palette } from "lucide-react";

const SignUp = () => {
  return (
    <div className="min-h-screen grid md:grid-cols-2">
      {/* Left Section */}
      <div className="bg-[#6366F1] dark:bg-[#4F46E5] p-12 relative">
        {/* Back Button */}
        <div className="mb-20">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white/10 p-3 rounded-xl"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 12H5M5 12L12 19M5 12L12 5"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.button>
        </div>

        {/* Content */}
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-semibold text-white mb-4"
          >
            Start creating designs
            <br />
            with CanvasEdge
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white/80 text-lg"
          >
            Create a free account and unlock the power of AI-driven design. Try
            all features free for 30 days, no credit card required.
          </motion.p>
        </div>

        {/* Mockup Image */}
        <div className="mt-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-[#1A1A3D] dark:bg-gray-900 rounded-t-xl p-2"
          >
            {/* Window Controls */}
            <div className="flex gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>

            {/* App Mockup */}
            <div className="flex">
              {/* Sidebar */}
              <div className="w-16 bg-[#13132F] dark:bg-gray-800 rounded-lg p-2 flex flex-col gap-4">
                <div className="w-8 h-8 bg-white/10 rounded-lg" />
                {[...Array(8)].map((_, i) => (
                  <div key={i} className="w-8 h-8 bg-white/5 rounded-lg" />
                ))}
              </div>

              {/* Content Area */}
              <div className="flex-1 pl-4">
                {/* Design Tools */}
                <div className="flex gap-3 mb-4">
                  {[Wand2, Layout, Palette].map((Icon, i) => (
                    <div
                      key={i}
                      className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center"
                    >
                      <Icon className="w-4 h-4 text-white/50" />
                    </div>
                  ))}
                </div>
                {/* Canvas Preview Lines */}
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="h-4 bg-white/5 rounded-lg w-full mb-3"
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Right Section */}
      <div className="p-12 flex items-center bg-white dark:bg-gray-900">
        <div className="w-full max-w-md mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl font-semibold text-gray-900 dark:text-white mb-8"
          >
            Create your account
          </motion.h2>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="space-y-6"
          >
            {/* Name Field */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6366F1] focus:border-transparent dark:text-white dark:placeholder-gray-400"
              />
            </div>

            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Email<span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6366F1] focus:border-transparent dark:text-white dark:placeholder-gray-400"
              />
            </div>

            {/* Password Field */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Password<span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                id="password"
                placeholder="Create password"
                className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6366F1] focus:border-transparent dark:text-white dark:placeholder-gray-400"
              />
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                Must be at least 8 characters.
              </p>
            </div>

            {/* Sign Up Button */}
            <button
              type="submit"
              className="w-full bg-[#6366F1] text-white py-3 rounded-lg hover:bg-[#5355E8] transition-colors"
            >
              Sign Up
            </button>
          </motion.form>

          {/* Social Sign Up */}
          <div className="mt-8">
            <div className="text-center text-sm text-gray-500 dark:text-gray-400 mb-4">
              or continue with
            </div>
            <div className="grid grid-cols-2 gap-4">
              <button className="flex items-center justify-center gap-2 px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors dark:text-white">
                <img
                  src="/api/placeholder/20/20"
                  alt="Google"
                  className="w-5 h-5"
                />
                Google
              </button>
              <button className="flex items-center justify-center gap-2 px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors dark:text-white">
                <Apple className="w-5 h-5" />
                Apple
              </button>
            </div>
          </div>

          {/* Sign In Link */}
          <div className="text-center mt-8">
            <span className="text-gray-600 dark:text-gray-400">
              Already have an account?{" "}
            </span>
            <a href="/login" className="text-[#6366F1] font-medium hover:underline">
              Sign in
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
