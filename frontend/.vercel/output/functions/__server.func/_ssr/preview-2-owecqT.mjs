import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { S as SectionTitle } from "./Reveal-Cml1dV_t.mjs";
import { h as Store, g as Brain, p as ChartColumn, j as Truck } from "../_libs/lucide-react.mjs";
import { m as motion, A as AnimatePresence } from "../_libs/framer-motion.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const tabs = [
  { id: "marketplace", label: "Marketplace", icon: Store, panel: { title: "Mahsulot oqimi va buyurtmalar", rows: ["Pomidor — 1.2t", "Bug'doy — 8.4t", "Olma — 3.1t", "Sabzi — 950kg"], tone: "from-primary/20 to-secondary/10" } },
  { id: "ai", label: "AI", icon: Brain, panel: { title: "AI Agronom tavsiyalari", rows: ["Sug'orish: 06:00", "O'g'it: NPK 12-12-17", "Kasallik xavfi: past", "Hosil prognozi: +18%"], tone: "from-secondary/20 to-accent/10" } },
  { id: "analytics", label: "Analytics", icon: ChartColumn, panel: { title: "Biznes ko'rsatkichlari", rows: ["GMV: $1.24M", "Active users: 12,840", "Orders: 4,210", "Conversion: 7.3%"], tone: "from-accent/20 to-primary/10" } },
  { id: "logistics", label: "Logistics", icon: Truck, panel: { title: "Faol marshrutlar", rows: ["Toshkent → Samarqand", "Farg'ona → Andijon", "Buxoro → Navoiy", "Xorazm → Toshkent"], tone: "from-primary/20 to-accent/10" } }
];
function PreviewTabs() {
  const [active, setActive] = reactExports.useState(tabs[0].id);
  const current = tabs.find((t) => t.id === active);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "preview", className: "py-24 sm:py-32 bg-muted", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SectionTitle,
      {
        eyebrow: "Platform Preview",
        title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          "Bitta dashboard — ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "cheksiz nazorat" })
        ] }),
        subtitle: "Har bir modul — bir clickda qo'lingizda."
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 flex flex-wrap justify-center gap-2", children: tabs.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        onClick: () => setActive(t.id),
        className: `relative px-5 py-2.5 rounded-xl text-sm font-semibold flex items-center gap-2 transition-colors ${active === t.id ? "text-white" : "text-foreground/70 hover:text-foreground"}`,
        children: [
          active === t.id && /* @__PURE__ */ jsxRuntimeExports.jsx(motion.span, { layoutId: "tab-bg", className: "absolute inset-0 rounded-xl bg-gradient-primary shadow-glow", transition: { type: "spring", bounce: 0.2, duration: 0.6 } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(t.icon, { className: "relative h-4 w-4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative", children: t.label })
        ]
      },
      t.id
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 mx-auto max-w-5xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl glass p-4 shadow-neon", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 mb-3 px-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2.5 w-2.5 rounded-full bg-red-400/60" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2.5 w-2.5 rounded-full bg-yellow-400/60" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2.5 w-2.5 rounded-full bg-green-400/60" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-2xl bg-card p-6 sm:p-8 min-h-[360px] relative overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: { opacity: 0, y: 16 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -16 }, transition: { duration: 0.35 }, className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-wider text-muted-foreground font-semibold", children: current.label }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-bold mt-1", children: current.panel.title })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold", children: "Real-time" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 gap-3", children: current.panel.rows.map((r, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.1 + i * 0.05 }, className: `rounded-xl p-4 bg-gradient-to-br ${current.panel.tone} border border-border/40`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground", children: [
            "Item ",
            i + 1
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold mt-1", children: r })
        ] }, r)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 rounded-xl bg-foreground/[0.03] p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-end gap-1.5 h-24", children: [40, 65, 50, 80, 55, 90, 70, 95, 75, 100, 85, 110, 95, 120, 100, 130].map((h, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: { height: 0 }, animate: { height: h }, transition: { delay: i * 0.03, duration: 0.5 }, className: "flex-1 rounded-t bg-gradient-to-t from-primary to-accent" }, i)) }) })
      ] }, current.id) }) })
    ] }) })
  ] }) });
}
function Page() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pt-24", children: /* @__PURE__ */ jsxRuntimeExports.jsx(PreviewTabs, {}) });
}
export {
  Page as component
};
