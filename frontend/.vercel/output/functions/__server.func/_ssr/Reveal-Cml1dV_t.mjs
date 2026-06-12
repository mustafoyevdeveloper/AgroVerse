import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
const variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 }
};
function Reveal({
  children,
  delay = 0,
  className
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      variants,
      initial: "hidden",
      whileInView: "visible",
      viewport: { once: true, margin: "-80px" },
      transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
      className,
      children
    }
  );
}
function SectionTitle({
  eyebrow,
  title,
  subtitle,
  center = true
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: center ? "text-center max-w-3xl mx-auto" : "max-w-3xl", children: [
    eyebrow && /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs font-semibold text-primary mb-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-primary animate-pulse" }),
      eyebrow
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 0.05, children: /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.05]", children: title }) }),
    subtitle && /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 0.1, children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-lg text-muted-foreground leading-relaxed", children: subtitle }) })
  ] });
}
export {
  SectionTitle as S
};
