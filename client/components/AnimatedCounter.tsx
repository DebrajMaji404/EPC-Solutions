import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface AnimatedCounterProps {
  value: number;
  label: string;
  suffix?: string;
  duration?: number;
}

export default function AnimatedCounter({
  value,
  label,
  suffix = "",
  duration = 2,
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    const increment = value / (duration * 60);
    let current = 0;

    const interval = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(interval);
      } else {
        setCount(Math.floor(current));
      }
    }, 16);

    return () => clearInterval(interval);
  }, [isInView, value, duration]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6 }}
      className="text-center"
    >
      <motion.div className="text-4xl md:text-5xl font-poppins font-bold bg-gradient-to-r from-btc-teal to-btc-accent bg-clip-text text-transparent mb-2">
        {count}
        {suffix}
      </motion.div>
      <p className="text-lg text-btc-slate dark:text-gray-300 font-medium">{label}</p>
    </motion.div>
  );
}
