import { useRef, useEffect } from "react";

export function usePointerLerp({ initial = { x: 0.5, y: 0.5 }, lerpFactor = 0.1 } = {}) {
  const pointer = useRef(initial);
  const target = useRef(initial);

  useEffect(() => {
    function handlePointerMove(e: MouseEvent) {
      const x = e.clientX / window.innerWidth;
      const y = 1.0 - e.clientY / window.innerHeight;
      target.current = { x, y };
    }
    window.addEventListener("mousemove", handlePointerMove);
    return () => window.removeEventListener("mousemove", handlePointerMove);
  }, []);

  useEffect(() => {
    let frame: number;
    function animate() {
      pointer.current.x += (target.current.x - pointer.current.x) * lerpFactor;
      pointer.current.y += (target.current.y - pointer.current.y) * lerpFactor;
      frame = requestAnimationFrame(animate);
    }
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [lerpFactor]);

  return pointer;
}
