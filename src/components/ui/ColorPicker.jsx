import { useCallback, useRef, useState } from "react";
import { SketchPicker } from "react-color";
import { FaPlus, FaTimes } from "react-icons/fa";
import debounce from "../../utils/debounce";
import PropTypes from "prop-types";
import { CgColorPicker } from "react-icons/cg";

const ColorPicker = ({ onChangeComplete }) => {
  const [color, setColor] = useState(null);
  const [colors, setColors] = useState([]);
  const [showPicker, setShowPicker] = useState(false);
  const colorsRef = useRef(colors);

  colorsRef.current = colors;

  const handleChangeComplete = useCallback(
    debounce((color) => {
      setColor(color.hex);
      setColors((prevColors) => {
        const newColors = [color.hex, ...prevColors.slice(0, 4)];
        return newColors;
      });
      onChangeComplete(color.hex);
    }, 300),
    [onChangeComplete]
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
            return newColors;
          });
          onChangeComplete(result.sRGBHex);
        }
      } catch (error) {
        console.error("Error using Eyedropper API:", error);
      }
    } else {
      alert("Your browser does not support the Eyedropper API");
    }
  };

  return (
    <div className="text-start mt-4">
      <div className="flex gap-2">
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
        <div className="mt-[20px] relative bg-white">
          <div
            style={{
              background: "rgb(255, 255, 255)",
              borderTopLeftRadius: "4px",
              borderTopRightRadius: "4px",
              boxShadow:
                "rgba(0, 0, 0, 0.15) 0px 0px 0px 1px, rgba(0, 0, 0, 0.15) 0px 8px 16px",
            }}
            className="flex justify-end p-2 pt-2 w-full"
          >
            <button
              onClick={() => setShowPicker(false)}
              style={{
                cursor: "pointer",
                fontSize: "20px",
              }}
            >
              <FaTimes size={18} />
            </button>
          </div>
          <SketchPicker
            color={color || "#fff"}
            onChangeComplete={handleChangeComplete}
          />
          <button
            className="w-full p-2 flex justify-between items-center"
            onClick={handleEyedropper}
            style={{
              background: "rgb(255, 255, 255)",
              borderBottomLeftRadius: "4px",
              borderBottomRightRadius: "4px",
              boxShadow:
                "rgba(0, 0, 0, 0.15) 0px 0px 0px 1px, rgba(0, 0, 0, 0.15) 0px 8px 16px",
            }}
          >
            <p className="text-sm text-gray-600">pick a color from this page</p>
            <CgColorPicker />
          </button>
        </div>
      )}
    </div>
  );
};

ColorPicker.propTypes = {
  onChangeComplete: PropTypes.func.isRequired,
};
export default ColorPicker;
