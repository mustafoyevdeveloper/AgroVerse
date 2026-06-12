import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { S as SectionTitle } from "./Reveal-Cml1dV_t.mjs";
import { g as Brain, s as TrendingUp, o as Route, w as MessageSquareText } from "../_libs/lucide-react.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const cards = [
  { icon: Brain, title: "AI Agronom", features: ["Sug'orish optimizatsiyasi", "O'g'it tavsiyalari", "Kasallik aniqlash"] },
  { icon: TrendingUp, title: "AI Market", features: ["Talab tahlili", "Narx prognozi", "Bozor trendi"] },
  { icon: Route, title: "AI Logistics", features: ["Marshrut optimallashtirish", "Transport tanlash", "Real-time monitoring"] },
  { icon: MessageSquareText, title: "AI Assistant", features: ["24/7 savol-javob", "Hujjat tahlili", "Mahalliy tillarda"] }
];
function AIPower() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "ai", className: "py-24 sm:py-32 relative overflow-hidden bg-[oklch(0.205_0.04_257)] text-white", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "aria-hidden": true, className: "absolute inset-0 opacity-40", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-40 left-1/4 h-[500px] w-[500px] rounded-full bg-primary/40 blur-3xl" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -bottom-40 right-1/4 h-[500px] w-[500px] rounded-full bg-accent/30 blur-3xl" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        "aria-hidden": true,
        className: "absolute inset-0 opacity-[0.08]",
        style: {
          backgroundImage: "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage: "radial-gradient(ellipse at center, black, transparent 70%)"
        }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-7xl px-4 sm:px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SectionTitle,
        {
          eyebrow: "AI Power",
          title: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-white", children: [
            "AgroVerse ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "AI" })
          ] }),
          subtitle: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/70", children: "To'rtta ixtisoslashgan AI yadrosi — har bir jarayon uchun aql." })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-5", children: cards.map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "-60px" },
          transition: { duration: 0.6, delay: i * 0.08 },
          whileHover: { y: -6, scale: 1.02 },
          className: "group relative rounded-3xl p-6 bg-white/[0.04] border border-white/10 backdrop-blur-xl hover:border-primary/60 hover:shadow-neon transition-all",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -inset-px rounded-3xl bg-gradient-to-br from-primary/40 via-transparent to-accent/40 opacity-0 group-hover:opacity-100 transition-opacity blur" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-12 w-12 rounded-2xl bg-gradient-primary grid place-items-center shadow-glow", children: /* @__PURE__ */ jsxRuntimeExports.jsx(c.icon, { className: "h-6 w-6 text-white" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-5 font-bold text-xl", children: c.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-4 space-y-2", children: c.features.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2 text-sm text-white/70", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-accent" }),
                f
              ] }, f)) })
            ] })
          ]
        },
        c.title
      )) })
    ] })
  ] });
}
function Page() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pt-24", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AIPower, {}) });
}
export {
  Page as component
};
