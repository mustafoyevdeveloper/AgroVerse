import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import { S as Sparkles, A as ArrowRight, x as CirclePlay, B as Bot, y as ShoppingBag, j as Truck, p as ChartColumn } from "../_libs/lucide-react.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const dashCards = [
  { icon: Bot, label: "AI Agronom", value: "Sug'orish: optimal", tone: "from-green-500/20 to-emerald-500/10" },
  { icon: ShoppingBag, label: "Marketplace", value: "+128 ta yangi order", tone: "from-lime-500/20 to-green-500/10" },
  { icon: Truck, label: "Logistics", value: "3 marshrut faol", tone: "from-emerald-500/20 to-teal-500/10" },
  { icon: ChartColumn, label: "Analytics", value: "GMV +24% MoM", tone: "from-green-500/20 to-lime-500/10" }
];
function Hero() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "top", className: "relative pt-32 pb-20 sm:pt-40 sm:pb-28 bg-gradient-hero overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "aria-hidden": true, className: "absolute inset-0 pointer-events-none", children: [
      [...Array(18)].map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.span,
        {
          className: "absolute h-1.5 w-1.5 rounded-full bg-primary/40",
          style: {
            left: `${i * 53 % 100}%`,
            top: `${i * 37 % 100}%`
          },
          animate: { y: [0, -30, 0], opacity: [0.2, 0.7, 0.2] },
          transition: { duration: 6 + i % 5, repeat: Infinity, delay: i * 0.3 }
        },
        i
      )),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-40 -left-20 h-[420px] w-[420px] rounded-full bg-primary/20 blur-3xl" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-20 -right-20 h-[520px] w-[520px] rounded-full bg-accent/20 blur-3xl" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-2 gap-12 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.6 },
            className: "inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs font-semibold text-primary mb-6",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-3.5 w-3.5" }),
              "AI-Powered Agro Ecosystem"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.h1,
          {
            initial: { opacity: 0, y: 30 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.8, delay: 0.05 },
            className: "text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.02]",
            children: [
              "AI bilan boshqariladigan",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "yangi avlod" }),
              " agro ekotizimi"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.p,
          {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.8, delay: 0.15 },
            className: "mt-6 text-lg sm:text-xl text-muted-foreground max-w-xl leading-relaxed",
            children: "Fermer, xaridor va logistika xizmatlarini yagona aqlli platformada birlashtiramiz."
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.8, delay: 0.25 },
            className: "mt-8 flex flex-wrap gap-3",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "a",
                {
                  href: "/contact",
                  className: "group inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-primary text-white font-semibold shadow-glow hover:shadow-neon transition-all",
                  children: [
                    "Platformani sinash",
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4 group-hover:translate-x-1 transition-transform" })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "a",
                {
                  href: "/preview",
                  className: "inline-flex items-center gap-2 px-6 py-3.5 rounded-xl glass font-semibold text-foreground hover:bg-card/90 transition-colors",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(CirclePlay, { className: "h-5 w-5 text-primary" }),
                    "Demo ko'rish"
                  ]
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            transition: { duration: 1, delay: 0.5 },
            className: "mt-10 flex items-center gap-6 text-sm text-muted-foreground",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-foreground text-xl", children: "100K+" }),
                "Fermerlar"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-8 w-px bg-border" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-foreground text-xl", children: "10M+" }),
                "GMV"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-8 w-px bg-border" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-foreground text-xl", children: "99.9%" }),
                "Uptime"
              ] })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, x: 40, rotateY: -10 },
          animate: { opacity: 1, x: 0, rotateY: 0 },
          transition: { duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] },
          className: "relative",
          style: { perspective: 1200 },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative rounded-3xl glass p-5 shadow-neon", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 mb-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2.5 w-2.5 rounded-full bg-red-400/60" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2.5 w-2.5 rounded-full bg-yellow-400/60" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2.5 w-2.5 rounded-full bg-green-400/60" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-3 text-xs text-muted-foreground", children: "agroverse.ai/dashboard" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl bg-card/70 p-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "Bugungi tahlil" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-lg font-bold", children: "AI Insights" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-2.5 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold", children: "Live" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-3", children: dashCards.map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  motion.div,
                  {
                    initial: { opacity: 0, y: 10 },
                    animate: { opacity: 1, y: 0 },
                    transition: { delay: 0.6 + i * 0.1, duration: 0.5 },
                    whileHover: { y: -3 },
                    className: `rounded-xl p-3 border border-border/50 bg-gradient-to-br ${c.tone}`,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(c.icon, { className: "h-5 w-5 text-primary" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 text-[11px] font-semibold text-muted-foreground uppercase tracking-wide", children: c.label }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold mt-0.5", children: c.value })
                    ]
                  },
                  c.label
                )) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 rounded-xl bg-foreground/[0.03] p-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-end gap-1.5 h-20", children: [40, 65, 50, 80, 55, 90, 70, 95, 75, 100, 85, 110].map((h, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.div,
                  {
                    initial: { height: 0 },
                    animate: { height: h },
                    transition: { delay: 1 + i * 0.05, duration: 0.6 },
                    className: "flex-1 rounded-t bg-gradient-to-t from-primary to-accent"
                  },
                  i
                )) }) })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                initial: { opacity: 0, scale: 0.8 },
                animate: { opacity: 1, scale: 1 },
                transition: { delay: 1.2 },
                className: "absolute -left-6 -bottom-6 glass rounded-2xl p-3 shadow-card-soft hidden sm:block",
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-8 w-8 rounded-lg bg-gradient-primary grid place-items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Bot, { className: "h-4 w-4 text-white" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-muted-foreground", children: "AI tavsiya" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold", children: "+18% hosil prognozi" })
                  ] })
                ] })
              }
            )
          ]
        }
      )
    ] })
  ] });
}
function HomePage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {});
}
export {
  HomePage as component
};
