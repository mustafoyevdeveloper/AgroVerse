import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { S as SectionTitle } from "./Reveal-Cml1dV_t.mjs";
import { h as Store, j as Truck, g as Brain, q as ChartLine, p as ChartColumn, r as Smartphone } from "../_libs/lucide-react.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const mods = [
  { icon: Store, title: "Marketplace", desc: "Mahsulot oldi-sotdi uchun shaffof bozor." },
  { icon: Truck, title: "Logistics Exchange", desc: "Bo'sh qatnovlarsiz, smart marshrutlar." },
  { icon: Brain, title: "AI Agronom", desc: "Maydonni boshqaruvchi raqamli mutaxassis." },
  { icon: ChartLine, title: "Market Intelligence", desc: "Real vaqtli narx va talab signallari." },
  { icon: ChartColumn, title: "Analytics", desc: "Biznes uchun chuqur insights va KPI." },
  { icon: Smartphone, title: "Mobile App", desc: "iOS va Android — hamma joyda nazorat." }
];
function Modules() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "modules", className: "py-24 sm:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SectionTitle,
      {
        eyebrow: "Platforma",
        title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          "Modul-modul ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "to'liq ekotizim" })
        ] }),
        subtitle: "Mustaqil ishlaydigan, bir-biri bilan chuqur integratsiyalashgan modullar."
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-5", children: mods.map((m, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 24 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-60px" },
        transition: { duration: 0.55, delay: i % 3 * 0.08 },
        whileHover: { y: -4 },
        className: "group rounded-3xl p-7 glass shadow-card-soft hover:shadow-glow transition-all relative overflow-hidden",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-primary opacity-0 group-hover:opacity-20 blur-2xl transition-opacity" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-14 w-14 rounded-2xl bg-gradient-primary grid place-items-center shadow-glow mb-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(m.icon, { className: "h-7 w-7 text-white" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-xl", children: m.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground leading-relaxed", children: m.desc }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5 text-sm font-semibold text-primary flex items-center gap-1.5 group-hover:gap-2.5 transition-all", children: "Batafsil →" })
        ]
      },
      m.title
    )) })
  ] }) });
}
function Page() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pt-24", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Modules, {}) });
}
export {
  Page as component
};
