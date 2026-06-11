import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: 100000, suffix: "K+", label: "Fermerlar", divide: 1000 },
  { value: 50000, suffix: "K+", label: "Mahsulotlar", divide: 1000 },
  { value: 200000, suffix: "K+", label: "Bitimlar", divide: 1000 },
  { value: 10, suffix: "M+", label: "GMV (USD)", divide: 1 },
];

function Counter({ to, suffix, divide }: { to: number; suffix: string; divide: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const target = to / divide;
    const start = performance.now();
    const dur = 1600;
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.floor(target * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, divide]);

  return <span ref={ref}>{n}{suffix}</span>;
}

export function KPI() {
  return (
    <section className="py-20 sm:py-28 bg-[oklch(0.205_0.04_257)] text-white relative overflow-hidden">
      <div aria-hidden className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 h-[400px] w-[400px] rounded-full bg-primary/40 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-[400px] w-[400px] rounded-full bg-accent/40 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 grid grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((s, i) => (
          <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.08 }} className="text-center">
            <div className="text-5xl sm:text-6xl font-extrabold tracking-tight text-gradient">
              <Counter to={s.value} suffix={s.suffix} divide={s.divide} />
            </div>
            <div className="mt-2 text-sm uppercase tracking-wider text-white/70 font-semibold">{s.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
