import React, { useState, useRef, useEffect } from "react";

const CanvasComponent = () => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [aspectRatio, setAspectRatio] = useState("1:1");
  const [dimensions, setDimensions] = useState({ width: 500, height: 500 });

  const aspectRatioOptions = [
    { ratio: "1:1", label: "1:1 (Square)" },
    { ratio: "4:5", label: "4:5 (Portrait)" },
    { ratio: "16:9", label: "16:9 (Landscape)" },
    { ratio: "9:16", label: "9:16 (Story/Reel)" },
    { ratio: "3:4", label: "3:4 (Portrait)" },
  ];

  const handleAspectRatioChange = (e) => {
    const selectedRatio = e.target.value;
    setAspectRatio(selectedRatio);
  };

  const updateDimensions = () => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth;
      const [widthRatio, heightRatio] = aspectRatio
        .split(":")
        .map((num) => parseInt(num));
      const calculatedHeight = (containerWidth * heightRatio) / widthRatio;
      setDimensions({ width: containerWidth, height: calculatedHeight });
    }
  };

  useEffect(() => {
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, [aspectRatio]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      canvas.width = dimensions.width;
      canvas.height = dimensions.height;
      const ctx = canvas.getContext("2d");
      // Clear and draw placeholder content
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#f3f4f6";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#000";
      ctx.font = "20px Arial";
      ctx.fillText("Canvas Content Here", 50, 50);
    }
  }, [dimensions]);

  return (
    <div className="flex flex-col items-center p-4">
      <label htmlFor="aspectRatioSelect" className="mb-2 text-gray-700">
        Select Canvas Aspect Ratio
      </label>
      <select
        id="aspectRatioSelect"
        onChange={handleAspectRatioChange}
        className="mb-4 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {aspectRatioOptions.map((option) => (
          <option key={option.ratio} value={option.ratio}>
            {option.label}
          </option>
        ))}
      </select>

      <div
        ref={containerRef}
        className="relative border border-gray-300 rounded-md shadow-lg w-full max-w-md"
        style={{ height: dimensions.height }}
      >
        <canvas
          ref={canvasRef}
          className="rounded-md"
          style={{ width: "100%", height: "100%" }}
        ></canvas>
        {/* <button
          className="absolute bottom-2 right-2 bg-blue-500 hover:bg-blue-700 text-white p-2 rounded-full"
          onClick={() =>
            setAspectRatio((prev) => (prev === "1:1" ? "16:9" : "1:1"))
          }
        >
          
        </button> */}
      </div>
    </div>
  );
};

export default CanvasComponent;
