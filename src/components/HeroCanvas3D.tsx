import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface HeroCanvas3DProps {
  isDark?: boolean;
}

export const HeroCanvas3D: React.FC<HeroCanvas3DProps> = ({ isDark = false }) => {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || 320;
    const height = container.clientHeight || 320;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Group for objects
    const group = new THREE.Group();
    scene.add(group);

    // Core Geometry: Icosahedron with Wireframe & Core
    const geometry = new THREE.IcosahedronGeometry(1.6, 1);
    
    // Wireframe material
    const wireframeMaterial = new THREE.MeshBasicMaterial({
      color: isDark ? 0x38bdf8 : 0x2563eb,
      wireframe: true,
      transparent: true,
      opacity: isDark ? 0.45 : 0.35,
    });
    const wireframeMesh = new THREE.Mesh(geometry, wireframeMaterial);
    group.add(wireframeMesh);

    // Inner glowing crystal
    const innerGeometry = new THREE.IcosahedronGeometry(0.9, 0);
    const innerMaterial = new THREE.MeshStandardMaterial({
      color: isDark ? 0x0ea5e9 : 0x1d4ed8,
      roughness: 0.2,
      metalness: 0.8,
      transparent: true,
      opacity: 0.7,
    });
    const innerMesh = new THREE.Mesh(innerGeometry, innerMaterial);
    group.add(innerMesh);

    // Surrounding data particle nodes
    const particleCount = 28;
    const particleGeo = new THREE.SphereGeometry(0.04, 8, 8);
    const particleMat = new THREE.MeshBasicMaterial({
      color: isDark ? 0x2dd4bf : 0x0d9488,
    });

    const particles: THREE.Mesh[] = [];
    for (let i = 0; i < particleCount; i++) {
      const mesh = new THREE.Mesh(particleGeo, particleMat);
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      const radius = 2.0 + Math.random() * 0.4;

      mesh.position.set(
        radius * Math.sin(phi) * Math.cos(theta),
        radius * Math.sin(phi) * Math.sin(theta),
        radius * Math.cos(phi)
      );
      group.add(mesh);
      particles.push(mesh);
    }

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(isDark ? 0x38bdf8 : 0x2563eb, 2, 50);
    pointLight.position.set(3, 3, 3);
    scene.add(pointLight);

    // Mouse movement interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const onMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouseX = ((e.clientX - rect.left) / width) * 2 - 1;
      mouseY = -(((e.clientY - rect.top) / height) * 2 - 1);
    };

    window.addEventListener('mousemove', onMouseMove);

    // Resize handler
    const onResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', onResize);

    // Animation Loop
    let animId: number;
    const animate = () => {
      animId = requestAnimationFrame(animate);

      // Smooth mouse follow
      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      group.rotation.y += 0.005;
      group.rotation.x += 0.003;

      group.rotation.y += targetX * 0.02;
      group.rotation.x += -targetY * 0.02;

      // Pulse inner mesh
      const time = Date.now() * 0.002;
      const scale = 0.9 + Math.sin(time) * 0.05;
      innerMesh.scale.set(scale, scale, scale);

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose();
      wireframeMaterial.dispose();
      innerGeometry.dispose();
      innerMaterial.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      renderer.dispose();
    };
  }, [isDark]);

  return (
    <div
      ref={mountRef}
      className="w-full h-full min-h-[300px] sm:min-h-[360px] flex items-center justify-center pointer-events-none"
    />
  );
};
