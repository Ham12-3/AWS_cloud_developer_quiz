import React, { useEffect, useRef, useState } from 'react';

const MeterAnimation = ({ value, maxValue }) => {
  const canvasRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [textColor, setTextColor] = useState('');

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const dpi = window.devicePixelRatio || 1;
    const canvasWidth = 300 * dpi;
    const canvasHeight = 300 * dpi;
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;
    ctx.scale(dpi, dpi);

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

      // Set text content based on value / maxValue
      if (value / maxValue < 0.5) {
        setDisplayText('Pass');
        setTextColor('darkred');
      } else if (value / maxValue === 0.5) {
        setDisplayText('Merit');
        setTextColor('darkyellow');
      } else {
        setDisplayText('Distinction');
        setTextColor('darkgreen');
      }

      // Draw text
      ctx.font = 'bold 30px Poppins';
      ctx.fillStyle = textColor;
      ctx.textAlign = 'center';
      ctx.fillText(displayText, centerX, centerY + 40);
    };

    const animateProgress = () => {
      let start = null;
      let duration = 1000; // Default animation duration in milliseconds

      // Adjust animation duration based on device screen size
      if (window.innerWidth < 768) {
        duration = 2000; // For mobile devices
      } else if (window.innerWidth < 1024) {
        duration = 1500; // For tablet devices
      }

      const step = (timestamp) => {
        if (!start) start = timestamp;
        const progress = Math.min((timestamp - start) / duration, 1); // Ensure progress is capped at 1
        setProgress(progress * (value / maxValue)); // Update progress based on value
        if (progress < 1) requestAnimationFrame(step);
      };

      requestAnimationFrame(step);
    };

    animateProgress();

  }, [value, maxValue]); // Removed progress, displayText, and textColor from dependency array

  return <canvas ref={canvasRef} style={{ margin:"auto",width: '300px', height: '300px' }} />;
};

export default MeterAnimation;
