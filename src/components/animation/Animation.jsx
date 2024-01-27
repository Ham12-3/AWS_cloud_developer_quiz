import React, { useEffect, useRef, useState } from 'react';

const MeterAnimation = ({ value, maxValue }) => {
  const canvasRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const updateCanvasSize = () => {
      const dpi = window.devicePixelRatio || 1;
      const canvasWidth = canvas.clientWidth * dpi;
      const canvasHeight = canvas.clientHeight * dpi;
      canvas.width = canvasWidth;
      canvas.height = canvasHeight;
    };

    const drawMeter = () => {
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const radius = Math.min(centerX, centerY) - 20;

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw meter scale
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, Math.PI * 0.75, Math.PI * 2.25, false);
      ctx.strokeStyle = '#ddd';
      ctx.lineWidth = 20;
      ctx.stroke();

      // Determine animation color based on value / maxValue
      let animationColor;
      if (value / maxValue < 0.5) {
        animationColor = 'darkred';
      } else if (value / maxValue === 0.5) {
        animationColor = '#8B8000';
      } else {
        animationColor = 'darkgreen';
      }

      // Draw progress arc
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, Math.PI * 0.75, Math.PI * (0.75 + progress * 1.5), false);
      ctx.strokeStyle = animationColor;
      ctx.lineWidth = 20;
      ctx.stroke();

      // Draw text
      const displayText = value / maxValue < 0.5 ? 'Pass' : value / maxValue === 0.5 ? 'Merit' : 'Distinction';
      ctx.font = 'bold 40px Poppins';
      ctx.fillStyle = animationColor; // Use the same color for text
      ctx.textAlign = 'center';
      ctx.fillText(displayText, centerX, centerY + 40);
    };

    updateCanvasSize();
    drawMeter();

  }, [value, maxValue, progress]);

  // Update progress on value or maxValue change
  useEffect(() => {
    const animationDuration = 1000; // Animation duration in milliseconds

    let startTimestamp;
    let animationFrameId;

    const animateProgress = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const elapsed = timestamp - startTimestamp;
      const progress = Math.min(elapsed / animationDuration, 1);
      setProgress(progress);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animateProgress);
      }
    };

    animationFrameId = requestAnimationFrame(animateProgress);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [value, maxValue]);

  return <canvas ref={canvasRef} style={{ margin: 'auto', display: 'block', width: '100%', height: '300px' }} />;
};

export default MeterAnimation;
