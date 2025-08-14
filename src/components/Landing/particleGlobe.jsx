import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import * as d3 from 'd3-geo';
import countries from '../../countries.json';

const ParticleGlobe = () => {
  const containerRef = useRef();

  useEffect(() => {
    const isMobile = window.innerWidth <= 768;
    const vertexShader = `
      uniform vec2 uResolution;
      uniform float uSize;
      uniform float uProgress;
      uniform vec3 uColorA;
      uniform vec3 uColorB;
      uniform vec3 uColorC;
      uniform vec3 uColorD;
      uniform vec3 uColorE;
      uniform vec2 uMouse;
      uniform vec2 uClick;
      uniform float uClickTime;
      uniform float uTime;
      uniform float uMouseInfluence;
      uniform float uMouseActive;

      attribute vec3 aPositionTarget;
      attribute vec3 aPositionPillar;
      attribute float aSize;
      attribute float aDelay;

      varying vec3 vColor;
      varying float vAlpha;

      float easeInOutCubic(float t) {
        return t < 0.5 ? 4.0 * t * t * t : 1.0 - pow(-2.0 * t + 2.0, 3.0) / 2.0;
      }

      float easeOutBounce(float t) {
        if (t < 1.0 / 2.75) {
          return 7.5625 * t * t;
        } else if (t < 2.0 / 2.75) {
          t -= 1.5 / 2.75;
          return 7.5625 * t * t + 0.75;
        } else if (t < 2.5 / 2.75) {
          t -= 2.25 / 2.75;
          return 7.5625 * t * t + 0.9375;
        } else {
          t -= 2.625 / 2.75;
          return 7.5625 * t * t + 0.984375;
        }
      }

      void main() {
        float delayedProgress = clamp((uProgress - aDelay) * 1.8, 0.0, 1.0);
        delayedProgress = easeInOutCubic(delayedProgress);

        vec3 randomPosition = position;
        vec3 pillarPosition = aPositionPillar;
        vec3 globePosition = aPositionTarget;
        vec3 mixedPosition;

        if (delayedProgress < 0.5) {
          float pillarProgress = delayedProgress * 2.0;
          // bounce easing 적용
          pillarProgress = easeOutBounce(pillarProgress);

          vec3 exaggeratedPillar = pillarPosition;
          exaggeratedPillar.y *= 1.4;
          exaggeratedPillar.xz *= 0.7;

          mixedPosition = mix(randomPosition, exaggeratedPillar, pillarProgress);
        } else {
          float globeProgress = (delayedProgress - 0.5) * 2.0;
          globeProgress = easeInOutCubic(globeProgress);

          float distanceFromOrigin = length(aPositionTarget);
          if (distanceFromOrigin > 2.5) {
            mixedPosition = mix(pillarPosition, position, globeProgress);
          } else {
            mixedPosition = mix(pillarPosition, globePosition, globeProgress);
          }
        }

        vec4 clipPos = projectionMatrix * viewMatrix * modelMatrix * vec4(mixedPosition, 1.0);
        vec2 ndcPos = clipPos.xy / clipPos.w;

        // 마우스 인터랙션 (움직임이 있고, 지구 완성 전일 때만)
        if (uMouseActive > 0.5) {
          float mouseDist = distance(ndcPos, uMouse);
          float mouseRange = 0.3;
          float mouseStrength = smoothstep(mouseRange, 0.0, mouseDist);

          float waveFreq = 8.0;
          float waveAmp = 0.15;
          float timeOffset = uTime * 2.0;

          float wave1 = sin(mouseDist * waveFreq - timeOffset) * waveAmp;
          float wave2 = cos(mouseDist * waveFreq * 1.3 - timeOffset * 0.8) * waveAmp * 0.7;

          vec2 mouseDirection = normalize(uMouse - ndcPos);
          float attraction = mouseStrength * uMouseInfluence * 0.8;

          mixedPosition.x += (wave1 + wave2) * mouseStrength * 0.5;
          mixedPosition.y += (wave1 - wave2) * mouseStrength * 0.5;
          mixedPosition.z += sin(timeOffset + mouseDist * 10.0) * mouseStrength * 0.3;
          mixedPosition.x += mouseDirection.x * attraction * 0.2;
          mixedPosition.y += mouseDirection.y * attraction * 0.2;

          float globalWave = sin(uTime * 0.5 + length(position) * 2.0) * 0.02;
          mixedPosition += normalize(position) * globalWave;
        }

        vec2 mouseInfluence = uMouse * 0.1;
        mixedPosition.x += mouseInfluence.x * sin(delayedProgress * 3.14159);
        mixedPosition.y += mouseInfluence.y * cos(delayedProgress * 3.14159);

        // 클릭 효과 (기존 유지)
        float clickDist = distance(ndcPos, uClick);
        float clickInfluence = smoothstep(0.4, 0.0, clickDist) * uClickTime;
        float clickWave = sin(clickDist * 15.0 - uTime * 8.0) * clickInfluence;

        mixedPosition.x += (uClick.x - ndcPos.x) * 0.3 * clickInfluence;
        mixedPosition.y += (uClick.y - ndcPos.y) * 0.3 * clickInfluence;
        mixedPosition.z += clickWave * 0.2;

        vec4 modelPosition = modelMatrix * vec4(mixedPosition, 1.0);
        vec4 viewPosition = viewMatrix * modelPosition;
        vec4 projectedPosition = projectionMatrix * viewPosition;
        gl_Position = projectedPosition;

        gl_PointSize = aSize * uSize * uResolution.y;
        gl_PointSize *= (1.0 / -viewPosition.z);

        float noise = fract(sin(dot(position + aPositionTarget, vec3(12.9898, 78.233, 151.7182))) * 43758.5453);
        vec3 color1, color2;
        if (noise < 0.2) { color1 = uColorA; color2 = uColorB; vColor = mix(color1, color2, noise / 0.2); }
        else if (noise < 0.4) { color1 = uColorB; color2 = uColorC; vColor = mix(color1, color2, (noise - 0.2) / 0.2); }
        else if (noise < 0.6) { color1 = uColorC; color2 = uColorD; vColor = mix(color1, color2, (noise - 0.4) / 0.2); }
        else if (noise < 0.8) { color1 = uColorD; color2 = uColorE; vColor = mix(color1, color2, (noise - 0.6) / 0.2); }
        else { color1 = uColorE; color2 = uColorA; vColor = mix(color1, color2, (noise - 0.8) / 0.2); }

        vAlpha = 1.0;
      }
    `;

    const fragmentShader = `
      varying vec3 vColor;
      varying float vAlpha;
      void main() {
        vec2 uv = gl_PointCoord;
        float dist = length(uv - 0.5);
        float alpha = (0.12 / dist - 0.24) * vAlpha;
        alpha = clamp(alpha, 0.0, 1.0);
        float center = 1.0 - smoothstep(0.0, 0.3, dist);
        alpha += center * 0.1;
        gl_FragColor = vec4(vColor, alpha);
      }
    `;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    // 모바일일 때 카메라를 조금 더 뒤로
    camera.position.z = isMobile ? 6.5 : 5;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1.5 : 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x0e0e0e, 1);
    containerRef.current.appendChild(renderer.domElement);

    const radius = isMobile ? 1.6 : 2;
    const TOTAL_PARTICLES = isMobile ? 3000 : 7000;
    const goldenRatio = (1 + Math.sqrt(5)) / 2;
    const landPositions = [];

    // 지구 위 위치 계산
    for (let i = 0; i < TOTAL_PARTICLES; i++) {
      const y = 1 - (i / (TOTAL_PARTICLES - 1)) * 2;
      const radiusAtY = Math.sqrt(1 - y * y);
      const theta = (2 * Math.PI * i) / goldenRatio;
      const x = Math.cos(theta) * radiusAtY;
      const z = Math.sin(theta) * radiusAtY;
      const lat = (Math.asin(y) * 180) / Math.PI;
      const lon = (Math.atan2(z, x) * 180) / Math.PI;
      for (const country of countries.features) {
        if (d3.geoContains(country, [lon, lat])) {
          landPositions.push(x * radius, y * radius, z * radius);
          break;
        }
      }
    }

    // 배경 파티클
    const backgroundParticles = isMobile ? 100 : 300;
    for (let i = 0; i < backgroundParticles; i++) {
      const phi = Math.random() * Math.PI * 2;
      const theta = Math.random() * Math.PI;
      const r = 3 + Math.random() * 2;
      const x = Math.sin(theta) * Math.cos(phi) * r;
      const y = Math.cos(theta) * r;
      const z = Math.sin(theta) * Math.sin(phi) * r;
      landPositions.push(x, y, z);
    }

    const particleCount = landPositions.length / 3;
    const initialPositions = new Float32Array(particleCount * 3);
    const pillarPositions = new Float32Array(particleCount * 3);
    const targetPositions = new Float32Array(landPositions);
    const sizeAttr = new Float32Array(particleCount);
    const delayAttr = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      const phi = Math.random() * Math.PI * 2;
      const theta = Math.random() * Math.PI;
      const r = 3 + Math.random() * 2;
      initialPositions[i * 3] = Math.sin(theta) * Math.cos(phi) * r;
      initialPositions[i * 3 + 1] = Math.cos(theta) * r;
      initialPositions[i * 3 + 2] = Math.sin(theta) * Math.sin(phi) * r;

      const finalX = landPositions[i * 3];
      const finalZ = landPositions[i * 3 + 2];

      const pillarHeight = 8;
      const pillarSpread = 0.3;
      pillarPositions[i * 3] = finalX + (Math.random() - 0.5) * pillarSpread;
      pillarPositions[i * 3 + 1] = pillarHeight - i * 0.005;
      pillarPositions[i * 3 + 2] = finalZ + (Math.random() - 0.5) * pillarSpread;

      // 모바일에서 파티클 크기 줄이기
      sizeAttr[i] = isMobile ? 0.4 + Math.random() * 0.6 : 1.0 + Math.random();
      delayAttr[i] = Math.random() * 0.6;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(initialPositions, 3));
    geometry.setAttribute('aPositionTarget', new THREE.BufferAttribute(targetPositions, 3));
    geometry.setAttribute('aPositionPillar', new THREE.BufferAttribute(pillarPositions, 3));
    geometry.setAttribute('aSize', new THREE.BufferAttribute(sizeAttr, 1));
    geometry.setAttribute('aDelay', new THREE.BufferAttribute(delayAttr, 1));

    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: {
        uSize: { value: 0.07 },
        uResolution: { value: new THREE.Vector2(window.innerWidth * window.devicePixelRatio, window.innerHeight * window.devicePixelRatio) },
        uProgress: { value: 0 },
        uMouse: { value: new THREE.Vector2(0, 0) },
        uClick: { value: new THREE.Vector2(0, 0) },
        uClickTime: { value: 0 },
        uTime: { value: 0 },
        uMouseInfluence: { value: 1.0 },
        uMouseActive: { value: 0.0 },
        uColorA: { value: new THREE.Color('#10D48D') },
        uColorB: { value: new THREE.Color('#226ADF') },
        uColorC: { value: new THREE.Color('#038DFE') },
        uColorD: { value: new THREE.Color('#133DE7') },
        uColorE: { value: new THREE.Color('#5419EA') },
      },
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // 마우스, 클릭, 스크롤, 애니메이션 로직 기존 그대로
    const mouse = new THREE.Vector2();
    const targetMouse = new THREE.Vector2();
    let lastMouseMoveTime = 0;
    const MOUSE_ACTIVE_DURATION = 0.3;
    const clock = new THREE.Clock();

    const handleMouseMove = (event) => {
      targetMouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      targetMouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
      lastMouseMoveTime = clock.getElapsedTime();
    };

    let clickTime = 0;
    let clickPosition = new THREE.Vector2(0, 0);
    const handleClick = (event) => {
      clickPosition.x = (event.clientX / window.innerWidth) * 2 - 1;
      clickPosition.y = -(event.clientY / window.innerHeight) * 2 + 1;
      clickTime = 1.0;
      material.uniforms.uClick.value = clickPosition;
      material.uniforms.uClickTime.value = clickTime;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('click', handleClick);

    let scrollProgress = 0;
    const scrollContent = document.createElement('div');
    scrollContent.style.cssText = 'position:absolute;top:0;left:0;width:1px;height:5000px;pointer-events:none;opacity:0;';
    document.body.appendChild(scrollContent);

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = 5000;
      scrollProgress = Math.min(scrollY / maxScroll, 1);
    };
    window.addEventListener('scroll', handleScroll);

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      material.uniforms.uResolution.value.set(window.innerWidth * window.devicePixelRatio, window.innerHeight * window.devicePixelRatio);
    };
    window.addEventListener('resize', handleResize);

    const animate = () => {
      requestAnimationFrame(animate);
      const deltaTime = clock.getDelta();
      const elapsedTime = clock.getElapsedTime();

      mouse.lerp(targetMouse, 0.05);
      material.uniforms.uMouse.value = mouse;

      const mouseRecentlyMoved = elapsedTime - lastMouseMoveTime < MOUSE_ACTIVE_DURATION;
      material.uniforms.uMouseActive.value = mouseRecentlyMoved && material.uniforms.uProgress.value < 0.9 ? 1.0 : 0.0;

      const smoothScrollProgress = THREE.MathUtils.lerp(material.uniforms.uProgress.value, scrollProgress, 0.02);
      material.uniforms.uProgress.value = smoothScrollProgress;
      material.uniforms.uTime.value = elapsedTime;

      if (clickTime > 0) {
        clickTime = Math.max(0, clickTime - deltaTime * 2);
        material.uniforms.uClickTime.value = clickTime;
      }

      if (smoothScrollProgress > 0.5) {
        particles.rotation.y += 0.002;
      }

      // 모바일/데스크탑 카메라 z 최적화
      const baseZ = isMobile ? 6.5 : 5;
      const range = isMobile ? 1.0 : 1.5;
      const targetZ = baseZ - smoothScrollProgress * range;
      camera.position.z = THREE.MathUtils.lerp(camera.position.z, targetZ, 0.02);

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
      if (containerRef.current && renderer.domElement) containerRef.current.removeChild(renderer.domElement);
      if (document.body.contains(scrollContent)) document.body.removeChild(scrollContent);
      renderer.dispose();
      geometry.dispose();
      material.dispose();
    };
  }, []);

  return (
    <div style={{ height: '600vh', position: 'relative', backgroundColor: 'var(--background-primary)' }}>
      <div ref={containerRef} data-particle-globe style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100vh', zIndex: 1 }} />
    </div>
  );
};

export default ParticleGlobe;