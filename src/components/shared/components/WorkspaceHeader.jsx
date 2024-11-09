import React from "react";
import { motion } from "framer-motion";
import {
  Monitor,
  Smartphone,
  TabletSmartphone,
  Users,
  Eye,
} from "lucide-react";

const WorkspaceHeader = () => {
  return (
    <div className="h-16 px-4 border-b border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 flex items-center justify-between">
      {/* Left Section */}
      <div className="flex items-center gap-8">
        {/* Project Title */}
        <div>
          <h1 className="text-lg font-semibold text-gray-900 dark:text-white">
            CanvasEdge
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Workspace
          </p>
        </div>

        {/* Dimensions Preview */}
        <div className="flex items-center gap-2">
          <div className="flex items-center bg-[#4263EB] text-white p-2 rounded-lg">
            <Monitor size={18} />
          </div>
          <div className="flex items-center text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 p-2 rounded-lg cursor-pointer">
            <Smartphone size={16} />
          </div>
          <div className="flex items-center text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 p-2 rounded-lg cursor-pointer">
            <TabletSmartphone size={16} />
          </div>
        </div>

        {/* Separator */}
        <div className="h-6 w-px bg-gray-200 dark:bg-gray-700" />

        {/* Canvas Size */}
        <div className="flex items-center gap-2 bg-gray-50 dark:bg-gray-800 px-3 py-1.5 rounded-lg">
          <span className="text-gray-700 dark:text-gray-300 font-medium">
            1440
          </span>
          <span className="text-gray-400">PX</span>
          <span className="text-gray-400">/</span>
          <span className="text-gray-700 dark:text-gray-300 font-medium">
            100
          </span>
          <span className="text-gray-400">%</span>
          <div className="w-4 h-4 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center ml-1 cursor-pointer">
            <span className="text-gray-600 dark:text-gray-400 text-xs">?</span>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        {/* Collaborators */}
        <div className="flex items-center">
          <div className="flex -space-x-2">
            {[1, 2, 3].map((i) => (
              <img
                key={i}
                src={`/api/placeholder/32/32`}
                alt={`User ${i}`}
                className="w-8 h-8 rounded-full border-2 border-white dark:border-gray-900"
              />
            ))}
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="ml-2 flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 px-3 py-1.5 rounded-lg text-sm"
          >
            <Users size={16} />
            <span>Invite</span>
          </motion.button>
        </div>

        {/* Preview & Publish Buttons */}
        <div className="flex items-center gap-2">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 px-4 py-2 rounded-lg text-gray-700 dark:text-gray-300"
          >
            <Eye size={16} />
            <span>Preview</span>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-[#4263EB] hover:bg-[#3451C7] text-white px-4 py-2 rounded-lg"
          >
            Publish
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default WorkspaceHeader;
