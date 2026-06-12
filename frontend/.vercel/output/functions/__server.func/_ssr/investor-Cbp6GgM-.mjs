import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { S as SectionTitle } from "./Reveal-Cml1dV_t.mjs";
import { s as TrendingUp, E as Earth, t as Users, u as DollarSign } from "../_libs/lucide-react.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const metrics = [
  { icon: TrendingUp, value: "$24B", label: "TAM — Markaziy Osiyo agro bozori" },
  { icon: Earth, value: "5", label: "Maqsadli mamlakatlar" },
  { icon: Users, value: "12M+", label: "Potensial foydalanuvchilar" },
  { icon: DollarSign, value: "78%", label: "Yillik o'sish prognozi" }
];
function Investor() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24 sm:py-32 bg-muted relative overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SectionTitle,
      {
        eyebrow: "Investorlar uchun",
        title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "Central Asia's" }),
          " Future Agro Ecosystem"
        ] }),
        subtitle: "Mintaqaning eng katta agrotech imkoniyati — bitta platformada."
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-5", children: metrics.map((m, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5, delay: i * 0.08 }, className: "rounded-3xl p-6 bg-card border border-border shadow-card-soft hover:shadow-glow transition-shadow", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(m.icon, { className: "h-6 w-6 text-primary" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 text-4xl font-extrabold tracking-tight text-gradient", children: m.value }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 text-sm text-muted-foreground", children: m.label })
    ] }, m.label)) })
  ] }) });
}
function Page() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pt-24", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Investor, {}) });
}
export {
  Page as component
};
