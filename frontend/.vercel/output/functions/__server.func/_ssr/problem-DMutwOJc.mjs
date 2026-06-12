import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { S as SectionTitle } from "./Reveal-Cml1dV_t.mjs";
import { f as Tractor, n as ShieldQuestionMark, o as Route, D as Database } from "../_libs/lucide-react.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const items = [
  { icon: Tractor, title: "Fermer", desc: "Mahsulotni qimmatga sota olmaydi." },
  { icon: ShieldQuestionMark, title: "Xaridor", desc: "Ishonchli yetkazib beruvchi topa olmaydi." },
  { icon: Route, title: "Logistika", desc: "Bo'sh qatnovlar va samarasiz marshrutlar." },
  { icon: Database, title: "Bozor", desc: "Ma'lumotlar tarqoq, qaror qabul qilish qiyin." }
];
function Problem() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "problem", className: "py-24 sm:py-32 relative", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SectionTitle,
      {
        eyebrow: "Muammo",
        title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          "Nega ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "AgroVerse" }),
          " kerak?"
        ] }),
        subtitle: "Agro sanoatdagi to'rtta asosiy uzilish — bir vaqtning o'zida hal etilishi kerak."
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-5", children: items.map((it, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-60px" },
        transition: { duration: 0.6, delay: i * 0.08 },
        whileHover: { y: -6 },
        className: "group relative rounded-3xl p-6 bg-card border border-border shadow-card-soft hover:shadow-glow transition-all overflow-hidden",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-12 w-12 rounded-2xl bg-primary/10 grid place-items-center mb-5 group-hover:bg-gradient-primary transition-all", children: /* @__PURE__ */ jsxRuntimeExports.jsx(it.icon, { className: "h-6 w-6 text-primary group-hover:text-white transition-colors" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-lg", children: it.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground leading-relaxed", children: it.desc })
        ]
      },
      it.title
    )) })
  ] }) });
}
function Page() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pt-24", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Problem, {}) });
}
export {
  Page as component
};
