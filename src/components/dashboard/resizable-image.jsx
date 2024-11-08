import React, { useState, useRef } from "react";
import {
  Search,
  Layout,
  Image as ImageIcon,
  Type,
  Palette,
} from "lucide-react";

// ResizableImage Component
const ResizableImage = ({
  content,
  position,
  size,
  isSelected,
  onUpdate,
  onSelect,
}) => {
  const [isResizing, setIsResizing] = useState(false);
  const [currentSize, setCurrentSize] = useState(
    size || { width: 200, height: 200 }
  );

  const handleResize = (e) => {
    e.stopPropagation();
    setIsResizing(true);
    const startX = e.clientX;
    const startY = e.clientY;
    const startWidth = currentSize.width;
    const startHeight = currentSize.height;
    const aspectRatio = startWidth / startHeight;

    const handleMouseMove = (moveEvent) => {
      const deltaX = moveEvent.clientX - startX;
      const newWidth = Math.max(50, startWidth + deltaX);
      const newHeight = newWidth / aspectRatio;

      setCurrentSize({ width: newWidth, height: newHeight });
      onUpdate({ size: { width: newWidth, height: newHeight } });
    };

    const handleMouseUp = () => {
      setIsResizing(false);
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  return (
    <div
      style={{
        position: "absolute",
        left: position.x,
        top: position.y,
        width: currentSize.width,
        height: currentSize.height,
        border: isSelected ? "2px solid #0369A1" : "none",
        cursor: "move",
      }}
      onClick={(e) => {
        e.stopPropagation();
        onSelect();
      }}
    >
      <img
        src={content}
        alt=""
        style={{ width: "100%", height: "100%", objectFit: "contain" }}
      />
      {isSelected && (
        <div
          className="absolute bottom-0 right-0 w-4 h-4 bg-white dark:bg-gray-700 border border-gray-400 dark:border-gray-600 cursor-se-resize"
          onMouseDown={handleResize}
        />
      )}
    </div>
  );
};

export default ResizableImage;
