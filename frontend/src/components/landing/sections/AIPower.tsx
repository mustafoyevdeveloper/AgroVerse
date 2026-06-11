import { motion } from "framer-motion";
import { Brain, TrendingUp, Route, MessageSquareText } from "lucide-react";
import { SectionTitle } from "../Reveal";

const cards = [
  { icon: Brain, title: "AI Agronom", features: ["Sug'orish optimizatsiyasi", "O'g'it tavsiyalari", "Kasallik aniqlash"] },
  { icon: TrendingUp, title: "AI Market", features: ["Talab tahlili", "Narx prognozi", "Bozor trendi"] },
  { icon: Route, title: "AI Logistics", features: ["Marshrut optimallashtirish", "Transport tanlash", "Real-time monitoring"] },
  { icon: MessageSquareText, title: "AI Assistant", features: ["24/7 savol-javob", "Hujjat tahlili", "Mahalliy tillarda"] },
];

export function AIPower() {
  return (
    <section id="ai" className="py-24 sm:py-32 relative overflow-hidden bg-[oklch(0.205_0.04_257)] text-white">
      <div aria-hidden className="absolute inset-0 opacity-40">
        <div className="absolute -top-40 left-1/4 h-[500px] w-[500px] rounded-full bg-primary/40 blur-3xl" />
        <div className="absolute -bottom-40 right-1/4 h-[500px] w-[500px] rounded-full bg-accent/30 blur-3xl" />
      </div>
      <div aria-hidden className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage: "radial-gradient(ellipse at center, black, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <SectionTitle
          eyebrow="AI Power"
          title={<span className="text-white">AgroVerse <span className="text-gradient">AI</span></span>}
          subtitle={<span className="text-white/70">To'rtta ixtisoslashgan AI yadrosi — har bir jarayon uchun aql.</span>}
        />

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="group relative rounded-3xl p-6 bg-white/[0.04] border border-white/10 backdrop-blur-xl hover:border-primary/60 hover:shadow-neon transition-all"
            >
              <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-primary/40 via-transparent to-accent/40 opacity-0 group-hover:opacity-100 transition-opacity blur" />
              <div className="relative">
                <div className="h-12 w-12 rounded-2xl bg-gradient-primary grid place-items-center shadow-glow">
                  <c.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="mt-5 font-bold text-xl">{c.title}</h3>
                <ul className="mt-4 space-y-2">
                  {c.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-white/70">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
