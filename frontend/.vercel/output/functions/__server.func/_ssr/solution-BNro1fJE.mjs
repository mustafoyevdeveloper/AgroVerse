import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { S as SectionTitle } from "./Reveal-Cml1dV_t.mjs";
import { f as Tractor, g as Brain, h as Store, i as ShoppingCart, j as Truck, P as PackageCheck, k as ChevronDown } from "../_libs/lucide-react.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const flow = [
  { icon: Tractor, label: "Fermer" },
  { icon: Brain, label: "AI Agronom" },
  { icon: Store, label: "Marketplace" },
  { icon: ShoppingCart, label: "Xaridor" },
  { icon: Truck, label: "Logistika" },
  { icon: PackageCheck, label: "Yetkazib berish" }
];
function Solution() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "solution", className: "py-24 sm:py-32 bg-muted relative overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 -z-0 opacity-60", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 left-1/2 -translate-x-1/2 h-[500px] w-[700px] rounded-full bg-primary/10 blur-3xl" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-7xl px-4 sm:px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SectionTitle,
        {
          eyebrow: "Yechim",
          title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            "Yagona platformada ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "barcha jarayon" })
          ] }),
          subtitle: "Fermerdan iste'molchiga — bitta uzluksiz, AI tomonidan boshqariladigan oqim."
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-16 max-w-md mx-auto flex flex-col gap-4", children: flow.map((step, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "-40px" },
          transition: { duration: 0.5, delay: i * 0.08 },
          className: "flex flex-col items-center",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full flex items-center gap-4 glass rounded-2xl p-4 shadow-card-soft hover:shadow-glow transition-shadow", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-12 w-12 rounded-xl bg-gradient-primary grid place-items-center text-white shadow-glow", children: /* @__PURE__ */ jsxRuntimeExports.jsx(step.icon, { className: "h-6 w-6" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground font-medium", children: [
                  "Bosqich ",
                  i + 1
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-lg", children: step.label })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs font-mono text-primary", children: [
                "0",
                i + 1
              ] })
            ] }),
            i < flow.length - 1 && /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                initial: { opacity: 0 },
                whileInView: { opacity: 1 },
                viewport: { once: true },
                transition: { delay: i * 0.08 + 0.2 },
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "h-5 w-5 text-primary/60 my-1" })
              }
            )
          ]
        },
        step.label
      )) })
    ] })
  ] });
}
function Page() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pt-24", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Solution, {}) });
}
export {
  Page as component
};
