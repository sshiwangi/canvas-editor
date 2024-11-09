import React from "react";
import { motion } from "framer-motion";
import {
  Grid,
  FileText,
  Copy,
  Pencil,
  Plus,
  MessageCircle,
  Settings,
  HelpCircle,
} from "lucide-react";

const Sidebar = ({ activePanel, onIconClick }) => {
  return (
    <div className="w-[72px] h-screen bg-white dark:bg-gray-900 border-r border-gray-100 dark:border-gray-800 flex flex-col items-center py-4">
      {/* Logo */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="w-10 h-10 mb-8 cursor-pointer"
      >
        <div className="grid grid-cols-2 gap-1">
          <div className="w-4 h-4 rounded-full bg-[#4263EB]" />
          <div className="w-4 h-4 rounded-full bg-[#4263EB] opacity-60" />
          <div className="w-4 h-4 rounded-full bg-[#4263EB] opacity-60" />
          <div className="w-4 h-4 rounded-full bg-[#4263EB]" />
        </div>
      </motion.div>

      <div className="flex flex-col h-full justify-between">
        {/* Main Navigation */}
        <div className="flex flex-col items-center gap-1">
          <IconButton
            icon={Grid}
            isActive={activePanel === "grid"}
            onClick={() => onIconClick("grid")}
          />
          <IconButton
            icon={FileText}
            isActive={activePanel === "files"}
            onClick={() => onIconClick("files")}
          />
          <IconButton
            icon={Copy}
            isActive={activePanel === "templates"}
            onClick={() => onIconClick("templates")}
            className={`relative ${
              activePanel === "templates"
                ? "after:content-[''] after:absolute after:left-0 after:w-0.5 after:h-full after:bg-[#4263EB] after:-ml-4"
                : ""
            }`}
          />
          <IconButton
            icon={Pencil}
            isActive={activePanel === "edit"}
            onClick={() => onIconClick("edit")}
          />
          <IconButton
            icon={Plus}
            isActive={activePanel === "add"}
            onClick={() => onIconClick("add")}
          />
          <IconButton
            icon={MessageCircle}
            isActive={activePanel === "messages"}
            onClick={() => onIconClick("messages")}
          />
        </div>

        {/* Bottom Navigation */}
        <div className="flex flex-col items-center gap-1">
          <IconButton
            icon={Settings}
            isActive={activePanel === "edit"}
            onClick={() => onIconClick("edit")}
          />
          <IconButton
            icon={HelpCircle}
            isActive={activePanel === "add"}
            onClick={() => onIconClick("add")}
          />

          {/* User Avatar */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="w-8 h-8 rounded-full overflow-hidden mt-4 cursor-pointer"
          >
            <img
              src="/api/placeholder/32/32"
              alt="User"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

// Icon Button Component
const IconButton = ({
  icon: Icon,
  isActive = false,
  className = "",
  onClick,
}) => {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`w-10 h-10 rounded-xl flex items-center justify-center text-gray-600 dark:text-gray-400 
        ${
          isActive
            ? "bg-[#4263EB] text-white"
            : "hover:bg-gray-100 dark:hover:bg-gray-800"
        } 
        transition-colors ${className}`}
    >
      <Icon size={20} strokeWidth={1.5} />
    </motion.button>
  );
};

export default Sidebar;
