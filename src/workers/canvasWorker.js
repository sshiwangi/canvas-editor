self.onmessage = (e) => {
  console.log("hello");
  const { data } = e.data;
  const canvas = new OffscreenCanvas(data.canvasWidth, data.canvasHeight);
  const ctx = canvas.getContext("2d");

  const designPatternImg = new Image();
  const maskImg = new Image();
  const maskStrokeImg = new Image();

  const drawLayers = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#0369A1";
    // ctx.fillRect(0, 0, canvas.width, canvas.height);

    // ctx.drawImage(designPatternImg, 0, 0, canvas.width, canvas.height);

    // ctx.globalCompositeOperation = "destination-in";
    // ctx.drawImage(
    //   maskImg,
    //   data.image_mask.x,
    //   data.image_mask.y,
    //   data.image_mask.width,
    //   data.image_mask.height
    // );

    // ctx.globalCompositeOperation = "source-over";
    // ctx.drawImage(
    //   maskStrokeImg,
    //   data.image_mask.x,
    //   data.image_mask.y,
    //   data.image_mask.width,
    //   data.image_mask.height
    // );

    // ctx.fillStyle = data.caption.text_color;
    // ctx.font = `${data.caption.font_size}px Arial`;
    // ctx.textAlign = data.caption.alignment;
    // ctx.fillText(
    //   data.caption.text,
    //   data.caption.position.x,
    //   data.caption.position.y
    // );

    // ctx.fillStyle = data.cta.background_color;
    // ctx.fillRect(data.cta.position.x, data.cta.position.y - 30, 150, 50);
    // ctx.fillStyle = data.cta.text_color;
    // ctx.font = "20px Arial";
    // ctx.textAlign = "center";
    // ctx.fillText(data.cta.text, data.cta.position.x + 75, data.cta.position.y);

    self.postMessage({
      imageData: ctx.getImageData(0, 0, canvas.width, canvas.height),
    });
  };

  designPatternImg.onload = () => {
    console.log("design pattern loaded");
    maskImg.onload = () => {
      console.log("mask loaded");
      maskStrokeImg.onload = () => {
        console.log("mask stroke loaded");
        drawLayers();
      };
      maskStrokeImg.src = data.urls.stroke;
    };
    maskImg.src = data.urls.mask;
  };
  designPatternImg.src = data.urls.design_pattern;
};
