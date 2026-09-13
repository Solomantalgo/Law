import { useEffect, useRef, useState } from 'react';
import { stats } from '../data/siteData';

function AnimatedStat({ value, label }) {
  const [display, setDisplay] = useState(value);
  const started = useRef(false);
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    const number = Number.parseInt(value, 10);
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    const animate = () => {
      const start = performance.now();
      const duration = 1500;
      const frame = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - ((1 - progress) ** 3);
        const current = Math.round(number * eased);
        setDisplay(number < 10 ? String(current).padStart(2, '0') : String(current));
        if (progress < 1) window.requestAnimationFrame(frame);
        else setDisplay(value);
      };
      window.requestAnimationFrame(frame);
    };
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) { started.current = true; animate(); observer.disconnect(); }
    }, { threshold: 0.35 });
    if (node) observer.observe(node);
    return () => observer.disconnect();
  }, [value]);

  return <div className="stat" ref={ref}><strong aria-label={value}>{display}</strong><span>{label}</span></div>;
}

export default function Credibility() {
  return <section className="credibility reveal" id="credibility"><div className="section-kicker">A PRACTICE BUILT ON TRUST</div><div className="stats">{stats.map(([value, label]) => <AnimatedStat value={value} label={label} key={label} />)}</div></section>;
}
