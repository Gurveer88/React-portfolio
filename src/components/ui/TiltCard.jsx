import { useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion'; // or 'motion/react' depending on your installed version

const springValues = {
  damping: 30,
  stiffness: 100,
  mass: 2
};

export default function TiltCard({ 
  children, 
  rotateAmplitude = 20, 
  scaleOnHover = 1.1 // Set slightly lower than 1.1 so large text cards don't pop out too aggressively
}) {
  const ref = useRef(null);

  // Using your exact spring state
  const rotateX = useSpring(useMotionValue(0), springValues);
  const rotateY = useSpring(useMotionValue(0), springValues);
  const scale = useSpring(1, springValues);

  function handleMouse(e) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    
    // Your exact center-offset math
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;

    const rotationX = (offsetY / (rect.height / 2)) * -rotateAmplitude;
    const rotationY = (offsetX / (rect.width / 2)) * rotateAmplitude;

    rotateX.set(rotationX);
    rotateY.set(rotationY);
  }

  function handleMouseEnter() {
    scale.set(scaleOnHover);
  }

  function handleMouseLeave() {
    scale.set(1);
    rotateX.set(0);
    rotateY.set(0);
  }

  return (
    // The outer wrapper holds the 3D camera perspective
    <div style={{ perspective: 1000 }} className="w-full h-full">
      
      <motion.div
        ref={ref}
        onMouseMove={handleMouse}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          scale,
        }}
        // Using Tailwind instead of TiltedCard.css
        className="relative w-full h-full rounded-3xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 p-8 shadow-sm transition-shadow duration-300 hover:shadow-2xl cursor-none"
      >
        {children}
      </motion.div>
      
    </div>
  );
}