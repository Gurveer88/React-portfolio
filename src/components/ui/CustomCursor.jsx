import { useEffect, useState } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  // 1. Movement State (Bypasses React rendering for ultra-fast performance)
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Apply your exact spring physics to the motion values
  const springConfig = { stiffness: 800, damping: 35, mass: 0.1 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  // 2. Click State (Standard React state is fine here since clicks are infrequent)
  const [clickEffects, setClickEffects] = useState([]);

  useEffect(() => {
    // Inject directly into Framer Motion values, skipping React's render cycle
    const updateMousePosition = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseDown = (e) => {
      const newEffect = {
        id: Date.now(),
        x: e.clientX,
        y: e.clientY,
      };
      
      setClickEffects((prev) => [...prev, newEffect]);

      setTimeout(() => {
        setClickEffects((prev) => prev.filter((effect) => effect.id !== newEffect.id));
      }, 400); 
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mousedown', handleMouseDown);
    
    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mousedown', handleMouseDown);
    };
  }, [cursorX, cursorY]);

  return (
    <div className="hidden md:block">
      
      {/* The Big, Smooth Arrow */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-100"
        // Use the style prop to inject the spring values directly into the DOM
        style={{ 
          x: cursorXSpring, 
          y: cursorYSpring 
        }}
      >
        {/* Your Exact Custom SVG Arrow */}
        <svg
          width="45"
          height="45"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-lg"
          style={{ transform: 'translate(-2px, -2px)' }} 
        >
          <path
            d="M4.5 2.5L20 11L13 13L11 20L4.5 2.5Z"
            className="fill-slate-900 dark:fill-white stroke-white dark:stroke-slate-900 stroke-[1.5px]"
          />
        </svg>
      </motion.div>

      {/* The Click Micro-Interactions */}
      <AnimatePresence>
        {clickEffects.map((effect) => (
          <motion.div
            key={effect.id}
            className="fixed top-0 left-0 border-[1.5px] border-slate-900 dark:border-white rounded-full pointer-events-none z-90"
            initial={{ 
              width: 0, 
              height: 0, 
              x: effect.x, 
              y: effect.y, 
              opacity: 1 
            }}
            animate={{ 
              width: 30,
              height: 30, 
              // FIXED: Offset by exactly half the width/height (10px) to center it
              x: effect.x - 10, 
              y: effect.y - 10, 
              opacity: 0 
            }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          />
        ))}
      </AnimatePresence>

    </div>
  );
}