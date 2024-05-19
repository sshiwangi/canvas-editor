self.onmessage = async (e) => {
  const { data, uploadedImage, templateColor } = e.data;

  const canvas = new OffscreenCanvas(1080, 1080);
  const ctx = canvas.getContext("2d");

  const loadImageBitmap = async (url) => {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch image at ${url}`);
    }
    const blob = await response.blob();
    return createImageBitmap(blob);
  };

  const loadImageBitmapFromFile = async (file) => {
    return createImageBitmap(file);
  };

  let designPatternImg;
  let maskImg;
  let maskStrokeImg;
  let uploadedImg;

  try {
    designPatternImg = await loadImageBitmap(data.urls.design_pattern);
    maskImg = await loadImageBitmap(data.urls.mask);
    maskStrokeImg = await loadImageBitmap(data.urls.stroke);

    if (uploadedImage) {
      uploadedImg = await loadImageBitmapFromFile(uploadedImage);
    }
  } catch (err) {
    console.log("error loading images", err);
  }

  const drawRoundedRect = (ctx, x, y, width, height, radius) => {
    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    ctx.lineTo(x + width - radius, y);
    ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
    ctx.lineTo(x + width, y + height - radius);
    ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
    ctx.lineTo(x + radius, y + height);
    ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
    ctx.lineTo(x, y + radius);
    ctx.quadraticCurveTo(x, y, x + radius, y);
    ctx.closePath();
    ctx.fill();
  };

  const drawLayers = () => {
    ctx.clearRect(0, 0, 1080, 1080);

    // Background color
    ctx.fillStyle = templateColor;
    ctx.fillRect(0, 0, 1080, 1080);

    // Design pattern
    ctx.globalCompositeOperation = "source-over";
    ctx.drawImage(designPatternImg, 0, 0, 1080, 1080);

    // Mask
    ctx.globalCompositeOperation = "source-over";
    ctx.drawImage(maskImg, 0, 0, 1080, 1080);

    // Mask stroke
    ctx.globalCompositeOperation = "source-over";
    ctx.drawImage(maskStrokeImg, 0, 0, 1080, 1080);

    // Uploaded Image at mask position
    if (uploadedImg) {
      ctx.globalCompositeOperation = "source-over";
      ctx.drawImage(
        uploadedImg,
        data.image_mask.x,
        data.image_mask.y,
        data.image_mask.width,
        data.image_mask.height
      );
    }

    // Caption
    ctx.fillStyle = data.caption.text_color;
    ctx.font = `${data.caption.font_size}px Arial`;
    ctx.textAlign = data.caption.alignment;
    const lines = wrapText(
      ctx,
      data.caption.text,
      data.caption.position.x,
      data.caption.position.y,
      canvas.width - data.caption.position.x,
      data.caption.font_size,
      data.caption.max_characters_per_line
    );
    lines.forEach((line, index) => {
      ctx.fillText(
        line,
        data.caption.position.x,
        data.caption.position.y + index * data.caption.font_size
      );
    });

    // CTA
    const ctaFontSize = data.cta.font_size || 30;
    const ctaWrapLength = data.cta.wrap_length || 20;
    const ctaPadding = 24;
    const ctaTextLines = wrapText(
      ctx,
      data.cta.text,
      data.cta.position.x,
      data.cta.position.y,
      ctaWrapLength * ctaFontSize,
      ctaFontSize,
      ctaWrapLength
    );

    const ctaTextWidth = Math.max(
      ...ctaTextLines.map((line) => ctx.measureText(line).width)
    );
    const ctaTextHeight = ctaTextLines.length * ctaFontSize;

    ctx.fillStyle = data.cta.background_color;
    drawRoundedRect(
      ctx,
      data.cta.position.x - ctaPadding / 2,
      data.cta.position.y - ctaTextHeight - ctaPadding / 2,
      ctaTextWidth + ctaPadding,
      ctaTextHeight + ctaPadding,
      10
    );

    ctx.fillStyle = data.cta.text_color;
    ctx.font = `${ctaFontSize}px Arial`;
    ctx.textAlign = "center";
    ctaTextLines.forEach((line, index) => {
      ctx.fillText(
        line,
        data.cta.position.x + ctaTextWidth / 2,
        data.cta.position.y -
          ctaTextHeight / 2 +
          index * ctaFontSize -
          ctaPadding / 4
      );
    });

    self.postMessage({
      imageData: ctx.getImageData(0, 0, 1080, 1080),
    });
  };

  drawLayers();
};

const wrapText = (
  ctx,
  text,
  x,
  y,
  maxWidth,
  lineHeight,
  maxCharactersPerLine
) => {
  const words = text.split(" ");
  let line = "";
  const lines = [];

  words.forEach((word) => {
    if ((line + word).length <= maxCharactersPerLine) {
      line += (line ? " " : "") + word;
    } else {
      lines.push(line);
      line = word;
    }
  });
  lines.push(line);

  return lines;
};

export {};
