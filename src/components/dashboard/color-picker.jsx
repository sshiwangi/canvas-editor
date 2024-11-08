import React from "react";


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
            color === c
              ? "border-gray-600 dark:border-gray-300"
              : "border-transparent"
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

export default ColorPicker