import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";

export function CTA() {
  return (
    <section id="cta" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="relative rounded-[2.5rem] overflow-hidden p-10 sm:p-16 text-center text-white bg-[oklch(0.205_0.04_257)]">
          <div aria-hidden className="absolute inset-0">
            <div className="absolute -top-32 -left-20 h-[400px] w-[400px] rounded-full bg-primary/40 blur-3xl" />
            <div className="absolute -bottom-32 -right-20 h-[400px] w-[400px] rounded-full bg-accent/40 blur-3xl" />
            <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)", backgroundSize: "40px 40px", maskImage: "radial-gradient(ellipse at center, black, transparent 70%)" }} />
          </div>
          <div className="relative max-w-3xl mx-auto">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
              AgroVerse bilan agro sanoatning <span className="text-gradient">kelajagini</span> quring
            </h2>
            <p className="mt-5 text-lg text-white/70 max-w-xl mx-auto">Bugun boshlang — bir necha daqiqada platformaga ulaning va o'sishni boshlang.</p>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <a href="#" className="group inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-gradient-primary text-white font-semibold shadow-glow hover:shadow-neon transition-all">
                Boshlash<ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#" className="inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-white/10 backdrop-blur border border-white/20 text-white font-semibold hover:bg-white/15 transition-colors">
                <Calendar className="h-4 w-4" />Demo so'rash
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
