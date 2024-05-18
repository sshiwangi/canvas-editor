import { useCallback, useRef, useState } from "react";
import { SketchPicker } from "react-color";
import { FaPlus, FaTimes } from "react-icons/fa";
import debounce from "../../utils/debounce";

const ColorPicker = () => {
  const [color, setColor] = useState(null);
  const [colors, setColors] = useState([]);
  const [showPicker, setShowPicker] = useState(false);
  const colorsRef = useRef(colors);

  colorsRef.current = colors;

  const handleChangeComplete = useCallback(
    debounce((color) => {
      console.log("Debounced color change:", color.hex);
      setColor(color.hex);
      setColors((prevColors) => {
        const newColors = [color.hex, ...prevColors.slice(0, 4)];
        console.log("Updated colors array:", newColors);
        return newColors;
      });
    }, 300),
    []
  );

  const handleEyedropper = async () => {
    if ("EyeDropper" in window) {
      try {
        const eyeDropper = new window.EyeDropper();
        const result = await eyeDropper.open();
        if (result.sRGBHex) {
          setColor(result.sRGBHex);
          setColors((prevColors) => {
            const newColors = [result.sRGBHex, ...prevColors.slice(0, 4)];
            console.log("Updated colors array:", newColors);
            return newColors;
          });
        }
      } catch (error) {
        console.error("Error using Eyedropper API:", error);
      }
    } else {
      alert("Your browser does not support the Eyedropper API");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
        {colors.map((col, index) => (
          <div
            key={index}
            style={{
              width: "30px",
              height: "30px",
              backgroundColor: col,
              borderRadius: "50%",
              border: "1px solid #ccc",
            }}
          />
        ))}
        <div
          onClick={() => setShowPicker(true)}
          style={{
            width: "30px",
            height: "30px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#f0f0f0",
            borderRadius: "50%",
            cursor: "pointer",
            border: "1px solid #ccc",
          }}
        >
          <FaPlus />
        </div>
      </div>

      {showPicker && (
        <div style={{ marginTop: "20px", position: "relative" }}>
          <div style={{ position: "absolute", top: 0, right: 0 }}>
            <button
              onClick={() => setShowPicker(false)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                fontSize: "20px",
              }}
            >
              <FaTimes />
            </button>
          </div>
          <SketchPicker
            color={color || "#fff"}
            onChangeComplete={handleChangeComplete}
          />
          <button onClick={handleEyedropper} style={{ marginTop: "10px" }}>
            Use Eyedropper
          </button>
        </div>
      )}

      {/* <div style={{ marginTop: "20px", fontSize: "18px" }}>
        Selected Color:{" "}
        <span style={{ fontWeight: "bold" }}>{color || "None"}</span>
      </div>

      <div
        style={{
          marginTop: "20px",
          width: "100px",
          height: "100px",
          backgroundColor: color || "#fff",
          margin: "0 auto",
          border: "1px solid #ccc",
          borderRadius: "50%",
        }}
      /> */}
    </div>
  );
};

export default ColorPicker;
