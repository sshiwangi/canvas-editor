import React, { useState, useRef } from "react";

// EditableText Component
const EditableText = ({
  content,
  position,
  color,
  size,
  isSelected,
  onUpdate,
  onSelect,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [localContent, setLocalContent] = useState(content);
  const [isResizing, setIsResizing] = useState(false);
  const [initialSize, setInitialSize] = useState(
    size || { width: 200, height: 50 }
  );
  const textRef = useRef(null);

  const handleDoubleClick = (e) => {
    e.stopPropagation();
    setIsEditing(true);
  };

  const handleBlur = () => {
    setIsEditing(false);
    onUpdate({ content: localContent });
  };

  const handleResize = (e) => {
    e.stopPropagation();
    setIsResizing(true);
    const startX = e.clientX;
    const startY = e.clientY;
    const startWidth = initialSize.width;
    const startHeight = initialSize.height;

    const handleMouseMove = (moveEvent) => {
      const deltaX = moveEvent.clientX - startX;
      const deltaY = moveEvent.clientY - startY;
      const newWidth = Math.max(50, startWidth + deltaX);
      const newHeight = Math.max(20, startHeight + deltaY);

      setInitialSize({ width: newWidth, height: newHeight });
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
      ref={textRef}
      style={{
        position: "absolute",
        left: position.x,
        top: position.y,
        width: initialSize.width,
        minHeight: initialSize.height,
        border: isSelected ? "2px solid #0369A1" : "none",
        cursor: "move",
        padding: "4px",
      }}
      onClick={(e) => {
        e.stopPropagation();
        onSelect();
      }}
      onDoubleClick={handleDoubleClick}
    >
      {isEditing ? (
        <textarea
          value={localContent}
          onChange={(e) => setLocalContent(e.target.value)}
          onBlur={handleBlur}
          autoFocus
          className="w-full h-full p-1 resize-none border-none outline-none bg-transparent dark:bg-gray-800"
          style={{ color }}
        />
      ) : (
        <div style={{ color }}>{localContent}</div>
      )}
      {isSelected && (
        <div
          className="absolute bottom-0 right-0 w-4 h-4 bg-white dark:bg-gray-700 border border-gray-400 dark:border-gray-600 cursor-se-resize"
          onMouseDown={handleResize}
        />
      )}
    </div>
  );
};

export default EditableText;
