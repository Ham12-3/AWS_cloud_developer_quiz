import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import { Canvas } from 'react-three-fiber';
import { useFrame } from 'react-three-fiber';

function ScoreAnimation({ totalScore, questionLength }) {
  const canvasRef = useRef();
  const [gaugeProgress, setGaugeProgress] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    const arcContainer = document.createElement('div');
    canvas.appendChild(arcContainer);

    const arc = d3
      .select(arcContainer)
      .append('svg')
      .append('path')
      .attr('d', `M 0,0 A 1,1 0 1 1 0,0`) // Initial empty arc
      .attr('stroke-width', 15)
      .attr('stroke', 'green') // Adjust color based on score
      .attr('fill', 'none');

    const percentageScore = (totalScore / questionLength) * 100;
    const gaugeAngle = (percentageScore / 100) * 360;

    // Animate gauge filling up gradually
    useFrame(() => {
      setGaugeProgress((prevProgress) => Math.min(prevProgress + 0.05, 1)); // Adjust animation speed
      const currentAngle = gaugeAngle * gaugeProgress;
      arc.attr('d', `M 0,0 A 1,1 0 1 1 ${currentAngle},0`);
    });

    // Create circular gauge geometry in Three.js
    const gaugeGeometry = new THREE.CircleGeometry(1, 32);
    const gaugeMaterial = new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load(arcContainer) });
    const gaugeMesh = new THREE.Mesh(gaugeGeometry, gaugeMaterial);
    scene.add(gaugeMesh);

    // Add to canvas
    canvas.appendChild(scene.getObject3D('canvas'));
  }, []);

  return <Canvas ref={canvasRef} />;
}
