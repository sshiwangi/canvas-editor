import { useEffect, useRef } from "react";

const CanvasComponent = (data) => {
  console.log(data);
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = 1080;
    canvas.height = 1080;
    if (window.Worker) {
      const worker = new Worker("../../../workers/canvasWorker.js");
      console.log(worker);
      worker.Prototype.postMessage({ data });

      worker.onmessage = (e) => {
        console.log(e);
        const imageData = e.data.imageData;
        ctx.putImageData(imageData, 0, 0);
      };
    } else {
      console.log("your browser doesnt support web workers");
    }
  }, [data]);

  return (
    <canvas
      style={{ backgroundColor: "blue" }}
      width="1080"
      height="1080"
      ref={canvasRef}
    ></canvas>
  );
};

export default CanvasComponent;
