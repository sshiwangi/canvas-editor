import React, { useState, useRef } from "react";
import {
  Search,
  Layout,
  Image as ImageIcon,
  Type,
  Palette,
} from "lucide-react";

// ColorPicker Component
const ColorPicker = ({ color, onChange }) => {
  const colors = [
    "#0369A1",
    "#DC2626",
    "#16A34A",
    "#EAB308",
    "#7C3AED",
    "#000000",
  ];

  return (
    <div className="flex flex-wrap gap-2 p-2">
      {colors.map((c) => (
        <button
          key={c}
          className={`w-8 h-8 rounded-full border-2 ${
            color === c ? "border-gray-600" : "border-transparent"
          }`}
          style={{ backgroundColor: c }}
          onClick={() => onChange(c)}
        />
      ))}
      <input
        type="color"
        value={color}
        onChange={(e) => onChange(e.target.value)}
        className="w-8 h-8 p-1 rounded-full cursor-pointer"
      />
    </div>
  );
};

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
          className="w-full h-full p-1 resize-none border-none outline-none bg-transparent"
          style={{ color }}
        />
      ) : (
        <div style={{ color }}>{localContent}</div>
      )}
      {isSelected && (
        <div
          className="absolute bottom-0 right-0 w-4 h-4 bg-white border border-gray-400 cursor-se-resize"
          onMouseDown={handleResize}
        />
      )}
    </div>
  );
};

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
          className="absolute bottom-0 right-0 w-4 h-4 bg-white border border-gray-400 cursor-se-resize"
          onMouseDown={handleResize}
        />
      )}
    </div>
  );
};
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
              className="absolute bottom-0 right-0 w-4 h-4 bg-white border border-gray-400 cursor-se-resize"
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

