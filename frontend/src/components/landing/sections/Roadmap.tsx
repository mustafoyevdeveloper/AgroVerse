import { motion } from "framer-motion";
import { CheckCircle2, Circle, Rocket } from "lucide-react";
import { SectionTitle } from "../Reveal";

const items = [
  { phase: "Q1", title: "MVP", desc: "Asosiy platforma va arxitektura.", done: true },
  { phase: "Q2", title: "Marketplace", desc: "Fermer va xaridor bozori.", done: true },
  { phase: "Q3", title: "Logistics", desc: "Marshrut va transport almashinuvi.", done: true },
  { phase: "Q4", title: "AI Agronom", desc: "Aqlli agronomik tavsiyalar.", done: false },
  { phase: "Q1+", title: "AI Market", desc: "Talab va narx prognozi.", done: false },
  { phase: "Q2+", title: "Mobile App", desc: "iOS va Android ilovalari.", done: false },
  { phase: "Q3+", title: "Expansion", desc: "Markaziy Osiyo bozorlariga chiqish.", done: false },
];

export function Roadmap() {
  return (
    <section id="roadmap" className="py-24 sm:py-32 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionTitle
          eyebrow="Roadmap"
          title={<>Yo'l xaritasi — <span className="text-gradient">kelajakka</span></>}
          subtitle="Bizning rivojlanish bosqichlarimiz."
        />
        <div className="mt-16 max-w-3xl mx-auto relative">
          <div className="absolute left-5 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/40 to-transparent" />
          {items.map((it, i) => (
            <motion.div key={it.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.5, delay: i * 0.06 }} className={`relative flex sm:items-center gap-6 mb-8 ${i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"}`}>
              <div className="absolute left-5 sm:left-1/2 -translate-x-1/2 h-4 w-4 rounded-full bg-gradient-primary shadow-glow ring-4 ring-background" />
              <div className="hidden sm:block flex-1" />
              <div className="ml-14 sm:ml-0 flex-1 glass rounded-2xl p-5 shadow-card-soft hover:shadow-glow transition-shadow">
                <div className="flex items-center gap-2 mb-1">
                  {it.done ? <CheckCircle2 className="h-4 w-4 text-primary" /> : <Circle className="h-4 w-4 text-muted-foreground" />}
                  <span className="text-xs font-mono font-semibold text-primary">{it.phase}</span>
                </div>
                <div className="font-bold text-lg">{it.title}</div>
                <div className="text-sm text-muted-foreground mt-1">{it.desc}</div>
              </div>
            </motion.div>
          ))}
          <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative flex justify-center mt-4">
            <div className="absolute left-5 sm:left-1/2 -translate-x-1/2 h-10 w-10 rounded-full bg-gradient-primary grid place-items-center shadow-glow ring-4 ring-background">
              <Rocket className="h-5 w-5 text-white" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
