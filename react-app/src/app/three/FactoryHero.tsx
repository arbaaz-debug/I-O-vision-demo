import { useEffect, useRef } from 'react';
import { FactoryHeroScene } from './factoryHeroScene';

export function FactoryHero() {
  const hostRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!hostRef.current || !canvasRef.current) return;
    const scene = new FactoryHeroScene(canvasRef.current, hostRef.current);
    scene.start();
    return () => scene.dispose();
  }, []);

  return (
    <div ref={hostRef} style={{ width: '100%', height: '100%', pointerEvents: 'none' }}>
      <canvas ref={canvasRef} style={{ display: 'block', width: '100%', height: '100%' }} />
    </div>
  );
}
