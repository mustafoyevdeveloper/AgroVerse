import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { m as motion, u as useInView } from "../_libs/framer-motion.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const stats = [
  { value: 1e5, suffix: "K+", label: "Fermerlar", divide: 1e3 },
  { value: 5e4, suffix: "K+", label: "Mahsulotlar", divide: 1e3 },
  { value: 2e5, suffix: "K+", label: "Bitimlar", divide: 1e3 },
  { value: 10, suffix: "M+", label: "GMV (USD)", divide: 1 }
];
function Counter({ to, suffix, divide }) {
  const ref = reactExports.useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [n, setN] = reactExports.useState(0);
  reactExports.useEffect(() => {
    if (!inView) return;
    const target = to / divide;
    const start = performance.now();
    const dur = 1600;
    let raf = 0;
    const tick = (t) => {
      const p = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.floor(target * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, divide]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { ref, children: [
    n,
    suffix
  ] });
}
function KPI() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "py-20 sm:py-28 bg-[oklch(0.205_0.04_257)] text-white relative overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "aria-hidden": true, className: "absolute inset-0 opacity-30", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 left-1/4 h-[400px] w-[400px] rounded-full bg-primary/40 blur-3xl" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 right-1/4 h-[400px] w-[400px] rounded-full bg-accent/40 blur-3xl" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative mx-auto max-w-7xl px-4 sm:px-6 grid grid-cols-2 lg:grid-cols-4 gap-6", children: stats.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6, delay: i * 0.08 }, className: "text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-5xl sm:text-6xl font-extrabold tracking-tight text-gradient", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Counter, { to: s.value, suffix: s.suffix, divide: s.divide }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 text-sm uppercase tracking-wider text-white/70 font-semibold", children: s.label })
    ] }, s.label)) })
  ] });
}
function Page() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pt-24", children: /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, {}) });
}
export {
  Page as component
};
