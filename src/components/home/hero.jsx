import React, { useState } from "react";
import { motion } from "framer-motion";
import Sparkles from "../custom/Sparkles";
import { Link } from "react-router-dom";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");

  const handleMouseMove = (event) => {
    const { currentTarget, clientX, clientY } = event;
    const { left, top } = currentTarget.getBoundingClientRect();

    setMousePosition({
      x: clientX - left,
      y: clientY - top,
    });
  };

  return (
    <main className="relative min-h-screen bg-gradient-to-b from-white via-[#FAFAFA] to-[#F5F5F5] dark:bg-gradient-to-b dark:from-[#1A1A1A] dark:via-[#333333] dark:to-[#1b1b1b] overflow-hidden">
      {/* Background Effects */}
      <Sparkles />

      {/* Animated glow */}
      <motion.div
        className="absolute top-1/2 left-1/2 w-[1000px] h-[1000px] -translate-x-1/2 -translate-y-1/2"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="absolute inset-0 bg-[conic-gradient(from_0deg,transparent,rgba(0,255,150,0.1),transparent)] rounded-full blur-3xl" />
      </motion.div>

      {/* Green line effects */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 left-1/2 h-full w-[1px] bg-gradient-to-b from-transparent via-emerald-500/20 to-transparent"
          animate={{
            opacity: [0.2, 0.5, 0.2],
            height: ["0%", "100%", "0%"],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent"
          animate={{
            opacity: [0.2, 0.5, 0.2],
            width: ["0%", "100%", "0%"],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative container mx-auto px-4 pt-20">
        <div className="max-w-6xl mx-auto text-center">
          {/* EQTY Logo/Box */}
          <motion.div
            className="w-24 h-24 mx-auto my-12 relative"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="absolute inset-0 bg-emerald-500/20 rounded-2xl blur-xl" />
            <div className="relative bg-black/80 backdrop-blur border border-emerald-500/30 rounded-2xl w-full h-full grid grid-cols-3 gap-1 p-2">
              {[...Array(9)].map((_, i) => (
                <motion.div
                  key={i}
                  className="bg-emerald-500/30 rounded"
                  animate={{
                    opacity: [0.3, 1, 0.3],
                  }}
                  transition={{
                    duration: 2,
                    delay: i * 0.2,
                    repeat: Infinity,
                  }}
                />
              ))}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white font-bold"></span>
              </div>
            </div>
          </motion.div>

          <div className="relative" onMouseMove={handleMouseMove}>
            {/* Animated cursor */}
            <motion.div
              className="hidden md:block fixed w-4 h-4 pointer-events-none mix-blend-difference"
              animate={{
                x: mousePosition.x - 8,
                y: mousePosition.y - 8,
                scale: cursorVariant === "hover" ? 4 : 1,
              }}
              transition={{
                type: "spring",
                mass: 0.3,
                stiffness: 800,
                damping: 30,
              }}
            >
              <div className="w-full h-full bg-white rounded-full" />
            </motion.div>

            {/* Main heading with hover effect */}
            <motion.h1
              className="text-6xl md:text-[80px] text-[#1A1A1A] dark:text-white leading-[1.1] tracking-[-0.02em] mb-6text-5xl md:text-7xl font-bold mb-6 relative cursor-none"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              onMouseEnter={() => setCursorVariant("hover")}
              onMouseLeave={() => setCursorVariant("default")}
            >
              {/* <motion.span
                className="inline-block"
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.2 },
                }}
              > */}
              Create {/* </motion.span> */}
              {/* <motion.span
                className="inline-block"
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.2 },
                }}
              > */}
              stunning {/* </motion.span> */}
              {/* <motion.span
                className="inline-block"
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.2 },
                }}
              > */}
              designs {/* </motion.span> */}
              {/* <motion.span
                className="inline-block"
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.2 },
                }}
              > */}
              with {/* </motion.span> */}
              {/* <motion.span
                className="inline-block"
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.2 },
                }}
              > */}
              ease
              {/* </motion.span> */}
            </motion.h1>

            {/* Subheading with hover effect */}
            <motion.p
              className="text-xl md:text-2xl text-gray-400 mb-12 cursor-none"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              onMouseEnter={() => setCursorVariant("hover")}
              onMouseLeave={() => setCursorVariant("default")}
            >
              <motion.span
                className="inline-block"
                whileHover={{
                  scale: 1.02,
                  color: "white",
                  transition: { duration: 0.2 },
                }}
              >
                Upload images, adjust text, change colors, and generate creative
                content seamlessly with our powerful canvas editor.
              </motion.span>
            </motion.p>
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <Link
              to={"/signup"}
              className="px-8 py-3 mb-10 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full font-medium transition-colors relative group overflow-hidden"
            >
              <span className="relative z-10">Get Started</span>
              {/* <motion.div
                className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-600"
                initial={{ x: "100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              /> */}
            </Link>
          </motion.div>

          {/* Secondary Actions */}
          <motion.div
            className="flex flex-wrap mt-20 items-center justify-center gap-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            <button className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-[#666666] dark:text-gray-300 rounded-full text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors flex items-center gap-2">
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 4L12 20M12 4L18 10M12 4L6 10"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Create Content
            </button>
            <button className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-[#666666] dark:text-gray-300 rounded-full text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors flex items-center gap-2">
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Content Optimization
            </button>
            <button className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-[#666666] dark:text-gray-300 rounded-full text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors flex items-center gap-2">
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 16L8.586 11.414C9.36768 10.6327 10.6323 10.6327 11.414 11.414L16 16M14 14L15.586 12.414C16.3677 11.6327 17.6323 11.6327 18.414 12.414L20 14M14 8H14.01M6 20H18C19.1046 20 20 19.1046 20 18V6C20 4.89543 19.1046 4 18 4H6C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Distribute
            </button>
          </motion.div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
