import "./App.css";
import CanvasComponent from "./components/custom/CanvasComponent";
import ColorPicker from "./components/ui/ColorPicker";
import Input from "./components/ui/Input";
import { useRef, useState } from "react";
import templatedata from "./data/templatedata.json";

function App() {
  const [data, setData] = useState(templatedata);
  const [uploadedImage, setUploadedImage] = useState(null);
  const [templateColor, setTemplateColor] = useState("#0369A1");
  const [fileName, setFileName] = useState(
    "Change the creative ad image. Select File"
  );
  const canvasRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUploadedImage(file);
      setFileName(file.name);
    }
  };

  const handleInputChange = (key, value) => {
    setData((prevData) => ({
      ...prevData,
      [key]: { ...prevData[key], text: value },
    }));
  };

  const handleColorChange = (color) => {
    setTemplateColor(color);
  };

  const handleDownload = () => {
    const canvas = canvasRef.current;
    const dataURL = canvas.toDataURL("image/png");

    const link = document.createElement("a");
    link.href = dataURL;
    link.download = "canvas-image.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div className="flex flex-col-reverse items-center py-20 px-20 gap-20">
      <div className="w-1/2 flex justify-center">
        <CanvasComponent
          data={data}
          uploadedImage={uploadedImage}
          templateColor={templateColor}
          canvasRef={canvasRef}
        />
      </div>
      <div className="flex w-1/2 flex-col items-center gap-8 p-4">
        <div className="flex w-full flex-col items-center justify-center text-center">
          <h1 className="text-blue font-bold text-xl">Ad Customization</h1>
          <p className="text-lightgray">
            Customize your ad and get your template accordingly
          </p>
        </div>
        <div className="flex w-full flex-col items-center">
          <Input
            type="file"
            placeholder="change the add creative image"
            onChange={handleFileChange}
            fileName={fileName}
          />
          <div className="flex w-full items-center justify-between">
            <hr className="w-[38%]" />
            <p className="text-lightgray">Edit Contents</p>
            <hr className="w-[38%]" />
          </div>
          <Input
            type="text"
            label="Ad Content"
            placeholder="Add your content here"
            value={data.caption.text}
            onChange={(e) => handleInputChange("caption", e.target.value)}
          />
          <Input
            type="text"
            label="CTA"
            placeholder="Add CTA here"
            value={data.cta.text}
            onChange={(e) => handleInputChange("cta", e.target.value)}
          />

          <div className="w-full flex items-start flex-col">
            <h1
              className="text-lightgray"
              style={{ textAlign: "center", marginTop: "20px" }}
            >
              Choose your color
            </h1>
            <ColorPicker onChangeComplete={handleColorChange} />
          </div>
          <button
            onClick={handleDownload}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
          >
            Download Image
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
