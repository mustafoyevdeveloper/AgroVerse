import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { c as createRouter, a as createRootRouteWithContext, u as useRouter, L as Link, O as Outlet, H as HeadContent, S as Scripts, b as createFileRoute, l as lazyRouteComponent, d as useLocation } from "../_libs/tanstack__react-router.mjs";
import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { m as motion, A as AnimatePresence } from "../_libs/framer-motion.mjs";
import { L as Leaf, X, M as Menu, H as House, T as Twitter, a as Linkedin, G as Github, I as Instagram, S as Sparkles, B as Bot, U as User, b as Send, c as Sun, d as Moon } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const appCss = "/assets/styles-CJTiSmSB.css";
function reportLovableError(error, context = {}) {
  if (typeof window === "undefined") return;
  window.__lovableEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error"
    }
  );
}
function getInitial() {
  if (typeof window === "undefined") return "light";
  const stored = localStorage.getItem("theme");
  if (stored === "dark" || stored === "light") return stored;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
function ThemeToggle({ compact = false }) {
  const [theme, setTheme] = reactExports.useState("light");
  reactExports.useEffect(() => {
    const t = getInitial();
    setTheme(t);
    document.documentElement.classList.toggle("dark", t === "dark");
  }, []);
  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.classList.toggle("dark", next === "dark");
    try {
      localStorage.setItem("theme", next);
    } catch {
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "button",
    {
      onClick: toggle,
      "aria-label": "Mavzuni almashtirish",
      className: `relative inline-flex items-center justify-center rounded-xl border border-border bg-card/60 backdrop-blur hover:bg-card transition-colors ${compact ? "h-9 w-9" : "h-10 w-10"}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Sun, { className: "h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Moon, { className: "absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" })
      ]
    }
  );
}
const links = [
  { to: "/problem", label: "Muammo" },
  { to: "/solution", label: "Yechim" },
  { to: "/ai", label: "AI" },
  { to: "/modules", label: "Modullar" },
  { to: "/preview", label: "Preview" },
  { to: "/roadmap", label: "Roadmap" }
];
function Navbar() {
  const [scrolled, setScrolled] = reactExports.useState(false);
  const [open, setOpen] = reactExports.useState(false);
  const { pathname } = useLocation();
  reactExports.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  reactExports.useEffect(() => {
    setOpen(false);
  }, [pathname]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.header,
    {
      initial: { y: -40, opacity: 0 },
      animate: { y: 0, opacity: 1 },
      transition: { duration: 0.6, ease: "easeOut" },
      className: `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "py-2" : "py-4"}`,
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: `flex items-center justify-between rounded-2xl px-4 sm:px-6 transition-all duration-300 ${scrolled ? "py-2.5 bg-background shadow-card-soft border border-border/60" : "py-3 bg-transparent"}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "flex items-center gap-2.5 group", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-9 w-9 rounded-xl bg-gradient-primary grid place-items-center shadow-glow group-hover:shadow-neon transition-shadow", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Leaf, { className: "h-5 w-5 text-white", strokeWidth: 2.5 }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold tracking-tight text-lg text-foreground", children: "AgroVerse" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "hidden lg:flex items-center gap-1", children: links.map((l) => {
                const isActive = pathname === l.to;
                return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Link,
                  {
                    to: l.to,
                    className: `relative text-sm font-medium px-3.5 py-2 rounded-xl transition-all duration-200 ${isActive ? "text-primary" : "text-foreground/60 hover:text-foreground hover:bg-muted/50"}`,
                    children: [
                      isActive && /* @__PURE__ */ jsxRuntimeExports.jsx(
                        motion.span,
                        {
                          layoutId: "nav-pill",
                          className: "absolute inset-0 bg-primary/10 rounded-xl border border-primary/20",
                          transition: { type: "spring", stiffness: 300, damping: 30 }
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative z-10", children: l.label })
                    ]
                  },
                  l.to
                );
              }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden md:flex items-center gap-2.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ThemeToggle, {}),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Link,
                  {
                    to: "/contact",
                    className: "text-sm font-semibold px-4 py-2 rounded-xl text-foreground/70 hover:text-foreground hover:bg-muted/60 transition-all",
                    children: "Demo"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Link,
                  {
                    to: "/contact",
                    className: "text-sm font-semibold px-4 py-2 rounded-xl bg-gradient-primary text-white shadow-glow hover:shadow-neon hover:scale-[1.02] active:scale-[0.98] transition-all",
                    children: "Boshlash"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:hidden flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ThemeToggle, { compact: true }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    className: "p-2 rounded-xl hover:bg-muted transition-colors",
                    "aria-label": "Menyu",
                    onClick: () => setOpen((v) => !v),
                    children: open ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-5 w-5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "h-5 w-5" })
                  }
                )
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: open && /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: -8, scale: 0.97 },
            animate: { opacity: 1, y: 0, scale: 1 },
            exit: { opacity: 0, y: -8, scale: 0.97 },
            transition: { duration: 0.2 },
            className: "lg:hidden mt-2 bg-background rounded-2xl p-4 flex flex-col gap-1 border border-border/60 shadow-card-soft",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Link,
                {
                  to: "/",
                  onClick: () => setOpen(false),
                  className: `text-sm font-medium px-3 py-2.5 rounded-xl transition-colors ${pathname === "/" ? "bg-primary/10 text-primary" : "text-foreground/80 hover:bg-muted/50"}`,
                  children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(House, { className: "h-4 w-4" }),
                    " Bosh sahifa"
                  ] })
                }
              ),
              links.map((l) => {
                const isActive = pathname === l.to;
                return /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Link,
                  {
                    to: l.to,
                    onClick: () => setOpen(false),
                    className: `text-sm font-medium px-3 py-2.5 rounded-xl transition-colors ${isActive ? "bg-primary/10 text-primary" : "text-foreground/80 hover:bg-muted/50"}`,
                    children: l.label
                  },
                  l.to
                );
              }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 pt-2 border-t border-border/50 flex flex-col gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                Link,
                {
                  to: "/contact",
                  onClick: () => setOpen(false),
                  className: "text-center text-sm font-semibold px-4 py-2.5 rounded-xl bg-gradient-primary text-white shadow-glow",
                  children: "Boshlash"
                }
              ) })
            ]
          }
        ) })
      ] })
    }
  );
}
function Footer() {
  const year = (/* @__PURE__ */ new Date()).getFullYear();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "border-t border-border bg-muted", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 py-12", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-4 gap-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-9 w-9 rounded-xl bg-gradient-primary grid place-items-center shadow-glow", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Leaf, { className: "h-5 w-5 text-white" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-lg", children: "AgroVerse" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm text-muted-foreground max-w-sm", children: "AI bilan boshqariladigan agro ekotizim — fermer, xaridor va logistikani birlashtiradi." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold mb-3", children: "Platforma" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-sm text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/modules", className: "hover:text-foreground", children: "Modullar" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/ai", className: "hover:text-foreground", children: "AI" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/preview", className: "hover:text-foreground", children: "Preview" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/roadmap", className: "hover:text-foreground", children: "Roadmap" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold mb-3", children: "Kompaniya" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-sm text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", className: "hover:text-foreground", children: "Bog'lanish" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/investor", className: "hover:text-foreground", children: "Investorlar" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/testimonials", className: "hover:text-foreground", children: "Sharhlar" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/metrics", className: "hover:text-foreground", children: "Ko'rsatkichlar" }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm text-muted-foreground", children: [
        "© ",
        year,
        " AgroVerse. Barcha huquqlar himoyalangan."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", "aria-label": "Twitter", className: "hover:text-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Twitter, { className: "h-4 w-4" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", "aria-label": "LinkedIn", className: "hover:text-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Linkedin, { className: "h-4 w-4" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", "aria-label": "GitHub", className: "hover:text-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Github, { className: "h-4 w-4" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", "aria-label": "Instagram", className: "hover:text-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Instagram, { className: "h-4 w-4" }) })
      ] })
    ] })
  ] }) });
}
const DEMO_MESSAGES = [
  { id: 1, role: "assistant", text: "Salom! Men AgroVerse AI yordamchiman. Sizga qanday yordam berishim mumkin?" }
];
function AIChatWidget() {
  const [open, setOpen] = reactExports.useState(false);
  const [input, setInput] = reactExports.useState("");
  const [messages, setMessages] = reactExports.useState(DEMO_MESSAGES);
  const [typing, setTyping] = reactExports.useState(false);
  const bottomRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);
  const send = () => {
    const text = input.trim();
    if (!text) return;
    const userMsg = { id: Date.now(), role: "user", text };
    setMessages((m) => [...m, userMsg]);
    setInput("");
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      const reply = {
        id: Date.now() + 1,
        role: "assistant",
        text: "Rahmat! Tez orada sizning so'rovingizga to'liq javob beramiz. Hozircha demo rejimda ishlayapmiz."
      };
      setMessages((m) => [...m, reply]);
    }, 1200);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed bottom-6 right-6 z-[60] flex flex-col items-end", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: open && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, scale: 0.85, y: 20 },
        animate: { opacity: 1, scale: 1, y: 0 },
        exit: { opacity: 0, scale: 0.85, y: 20 },
        transition: { duration: 0.25, ease: "easeOut" },
        className: "mb-3 w-[340px] sm:w-[380px] h-[520px] rounded-2xl overflow-hidden flex flex-col bg-background shadow-neon border border-primary/20",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 px-4 py-3 border-b border-border/50 bg-gradient-primary", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-8 w-8 rounded-lg bg-white/20 grid place-items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-4 w-4 text-white" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-white", children: "AgroVerse AI" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-white/80", children: "Hozir online" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: () => setOpen(false),
                className: "p-1.5 rounded-lg hover:bg-white/20 transition-colors",
                "aria-label": "Yopish",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4 text-white" })
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 overflow-y-auto px-4 py-4 space-y-3 bg-background/40", children: [
            messages.map((msg) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: `flex gap-2.5 ${msg.role === "user" ? "flex-row-reverse" : ""}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: `shrink-0 h-7 w-7 rounded-full grid place-items-center ${msg.role === "assistant" ? "bg-gradient-primary" : "bg-muted"}`,
                      children: msg.role === "assistant" ? /* @__PURE__ */ jsxRuntimeExports.jsx(Bot, { className: "h-3.5 w-3.5 text-white" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "h-3.5 w-3.5 text-foreground" })
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: `max-w-[75%] rounded-2xl px-3.5 py-2 text-[13px] leading-relaxed ${msg.role === "assistant" ? "bg-card text-foreground border border-border/60 rounded-tl-sm" : "bg-gradient-primary text-white rounded-tr-sm"}`,
                      children: msg.text
                    }
                  )
                ]
              },
              msg.id
            )),
            typing && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "shrink-0 h-7 w-7 rounded-full bg-gradient-primary grid place-items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Bot, { className: "h-3.5 w-3.5 text-white" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border/60 rounded-2xl rounded-tl-sm px-3.5 py-2 flex items-center gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-primary animate-bounce", style: { animationDelay: "0ms" } }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-primary animate-bounce", style: { animationDelay: "150ms" } }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-primary animate-bounce", style: { animationDelay: "300ms" } })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: bottomRef })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-3 py-3 border-t border-border/50 bg-card/60", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 bg-background rounded-xl border border-border px-3 py-2 focus-within:ring-1 focus-within:ring-primary/50", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                value: input,
                onChange: (e) => setInput(e.target.value),
                onKeyDown: (e) => e.key === "Enter" && send(),
                placeholder: "Xabar yozing...",
                className: "flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: send,
                disabled: !input.trim(),
                className: "p-1.5 rounded-lg bg-gradient-primary text-white disabled:opacity-40 disabled:cursor-not-allowed hover:opacity-90 transition-opacity",
                "aria-label": "Yuborish",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "h-3.5 w-3.5" })
              }
            )
          ] }) })
        ]
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.button,
      {
        onClick: () => setOpen((v) => !v),
        whileHover: { scale: 1.08 },
        whileTap: { scale: 0.95 },
        className: `relative h-14 w-14 rounded-full grid place-items-center shadow-neon transition-all ${open ? "bg-foreground text-background rotate-0" : "bg-gradient-primary text-white"}`,
        "aria-label": open ? "AI chatni yopish" : "AI chatni ochish",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: open ? /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { rotate: -90, opacity: 0 },
              animate: { rotate: 0, opacity: 1 },
              exit: { rotate: 90, opacity: 0 },
              transition: { duration: 0.2 },
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-6 w-6" })
            },
            "close"
          ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { rotate: 90, opacity: 0 },
              animate: { rotate: 0, opacity: 1 },
              exit: { rotate: -90, opacity: 0 },
              transition: { duration: 0.2 },
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Bot, { className: "h-7 w-7" })
            },
            "open"
          ) }),
          !open && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -top-1 -right-1 h-3.5 w-3.5 rounded-full bg-accent border-2 border-background animate-pulse" })
        ]
      }
    )
  ] });
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Go home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router = useRouter();
  reactExports.useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end. You can try refreshing or head back home." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            router.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const Route$b = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "AgroVerse" },
      { name: "description", content: "AgroVerse" },
      { name: "author", content: "Lovable" },
      { property: "og:title", content: "AgroVerse" },
      { property: "og:description", content: "AgroVerse" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@Lovable" },
      { name: "twitter:title", content: "AgroVerse" },
      { name: "twitter:description", content: "AgroVerse" },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/eaabe228-09de-4ff5-bdc3-f78ffc52344a/id-preview-a81a817f--ef225b5f-bd62-4ed1-818d-86319ceda509.lovable.app-1781179912192.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/eaabe228-09de-4ff5-bdc3-f78ffc52344a/id-preview-a81a817f--ef225b5f-bd62-4ed1-818d-86319ceda509.lovable.app-1781179912192.png" }
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss
      },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", suppressHydrationWarning: true, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("head", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "script",
        {
          dangerouslySetInnerHTML: {
            __html: "try{var t=localStorage.getItem('theme');if(t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme: dark)').matches))document.documentElement.classList.add('dark');}catch(e){}"
          }
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$b.useRouteContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background text-foreground overflow-x-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AIChatWidget, {})
  ] }) });
}
const $$splitComponentImporter$a = () => import("./testimonials-n1QNSC_f.mjs");
const Route$a = createFileRoute("/testimonials")({
  head: () => ({
    meta: [{
      title: "Foydalanuvchilar fikri — AgroVerse"
    }, {
      name: "description",
      content: "Fermerlar, xaridorlar va hamkorlarning AgroVerse haqidagi taassurotlari."
    }, {
      property: "og:title",
      content: "Foydalanuvchilar fikri — AgroVerse"
    }, {
      property: "og:description",
      content: "Fermerlar, xaridorlar va hamkorlarning AgroVerse haqidagi taassurotlari."
    }],
    links: [{
      rel: "canonical",
      href: "/testimonials"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$a, "component")
});
const $$splitComponentImporter$9 = () => import("./solution-BNro1fJE.mjs");
const Route$9 = createFileRoute("/solution")({
  head: () => ({
    meta: [{
      title: "Yechim — AgroVerse"
    }, {
      name: "description",
      content: "AgroVerse — fermerdan iste'molchiga yagona AI boshqaruvidagi oqim."
    }, {
      property: "og:title",
      content: "Yechim — AgroVerse"
    }, {
      property: "og:description",
      content: "AgroVerse — fermerdan iste'molchiga yagona AI boshqaruvidagi oqim."
    }],
    links: [{
      rel: "canonical",
      href: "/solution"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
const $$splitComponentImporter$8 = () => import("./roadmap-CVF3LbFm.mjs");
const Route$8 = createFileRoute("/roadmap")({
  head: () => ({
    meta: [{
      title: "Roadmap — AgroVerse"
    }, {
      name: "description",
      content: "AgroVerse mahsulot rivojlanish bosqichlari va kelajak rejalari."
    }, {
      property: "og:title",
      content: "Roadmap — AgroVerse"
    }, {
      property: "og:description",
      content: "AgroVerse mahsulot rivojlanish bosqichlari va kelajak rejalari."
    }],
    links: [{
      rel: "canonical",
      href: "/roadmap"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
const $$splitComponentImporter$7 = () => import("./problem-DMutwOJc.mjs");
const Route$7 = createFileRoute("/problem")({
  head: () => ({
    meta: [{
      title: "Muammo — AgroVerse"
    }, {
      name: "description",
      content: "Agro sanoatdagi to'rtta asosiy uzilish — fermer, xaridor, logistika va ma'lumotlar."
    }, {
      property: "og:title",
      content: "Muammo — AgroVerse"
    }, {
      property: "og:description",
      content: "Agro sanoatdagi to'rtta asosiy uzilish — fermer, xaridor, logistika va ma'lumotlar."
    }],
    links: [{
      rel: "canonical",
      href: "/problem"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
const $$splitComponentImporter$6 = () => import("./preview-2-owecqT.mjs");
const Route$6 = createFileRoute("/preview")({
  head: () => ({
    meta: [{
      title: "Platforma Preview — AgroVerse"
    }, {
      name: "description",
      content: "AgroVerse interfeysi: marketplace, AI va analytics ko'rinishi."
    }, {
      property: "og:title",
      content: "Platforma Preview — AgroVerse"
    }, {
      property: "og:description",
      content: "AgroVerse interfeysi: marketplace, AI va analytics ko'rinishi."
    }],
    links: [{
      rel: "canonical",
      href: "/preview"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const $$splitComponentImporter$5 = () => import("./modules-DaClOFGc.mjs");
const Route$5 = createFileRoute("/modules")({
  head: () => ({
    meta: [{
      title: "Modullar — AgroVerse"
    }, {
      name: "description",
      content: "Marketplace, AI Agronom, Logistika, Analytics va boshqa modullar."
    }, {
      property: "og:title",
      content: "Modullar — AgroVerse"
    }, {
      property: "og:description",
      content: "Marketplace, AI Agronom, Logistika, Analytics va boshqa modullar."
    }],
    links: [{
      rel: "canonical",
      href: "/modules"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./metrics-_LeV1V4v.mjs");
const Route$4 = createFileRoute("/metrics")({
  head: () => ({
    meta: [{
      title: "Ko'rsatkichlar — AgroVerse"
    }, {
      name: "description",
      content: "Platformaning asosiy biznes va o'sish ko'rsatkichlari."
    }, {
      property: "og:title",
      content: "Ko'rsatkichlar — AgroVerse"
    }, {
      property: "og:description",
      content: "Platformaning asosiy biznes va o'sish ko'rsatkichlari."
    }],
    links: [{
      rel: "canonical",
      href: "/metrics"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./investor-Cbp6GgM-.mjs");
const Route$3 = createFileRoute("/investor")({
  head: () => ({
    meta: [{
      title: "Investorlar uchun — AgroVerse"
    }, {
      name: "description",
      content: "Bozor hajmi, o'sish va investitsion imkoniyatlar."
    }, {
      property: "og:title",
      content: "Investorlar uchun — AgroVerse"
    }, {
      property: "og:description",
      content: "Bozor hajmi, o'sish va investitsion imkoniyatlar."
    }],
    links: [{
      rel: "canonical",
      href: "/investor"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./contact-DYH2PTOr.mjs");
const Route$2 = createFileRoute("/contact")({
  head: () => ({
    meta: [{
      title: "Boshlash — AgroVerse"
    }, {
      name: "description",
      content: "AgroVerse bilan bog'laning va platformani sinab ko'ring."
    }, {
      property: "og:title",
      content: "Boshlash — AgroVerse"
    }, {
      property: "og:description",
      content: "AgroVerse bilan bog'laning va platformani sinab ko'ring."
    }],
    links: [{
      rel: "canonical",
      href: "/contact"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./ai-CPm8yyUc.mjs");
const Route$1 = createFileRoute("/ai")({
  head: () => ({
    meta: [{
      title: "AI Yadrolari — AgroVerse"
    }, {
      name: "description",
      content: "To'rtta ixtisoslashgan AI yadrosi — har bir jarayon uchun aql."
    }, {
      property: "og:title",
      content: "AI Yadrolari — AgroVerse"
    }, {
      property: "og:description",
      content: "To'rtta ixtisoslashgan AI yadrosi — har bir jarayon uchun aql."
    }],
    links: [{
      rel: "canonical",
      href: "/ai"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./index-CQHF1yuL.mjs");
const Route = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "AgroVerse — AI bilan boshqariladigan agro ekotizim"
    }, {
      name: "description",
      content: "Fermer, xaridor va logistika xizmatlarini yagona aqlli platformada birlashtiruvchi AI-powered agro ekotizim."
    }, {
      property: "og:title",
      content: "AgroVerse — AI Agro Ecosystem"
    }, {
      property: "og:description",
      content: "Premium AI platforma: marketplace, logistika, agronom va analytics — bir joyda."
    }, {
      property: "og:type",
      content: "website"
    }, {
      property: "og:url",
      content: "/"
    }],
    links: [{
      rel: "canonical",
      href: "/"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const TestimonialsRoute = Route$a.update({
  id: "/testimonials",
  path: "/testimonials",
  getParentRoute: () => Route$b
});
const SolutionRoute = Route$9.update({
  id: "/solution",
  path: "/solution",
  getParentRoute: () => Route$b
});
const RoadmapRoute = Route$8.update({
  id: "/roadmap",
  path: "/roadmap",
  getParentRoute: () => Route$b
});
const ProblemRoute = Route$7.update({
  id: "/problem",
  path: "/problem",
  getParentRoute: () => Route$b
});
const PreviewRoute = Route$6.update({
  id: "/preview",
  path: "/preview",
  getParentRoute: () => Route$b
});
const ModulesRoute = Route$5.update({
  id: "/modules",
  path: "/modules",
  getParentRoute: () => Route$b
});
const MetricsRoute = Route$4.update({
  id: "/metrics",
  path: "/metrics",
  getParentRoute: () => Route$b
});
const InvestorRoute = Route$3.update({
  id: "/investor",
  path: "/investor",
  getParentRoute: () => Route$b
});
const ContactRoute = Route$2.update({
  id: "/contact",
  path: "/contact",
  getParentRoute: () => Route$b
});
const AiRoute = Route$1.update({
  id: "/ai",
  path: "/ai",
  getParentRoute: () => Route$b
});
const IndexRoute = Route.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$b
});
const rootRouteChildren = {
  IndexRoute,
  AiRoute,
  ContactRoute,
  InvestorRoute,
  MetricsRoute,
  ModulesRoute,
  PreviewRoute,
  ProblemRoute,
  RoadmapRoute,
  SolutionRoute,
  TestimonialsRoute
};
const routeTree = Route$b._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router;
};
export {
  getRouter
};
