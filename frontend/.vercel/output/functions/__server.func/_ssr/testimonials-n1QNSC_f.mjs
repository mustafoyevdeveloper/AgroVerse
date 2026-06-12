import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { S as SectionTitle } from "./Reveal-Cml1dV_t.mjs";
import { A as AnimatePresence, m as motion } from "../_libs/framer-motion.mjs";
import { Q as Quote, C as ChevronLeft, e as ChevronRight } from "../_libs/lucide-react.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const items = [
  { name: "Akmal Karimov", role: "Fermer xo'jaligi rahbari", initials: "AK", comment: "AgroVerse orqali mahsulotlarimni 25% qimmatroq narxda sotyapman. AI agronom esa hosildorlikni sezilarli oshirdi." },
  { name: "Dilshoda Rahimova", role: "Yirik xaridor, retail tarmoq", initials: "DR", comment: "Ishonchli yetkazib beruvchilarni topish endi bir-ikki minutlik ish. Logistika integratsiyasi ajoyib." },
  { name: "Bobur Yusupov", role: "Logistika kompaniyasi CEO", initials: "BY", comment: "Bo'sh qatnovlar 40% ga kamaydi. AI marshrut optimizatsiyasi haqiqatan ham yutuq." }
];
function Testimonials() {
  const [i, setI] = reactExports.useState(0);
  const it = items[i];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24 sm:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionTitle, { eyebrow: "Mijozlar", title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      "Mijozlar ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "nima deyishadi" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-16 max-w-3xl mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -20 }, transition: { duration: 0.4 }, className: "rounded-3xl glass p-8 sm:p-12 shadow-card-soft text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Quote, { className: "h-10 w-10 text-primary/40 mx-auto mb-4" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xl sm:text-2xl leading-relaxed font-medium", children: [
          '"',
          it.comment,
          '"'
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex items-center justify-center gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-14 w-14 rounded-full bg-gradient-primary grid place-items-center text-white font-bold text-lg shadow-glow", children: it.initials }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-left", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold", children: it.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground", children: it.role })
          ] })
        ] })
      ] }, it.name) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex items-center justify-center gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setI((i - 1 + items.length) % items.length), className: "h-10 w-10 rounded-full glass grid place-items-center hover:bg-card transition-colors", "aria-label": "Oldingi", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "h-5 w-5" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2", children: items.map((_, k) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setI(k), "aria-label": `Slide ${k + 1}`, className: `h-2 rounded-full transition-all ${k === i ? "w-8 bg-gradient-primary" : "w-2 bg-border"}` }, k)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setI((i + 1) % items.length), className: "h-10 w-10 rounded-full glass grid place-items-center hover:bg-card transition-colors", "aria-label": "Keyingi", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-5 w-5" }) })
      ] })
    ] }) })
  ] }) });
}
function Page() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pt-24", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Testimonials, {}) });
}
export {
  Page as component
};