const CanvasEditor = () => {
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [elements, setElements] = useState([]);
  const [selectedElement, setSelectedElement] = useState(null);
  const [color, setColor] = useState("#0369A1");
  const [isResizing, setIsResizing] = useState(false);
  const canvasRef = useRef(null);
  const fileInputRef = useRef(null);

  const templates = [
    {
      id: 1,
      name: "Instagram Post",
      dimensions: { width: 600, height: 600 },
      thumbnail: "/api/placeholder/200/200",
    },
    {
      id: 2,
      name: "Story",
      dimensions: { width: 600, height: 800 },
      thumbnail: "/api/placeholder/200/350",
    },
  ];

  const handleAddText = () => {
    const newElement = {
      id: Date.now(),
      type: "text",
      content: "Double click to edit",
      position: { x: 50, y: 50 },
      color: color,
    };
    setElements([...elements, newElement]);
    setSelectedElement(newElement);
  };

  const handleAddImage = () => {
    fileInputRef.current?.click();
  };

  const handleImageUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const newElement = {
          id: Date.now(),
          type: "image",
          content: event.target.result,
          position: { x: 50, y: 50 },
          size: { width: 200, height: 200 },
        };
        setElements([...elements, newElement]);
        setSelectedElement(newElement);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleElementUpdate = (elementId, updates) => {
    setElements(
      elements.map((el) => (el.id === elementId ? { ...el, ...updates } : el))
    );
  };

  const handleColorChange = (newColor) => {
    setColor(newColor);
    if (selectedElement) {
      const updatedElements = elements.map((el) =>
        el.id === selectedElement.id ? { ...el, color: newColor } : el
      );
      setElements(updatedElements);
    } else {
      // Change background color if no element is selected
      const bgElement = elements.find((el) => el.type === "background");
      if (bgElement) {
        const updatedElements = elements.map((el) =>
          el.type === "background" ? { ...el, color: newColor } : el
        );
        setElements(updatedElements);
      } else {
        setElements([
          ...elements,
          {
            id: Date.now(),
            type: "background",
            color: newColor,
            position: { x: 0, y: 0 },
            size: selectedTemplate?.dimensions,
          },
        ]);
      }
    }
  };

  const handleTemplateSelect = (template) => {
    setSelectedTemplate(template);
    // Add background element
    setElements([
      {
        id: Date.now(),
        type: "background",
        color: "#FFFFFF",
        position: { x: 0, y: 0 },
        size: template.dimensions,
      },
    ]);
  };

  const handleDownload = () => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    if (selectedTemplate && ctx) {
      canvas.width = selectedTemplate.dimensions.width;
      canvas.height = selectedTemplate.dimensions.height;

      // Draw background
      const bgElement = elements.find((el) => el.type === "background");
      if (bgElement) {
        ctx.fillStyle = bgElement.color;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }

      // Draw other elements
      elements
        .filter((el) => el.type !== "background")
        .forEach((element) => {
          if (element.type === "text") {
            ctx.font = "24px Arial";
            ctx.fillStyle = element.color;
            ctx.fillText(
              element.content,
              element.position.x,
              element.position.y
            );
          } else if (element.type === "image") {
            const img = new Image();
            img.src = element.content;
            ctx.drawImage(
              img,
              element.position.x,
              element.position.y,
              element.size.width,
              element.size.height
            );
          }
        });

      // Download
      const link = document.createElement("a");
      link.download = "canvas-design.png";
      link.href = canvas.toDataURL("image/png");
      link.click();
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-80 bg-white border-r border-gray-200 flex flex-col">
        <a href="/" className="p-4 border-b border-gray-200 cursor-pointer">
          <h2 className="text-2xl font-bold text-primary-600">CanvasEdge</h2>
        </a>

        <div className="p-4">
          <div className="relative">
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search templates..."
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600"
            />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-4">
          <h3 className="text-sm font-semibold text-gray-500 mb-4">
            TEMPLATES
          </h3>
          <div className="grid gap-4">
            {templates.map((template) => (
              <button
                key={template.id}
                onClick={() => handleTemplateSelect(template)}
                className={`p-4 rounded-lg border ${
                  selectedTemplate?.id === template.id
                    ? "border-primary-600 bg-primary-50"
                    : "border-gray-200 hover:border-primary-600"
                } transition-colors`}
              >
                <img
                  src={template.thumbnail}
                  alt={template.name}
                  className="w-full rounded-md mb-2"
                />
                <div className="text-left">
                  <h4 className="font-semibold text-gray-900">
                    {template.name}
                  </h4>
                  <p className="text-sm text-gray-500">
                    {template.dimensions.width} x {template.dimensions.height}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Toolbar */}
        <div className="h-16 border-b border-gray-200 flex items-center justify-between px-6 bg-white">
          <div className="flex space-x-4">
            <button
              onClick={handleAddText}
              className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg"
            >
              <Type className="h-5 w-5" />
            </button>
            <button
              onClick={handleAddImage}
              className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg"
            >
              <ImageIcon className="h-5 w-5" />
            </button>
          </div>
          <ColorPicker color={color} onChange={handleColorChange} />
          <button
            onClick={handleDownload}
            className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition"
          >
            Download
          </button>
        </div>

        {/* Canvas Area */}
        {/* Canvas Area */}
        <div className="flex-1 p-8 flex">
          {selectedTemplate ? (
            <div className="flex-1 flex justify-center items-center">
              <div
                ref={canvasRef}
                className="relative bg-white shadow-lg"
                style={{
                  width: selectedTemplate.dimensions.width,
                  height: selectedTemplate.dimensions.height,
                }}
                onClick={() => setSelectedElement(null)}
              >
                {elements.map((element) =>
                  element.type === "text" ? (
                    <EditableText
                      key={element.id}
                      {...element}
                      isSelected={selectedElement?.id === element.id}
                      onSelect={() => setSelectedElement(element)}
                      onUpdate={(updates) =>
                        handleElementUpdate(element.id, updates)
                      }
                    />
                  ) : element.type === "image" ? (
                    <ResizableImage
                      key={element.id}
                      {...element}
                      isSelected={selectedElement?.id === element.id}
                      onSelect={() => setSelectedElement(element)}
                      onUpdate={(updates) =>
                        handleElementUpdate(element.id, updates)
                      }
                    />
                  ) : (
                    <div
                      key={element.id}
                      style={{
                        position: "absolute",
                        left: element.position.x,
                        top: element.position.y,
                        width: "100%",
                        height: "100%",
                        backgroundColor: element.color,
                      }}
                    />
                  )
                )}
              </div>
            </div>
          ) : (
            <div className="flex-1 flex items-center justify-center text-gray-500">
              Select a template to get started
            </div>
          )}
        </div>
      </div>

      <input
        type="file"
        ref={fileInputRef}
        className="hidden"
        accept="image/*"
        onChange={handleImageUpload}
      />
    </div>
  );
};

export default CanvasEditor;
