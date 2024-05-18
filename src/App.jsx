import "./App.css";
import CanvasComponent from "./components/custom/CanvasComponent";
import ColorPicker from "./components/ui/ColorPicker";
import Input from "./components/ui/Input";
import mask from "./assets/global_temp_landscape_temp_10_mask.png";
import maskstroke from "./assets/global_temp_landscape_temp_10_Mask_stroke.png";
import designpattern from "./assets/global_temp_landscape_temp_10_Design_Pattern.png";
import { useState } from "react";

const initialData = {
  caption: {
    text: "1 & 2 BHK Luxury Apartments at just Rs.34.97 Lakhs",
    position: {
      x: 50,
      y: 50,
    },
    max_characters_per_line: 31,
    font_size: 44,
    alignment: "left",
    text_color: "#FFFFFF",
  },
  cta: {
    text: "Shop Now",
    position: {
      x: 190,
      y: 320,
    },
    text_color: "#FFFFFF",
    background_color: "#000000",
  },
  image_mask: {
    x: 56,
    y: 442,
    width: 970,
    height: 600,
  },
  urls: {
    mask: mask,
    stroke: maskstroke,
    design_pattern: designpattern,
  },
};
function App() {
  const [data, setData] = useState(initialData);
  const handleCaptionChange = (e) => {
    setData((prevData) => ({
      ...prevData,
      caption: {
        ...prevData.caption,
        text: e.target.value,
      },
    }));
  };

  const handleCtaChange = (e) => {
    setData((prevData) => ({
      ...prevData,
      cta: {
        ...prevData.cta,
        text: e.target.value,
      },
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setData((prevData) => ({
        ...prevData,
        urls: {
          ...prevData.urls,
          design_pattern: reader.result,
        },
      }));
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };
  return (
    <div className="flex justify-center py-20 px-20">
      <div>
        <CanvasComponent data={data} />
      </div>
      <div className="flex flex-col items-center gap-8">
        <div className="flex flex-col items-center">
          <h1 className="text-blue font-bold text-xl">Ad Customization</h1>
          <p className="text-lightgray">
            Customize your ad and get your template accordingly
          </p>
        </div>
        <div className="flex flex-col items-center">
          <Input
            type="file"
            placeholder="change the add creative image"
            onChange={handleFileChange}
          />
          <p className="text-lightgray">Edit Contents</p>
          <Input
            type="text"
            label="Ad Content"
            placeholder="Add your content here"
            value={data.caption.text}
            onChange={handleCaptionChange}
          />
          <Input
            type="text"
            label="CTA"
            placeholder="Add CTA here"
            value={data.cta.text}
            onChange={handleCtaChange}
          />
          <div>
            <h1
              className="text-lightgray"
              style={{ textAlign: "center", marginTop: "20px" }}
            >
              Choose your color
            </h1>
            <ColorPicker />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
