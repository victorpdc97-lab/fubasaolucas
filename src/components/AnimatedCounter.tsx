import { useEffect, useRef, useState } from "react";

interface AnimatedCounterProps {
  end: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  label: string;
}

const AnimatedCounter = ({ end, prefix = "", suffix = "", duration = 2000, label }: AnimatedCounterProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const startTime = Date.now();
    const tick = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * end));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [started, end, duration]);

  return (
    <div ref={ref} className="text-center">
      <p className="font-heading font-black text-4xl md:text-5xl text-primary">
        {prefix}{count}{suffix}
      </p>
      <p className="text-muted-foreground mt-2 text-sm font-medium">{label}</p>
    </div>
  );
};

export default AnimatedCounter;
