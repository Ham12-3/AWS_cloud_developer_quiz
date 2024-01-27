import React, { useEffect, useRef, useState } from 'react';

const MeterAnimation = ({ value, maxValue }) => {
  const canvasRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [animationColor, setAnimationColor] = useState('green');

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationId;

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

      // Draw progress arc
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, Math.PI * 0.75, Math.PI * (0.75 + progress * 1.5), false);
      ctx.strokeStyle = animationColor;
      ctx.lineWidth = 20;
      ctx.stroke();
    };

    const updateAnimation = () => {
      if (progress < value / maxValue) {
        setProgress((prevProgress) => Math.min(prevProgress + 0.02, value / maxValue));
      }

      // Set animation color based on value / maxValue
      if (value / maxValue === 0.5) {
        setAnimationColor('yellow');
      } else if (value / maxValue < 0.5) {
        setAnimationColor('red');
      } else {
        setAnimationColor('green');
      }

      drawMeter();

      animationId = requestAnimationFrame(updateAnimation);
    };

    updateAnimation();

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [value, maxValue, progress, animationColor]);

  return <canvas ref={canvasRef} width={200} height={200} />;
};

export default MeterAnimation;
