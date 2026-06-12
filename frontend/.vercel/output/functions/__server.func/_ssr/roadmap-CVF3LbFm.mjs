import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { S as SectionTitle } from "./Reveal-Cml1dV_t.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import { l as CircleCheck, m as Circle, R as Rocket } from "../_libs/lucide-react.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const items = [
  { phase: "Q1", title: "MVP", desc: "Asosiy platforma va arxitektura.", done: true },
  { phase: "Q2", title: "Marketplace", desc: "Fermer va xaridor bozori.", done: true },
  { phase: "Q3", title: "Logistics", desc: "Marshrut va transport almashinuvi.", done: true },
  { phase: "Q4", title: "AI Agronom", desc: "Aqlli agronomik tavsiyalar.", done: false },
  { phase: "Q1+", title: "AI Market", desc: "Talab va narx prognozi.", done: false },
  { phase: "Q2+", title: "Mobile App", desc: "iOS va Android ilovalari.", done: false },
  { phase: "Q3+", title: "Expansion", desc: "Markaziy Osiyo bozorlariga chiqish.", done: false }
];
function Roadmap() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "roadmap", className: "py-24 sm:py-32 relative", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SectionTitle,
      {
        eyebrow: "Roadmap",
        title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          "Yo'l xaritasi — ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "kelajakka" })
        ] }),
        subtitle: "Bizning rivojlanish bosqichlarimiz."
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-16 max-w-3xl mx-auto relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-5 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/40 to-transparent" }),
      items.map((it, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: "-60px" }, transition: { duration: 0.5, delay: i * 0.06 }, className: `relative flex sm:items-center gap-6 mb-8 ${i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-5 sm:left-1/2 -translate-x-1/2 h-4 w-4 rounded-full bg-gradient-primary shadow-glow ring-4 ring-background" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden sm:block flex-1" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ml-14 sm:ml-0 flex-1 glass rounded-2xl p-5 shadow-card-soft hover:shadow-glow transition-shadow", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-1", children: [
            it.done ? /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-4 w-4 text-primary" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Circle, { className: "h-4 w-4 text-muted-foreground" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-mono font-semibold text-primary", children: it.phase })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-lg", children: it.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground mt-1", children: it.desc })
        ] })
      ] }, it.title)),
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: { opacity: 0, scale: 0.8 }, whileInView: { opacity: 1, scale: 1 }, viewport: { once: true }, transition: { duration: 0.6 }, className: "relative flex justify-center mt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-5 sm:left-1/2 -translate-x-1/2 h-10 w-10 rounded-full bg-gradient-primary grid place-items-center shadow-glow ring-4 ring-background", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Rocket, { className: "h-5 w-5 text-white" }) }) })
    ] })
  ] }) });
}
function Page() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pt-24", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Roadmap, {}) });
}
export {
  Page as component
};
