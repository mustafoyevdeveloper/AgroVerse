import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import { A as ArrowRight, v as Calendar } from "../_libs/lucide-react.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
function CTA() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "cta", className: "py-24 sm:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl px-4 sm:px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.7 }, className: "relative rounded-[2.5rem] overflow-hidden p-10 sm:p-16 text-center text-white bg-[oklch(0.205_0.04_257)]", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "aria-hidden": true, className: "absolute inset-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-32 -left-20 h-[400px] w-[400px] rounded-full bg-primary/40 blur-3xl" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -bottom-32 -right-20 h-[400px] w-[400px] rounded-full bg-accent/40 blur-3xl" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 opacity-[0.08]", style: { backgroundImage: "linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)", backgroundSize: "40px 40px", maskImage: "radial-gradient(ellipse at center, black, transparent 70%)" } })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative max-w-3xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight", children: [
        "AgroVerse bilan agro sanoatning ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "kelajagini" }),
        " quring"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-lg text-white/70 max-w-xl mx-auto", children: "Bugun boshlang — bir necha daqiqada platformaga ulaning va o'sishni boshlang." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-9 flex flex-wrap justify-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#", className: "group inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-gradient-primary text-white font-semibold shadow-glow hover:shadow-neon transition-all", children: [
          "Boshlash",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4 group-hover:translate-x-1 transition-transform" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#", className: "inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-white/10 backdrop-blur border border-white/20 text-white font-semibold hover:bg-white/15 transition-colors", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "h-4 w-4" }),
          "Demo so'rash"
        ] })
      ] })
    ] })
  ] }) }) });
}
function Page() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pt-24", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CTA, {}) });
}
export {
  Page as component
};
