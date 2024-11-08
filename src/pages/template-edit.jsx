import React, { useState, useRef } from "react";
import {
  Search,
  Layout,
  Image as ImageIcon,
  Type,
  Palette,
} from "lucide-react";
import ColorPicker from "../components/ui/ColorPicker";


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
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
      {/* Sidebar */}
      <div className="w-80 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 flex flex-col">
        <a href="/" className="p-4 border-b border-gray-200 dark:border-gray-700 cursor-pointer">
          <h2 className="text-2xl font-bold text-primary-600 dark:text-primary-400">CanvasEdge</h2>
        </a>

        <div className="p-4">
          <div className="relative">
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400 dark:text-gray-300" />
            <input
              type="text"
              placeholder="Search templates..."
              className="w-full pl-10 pr-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600 dark:focus:ring-primary-400"
            />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-4">
          <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-4">
            TEMPLATES
          </h3>
          <div className="grid gap-4">
            {templates.map((template) => (
              <button
                key={template.id}
                onClick={() => handleTemplateSelect(template)}
                className={`p-4 rounded-lg border ${
                  selectedTemplate?.id === template.id
                    ? "border-primary-600 bg-primary-50 dark:border-primary-400 dark:bg-primary-600"
                    : "border-gray-200 dark:border-gray-700 hover:border-primary-600"
                } transition-colors`}
              >
                <img
                  src={template.thumbnail}
                  alt={template.name}
                  className="w-full rounded-md mb-2"
                />
                <div className="text-left">
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100">
                    {template.name}
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
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
        <div className="h-16 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between px-6 bg-white dark:bg-gray-800">
          <div className="flex space-x-4">
            <button
              onClick={handleAddText}
              className="p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
            >
              <Type className="h-5 w-5" />
            </button>
            <button
              onClick={handleAddImage}
              className="p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
            >
              <ImageIcon className="h-5 w-5" />
            </button>
          </div>
          <ColorPicker color={color} onChange={handleColorChange} />
          <button
            onClick={handleDownload}
            className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition dark:bg-primary-500 dark:hover:bg-primary-600"
          >
            Download
          </button>
        </div>

        {/* Canvas Area */}
        <div className="flex-1 p-8 flex">
          {selectedTemplate ? (
            <div className="flex-1 flex justify-center items-center">
              <div
                ref={canvasRef}
                className="relative bg-white dark:bg-gray-800 shadow-lg"
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
            <div className="flex-1 flex items-center justify-center text-gray-500 dark:text-gray-400">
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
