import React from "react";
import { motion } from "framer-motion";
import { Wand2, Palette } from "lucide-react";

const SelectionCard = ({
  title,
  description,
  buttonText,
  icon: Icon,
  onClick,
}) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.98 }}
      className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center relative group"
    >
      {/* Gradient border effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute inset-[1px] rounded-2xl bg-white dark:bg-gray-800" />

      {/* Content */}
      <div className="relative">
        {/* Icon Container */}
        <motion.div
          className="w-24 h-24 mx-auto mb-6 relative"
          whileHover={{ rotate: 5 }}
        >
          <div className="absolute inset-0 bg-emerald-500/10 dark:bg-emerald-500/20 rounded-2xl blur-xl" />
          <div className="relative bg-gradient-to-br from-emerald-500/10 to-blue-500/10 dark:from-emerald-500/20 dark:to-blue-500/20 rounded-2xl w-full h-full flex items-center justify-center">
            <Icon
              className="w-12 h-12 text-emerald-500 dark:text-emerald-400"
              strokeWidth={1.5}
            />
          </div>
        </motion.div>

        <h3 className="text-2xl font-medium text-[#1A1A1A] dark:text-white mb-3">
          {title}
        </h3>
        <p className="text-[#666666] dark:text-gray-400 mb-6">{description}</p>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="bg-[#4285f4] hover:bg-[#3367d6] text-white px-6 py-3 rounded-full font-medium transition-colors"
          onClick={onClick}
        >
          {buttonText}
        </motion.button>
      </div>
    </motion.div>
  );
};

const DesignApproach = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-[#FAFAFA] to-[#F5F5F5] dark:bg-gradient-to-b dark:from-[#1A1A1A] dark:via-[#333333] dark:to-[#1b1b1b] py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-normal text-[#1A1A1A] dark:text-white mb-8">
            How would you like to design your website?
          </h1>
        </motion.div>

        {/* Cards Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12"
        >
          <SelectionCard
            title="Generate a Design with AI"
            description="Get a personalized site design in seconds."
            buttonText="Generate a Design"
            icon={Wand2}
            onClick={() => {}}
          />
          <SelectionCard
            title="Customize a Template"
            description="Browse thousands of designs, then pick one to customize."
            buttonText="Pick a Template"
            icon={Palette}
            onClick={() => {}}
          />
        </motion.div>

        {/* Footer Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <motion.a
            href="#"
            className="text-[#4285f4] dark:text-[#4285f4] hover:text-[#3367d6] dark:hover:text-[#3367d6] inline-flex items-center gap-2 text-lg font-medium"
            whileHover={{ x: 5 }}
          >
            Continue with Setup for Now
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default DesignApproach;
