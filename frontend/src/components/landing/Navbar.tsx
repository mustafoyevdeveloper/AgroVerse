import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Leaf, Menu, X, Home } from "lucide-react";
import { Link, useLocation } from "@tanstack/react-router";
import { ThemeToggle } from "@/components/theme/ThemeToggle";

const links = [
  { to: "/problem", label: "Muammo" },
  { to: "/solution", label: "Yechim" },
  { to: "/ai", label: "AI" },
  { to: "/modules", label: "Modullar" },
  { to: "/preview", label: "Preview" },
  { to: "/roadmap", label: "Roadmap" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div
          className={`flex items-center justify-between rounded-2xl px-4 sm:px-6 transition-all duration-300 ${
            scrolled
              ? "py-2.5 bg-background shadow-card-soft border border-border/60"
              : "py-3 bg-transparent"
          }`}
        >
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="h-9 w-9 rounded-xl bg-gradient-primary grid place-items-center shadow-glow group-hover:shadow-neon transition-shadow">
              <Leaf className="h-5 w-5 text-white" strokeWidth={2.5} />
            </div>
            <span className="font-bold tracking-tight text-lg text-foreground">
              AgroVerse
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {links.map((l) => {
              const isActive = pathname === l.to;
              return (
                <Link
                  key={l.to}
                  to={l.to}
                  className={`relative text-sm font-medium px-3.5 py-2 rounded-xl transition-all duration-200 ${
                    isActive
                      ? "text-primary"
                      : "text-foreground/60 hover:text-foreground hover:bg-muted/50"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-primary/10 rounded-xl border border-primary/20"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{l.label}</span>
                </Link>
              );
            })}
          </nav>

          <div className="hidden md:flex items-center gap-2.5">
            <ThemeToggle />
            <Link
              to="/contact"
              className="text-sm font-semibold px-4 py-2 rounded-xl text-foreground/70 hover:text-foreground hover:bg-muted/60 transition-all"
            >
              Demo
            </Link>
            <Link
              to="/contact"
              className="text-sm font-semibold px-4 py-2 rounded-xl bg-gradient-primary text-white shadow-glow hover:shadow-neon hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              Boshlash
            </Link>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle compact />
            <button
              className="p-2 rounded-xl hover:bg-muted transition-colors"
              aria-label="Menyu"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.97 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden mt-2 bg-background rounded-2xl p-4 flex flex-col gap-1 border border-border/60 shadow-card-soft"
            >
              <Link
                to="/"
                onClick={() => setOpen(false)}
                className={`text-sm font-medium px-3 py-2.5 rounded-xl transition-colors ${
                  pathname === "/" ? "bg-primary/10 text-primary" : "text-foreground/80 hover:bg-muted/50"
                }`}
              >
                <span className="flex items-center gap-2">
                  <Home className="h-4 w-4" /> Bosh sahifa
                </span>
              </Link>
              {links.map((l) => {
                const isActive = pathname === l.to;
                return (
                  <Link
                    key={l.to}
                    to={l.to}
                    onClick={() => setOpen(false)}
                    className={`text-sm font-medium px-3 py-2.5 rounded-xl transition-colors ${
                      isActive ? "bg-primary/10 text-primary" : "text-foreground/80 hover:bg-muted/50"
                    }`}
                  >
                    {l.label}
                  </Link>
                );
              })}
              <div className="mt-2 pt-2 border-t border-border/50 flex flex-col gap-2">
                <Link
                  to="/contact"
                  onClick={() => setOpen(false)}
                  className="text-center text-sm font-semibold px-4 py-2.5 rounded-xl bg-gradient-primary text-white shadow-glow"
                >
                  Boshlash
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
