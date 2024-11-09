import React from "react";
import { motion } from "framer-motion";
import { ChevronRight, X } from "lucide-react";

const TemplatesView = ({ onClose }) => {
  return (
    <motion.div
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -20, opacity: 0 }}
      className="fixed left-[72px] top-0 bottom-0 w-[420px] bg-white dark:bg-gray-900 overflow-y-auto shadow-xl border-r border-gray-100 dark:border-gray-800 z-50"
    >
      {/* Close Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={onClose}
        className="absolute top-6 right-6 p-2 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-400 z-50"
      >
        <X size={20} />
      </motion.button>
      <div className="px-8 py-6">
        <div className="flex-1 bg-white dark:bg-gray-900 overflow-y-auto px-8 py-6">
          {/* Tabs */}
          <div className="flex gap-8 border-b border-gray-100 dark:border-gray-800 mb-6">
            <div className="relative">
              <button className="text-xl font-medium text-gray-900 dark:text-white pb-4 mb-6">
                Templates
              </button>
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#4263EB]" />
            </div>
            <button className="text-xl font-medium text-gray-400 dark:text-gray-500 pb-4">
              Styles
            </button>
          </div>
        </div>

        {/* Search Tags */}
        <div className="flex gap-3 mb-12 overflow-x-auto pb-2 scrollbar-hide">
          <ScrollContainer>
            {["Diwali", "Happy diwali", "Food", "Dhanteras", "Sale"].map(
              (tag) => (
                <motion.button
                  key={tag}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-4 py-2 rounded-full bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 whitespace-nowrap"
                >
                  {tag}
                </motion.button>
              )
            )}
          </ScrollContainer>
        </div>

        {/* Recently Used Section */}
        <div className="mb-12">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-medium text-gray-900 dark:text-white">
              Recently used
            </h2>
            <button className="text-[#4263EB] font-medium hover:underline">
              See all
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <RecentCard
              imageSrc="/api/placeholder/600/600"
              title="Limited Edition"
              subtitle="Get your limited edition jewelry collection, make sure you get it.."
            />
            <RecentCard
              imageSrc="/api/placeholder/600/600"
              title="NEW COLLECTION"
            />
          </div>
        </div>

        {/* All Results */}
        <div>
          <h2 className="text-xl font-medium text-gray-900 dark:text-white mb-4">
            All results
          </h2>
          <div className="grid grid-cols-2 gap-4">
            {[
              {
                title: "GET 30% OFF",
                subtitle: "Sale is on now",
                website: "www.reallygreatsite.com",
              },
              {
                title: "Winter Collection",
                subtitle: "New arrivals",
              },
              {
                title: "Elegant Jewellery",
                subtitle: "Now Restocked",
              },
              {
                title: "New Collection",
                subtitle: "BARCELLE JEWELLERY",
              },
            ].map((item, index) => (
              <ResultCard key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ScrollContainer = ({ children }) => (
  <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
    {children}
  </div>
);

const RecentCard = ({ imageSrc, title, subtitle }) => (
  <motion.div
    whileHover={{ y: -2 }}
    className="relative rounded-2xl overflow-hidden bg-gray-50 dark:bg-gray-800 aspect-square"
  >
    <img src={imageSrc} alt={title} className="w-full h-full object-cover" />
    {subtitle && (
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/50 to-transparent text-white">
        <h3 className="font-medium">{title}</h3>
        <p className="text-sm text-white/80">{subtitle}</p>
      </div>
    )}
  </motion.div>
);

const ResultCard = ({ title, subtitle, website }) => (
  <motion.div
    whileHover={{ y: -2 }}
    className="relative rounded-2xl overflow-hidden bg-gray-50 dark:bg-gray-800 aspect-square"
  >
    <img
      src="/api/placeholder/600/600"
      alt={title}
      className="w-full h-full object-cover"
    />
    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/50 to-transparent text-white">
      <h3 className="font-medium">{title}</h3>
      {subtitle && <p className="text-sm text-white/80">{subtitle}</p>}
      {website && <p className="text-sm text-white/70">{website}</p>}
    </div>
  </motion.div>
);

export default TemplatesView;
