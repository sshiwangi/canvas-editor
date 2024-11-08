import React, { useState, useRef } from "react";

// Canvas Element Component
const CanvasElement = ({
  type,
  content,
  position,
  size,
  color,
  isSelected,
  onSelect,
  onResize,
}) => {
  const elementRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  const handleMouseDown = (e) => {
    if (!isSelected) {
      onSelect();
      return;
    }
    setIsDragging(true);
    setDragStart({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });
  };

  const handleMouseMove = (e) => {
    if (isDragging && elementRef.current) {
      const newX = e.clientX - dragStart.x;
      const newY = e.clientY - dragStart.y;
      elementRef.current.style.transform = `translate(${newX}px, ${newY}px)`;
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  React.useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("mouseup", handleMouseUp);
      };
    }
  }, [isDragging]);

  return (
    <div
      ref={elementRef}
      style={{
        position: "absolute",
        left: position.x,
        top: position.y,
        width: size?.width || "auto",
        height: size?.height || "auto",
        cursor: isDragging ? "grabbing" : "grab",
        border: isSelected ? "2px solid #0369A1" : "none",
        padding: "4px",
        color: color,
        backgroundColor: type === "background" ? color : "transparent",
      }}
      onMouseDown={handleMouseDown}
    >
      {type === "text" && content}
      {type === "image" && (
        <div className="relative">
          <img
            src={content || "/api/placeholder/200/200"}
            alt=""
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
          {isSelected && (
            <div
              className="absolute bottom-0 right-0 w-4 h-4 bg-white dark:bg-gray-700 border border-gray-400 dark:border-gray-600 cursor-se-resize"
              onMouseDown={(e) => {
                e.stopPropagation();
                onResize(true);
              }}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default CanvasElement;
