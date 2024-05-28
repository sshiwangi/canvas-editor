import { useEffect } from "react";
import Worker from "../../workers/canvasWorker.js?worker";
import PropTypes from "prop-types";

const CanvasComponent = ({ data, uploadedImage, templateColor, canvasRef }) => {
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    if (window.Worker) {
      const worker = new Worker();

      const { caption, cta, image_mask, urls } = data;

      if (
        caption &&
        cta &&
        image_mask &&
        urls &&
        urls.design_pattern &&
        urls.mask &&
        urls.stroke
      ) {
        worker.postMessage({ data, uploadedImage, templateColor });
      } else {
        console.error("Data is missing required properties:", {
          caption,
          cta,
          image_mask,
          urls,
        });
      }

      worker.onmessage = (e) => {
        const imageData = e.data.imageData;
        ctx.putImageData(imageData, 0, 0);
      };

      return () => {
        worker.terminate();
      };
    } else {
      console.log("your browser doesnt support web workers");
    }
  }, [data, uploadedImage, templateColor]);

  return <canvas width="1080" height="1080" ref={canvasRef}></canvas>;
};

// prop types
CanvasComponent.propTypes = {
  data: PropTypes.shape({
    caption: PropTypes.shape({
      text: PropTypes.string.isRequired,
      position: PropTypes.shape({
        x: PropTypes.number.isRequired,
        y: PropTypes.number.isRequired,
      }).isRequired,
      max_characters_per_line: PropTypes.number.isRequired,
      font_size: PropTypes.number.isRequired,
      alignment: PropTypes.string.isRequired,
      text_color: PropTypes.string.isRequired,
    }).isRequired,
    cta: PropTypes.shape({
      text: PropTypes.string.isRequired,
      position: PropTypes.shape({
        x: PropTypes.number.isRequired,
        y: PropTypes.number.isRequired,
      }).isRequired,
      text_color: PropTypes.string.isRequired,
      background_color: PropTypes.string.isRequired,
    }).isRequired,
    image_mask: PropTypes.shape({
      x: PropTypes.number.isRequired,
      y: PropTypes.number.isRequired,
      width: PropTypes.number.isRequired,
      height: PropTypes.number.isRequired,
    }).isRequired,
    urls: PropTypes.shape({
      mask: PropTypes.string.isRequired,
      stroke: PropTypes.string.isRequired,
      design_pattern: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  uploadedImage: PropTypes.instanceOf(File),
  templateColor: PropTypes.string.isRequired,
  canvasRef: PropTypes.object.isRequired,
};
export default CanvasComponent;
