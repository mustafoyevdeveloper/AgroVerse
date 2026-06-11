import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Store, Brain, BarChart3, Truck } from "lucide-react";
import { SectionTitle } from "../Reveal";

const tabs = [
  { id: "marketplace", label: "Marketplace", icon: Store, panel: { title: "Mahsulot oqimi va buyurtmalar", rows: ["Pomidor — 1.2t", "Bug'doy — 8.4t", "Olma — 3.1t", "Sabzi — 950kg"], tone: "from-primary/20 to-secondary/10" } },
  { id: "ai", label: "AI", icon: Brain, panel: { title: "AI Agronom tavsiyalari", rows: ["Sug'orish: 06:00", "O'g'it: NPK 12-12-17", "Kasallik xavfi: past", "Hosil prognozi: +18%"], tone: "from-secondary/20 to-accent/10" } },
  { id: "analytics", label: "Analytics", icon: BarChart3, panel: { title: "Biznes ko'rsatkichlari", rows: ["GMV: $1.24M", "Active users: 12,840", "Orders: 4,210", "Conversion: 7.3%"], tone: "from-accent/20 to-primary/10" } },
  { id: "logistics", label: "Logistics", icon: Truck, panel: { title: "Faol marshrutlar", rows: ["Toshkent → Samarqand", "Farg'ona → Andijon", "Buxoro → Navoiy", "Xorazm → Toshkent"], tone: "from-primary/20 to-accent/10" } },
];

export function PreviewTabs() {
  const [active, setActive] = useState(tabs[0].id);
  const current = tabs.find((t) => t.id === active)!;

  return (
    <section id="preview" className="py-24 sm:py-32 bg-muted">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionTitle
          eyebrow="Platform Preview"
          title={<>Bitta dashboard — <span className="text-gradient">cheksiz nazorat</span></>}
          subtitle="Har bir modul — bir clickda qo'lingizda."
        />

        <div className="mt-12 flex flex-wrap justify-center gap-2">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setActive(t.id)}
              className={`relative px-5 py-2.5 rounded-xl text-sm font-semibold flex items-center gap-2 transition-colors ${active === t.id ? "text-white" : "text-foreground/70 hover:text-foreground"}`}
            >
              {active === t.id && (
                <motion.span layoutId="tab-bg" className="absolute inset-0 rounded-xl bg-gradient-primary shadow-glow" transition={{ type: "spring", bounce: 0.2, duration: 0.6 }} />
              )}
              <t.icon className="relative h-4 w-4" />
              <span className="relative">{t.label}</span>
            </button>
          ))}
        </div>

        <div className="mt-10 mx-auto max-w-5xl">
          <div className="rounded-3xl glass p-4 shadow-neon">
            <div className="flex items-center gap-1.5 mb-3 px-2">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400/60" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/60" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-400/60" />
            </div>
            <div className="rounded-2xl bg-card p-6 sm:p-8 min-h-[360px] relative overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div key={current.id} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }} transition={{ duration: 0.35 }} className="relative">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <div className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">{current.label}</div>
                      <div className="text-2xl font-bold mt-1">{current.panel.title}</div>
                    </div>
                    <div className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">Real-time</div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {current.panel.rows.map((r, i) => (
                      <motion.div key={r} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 + i * 0.05 }} className={`rounded-xl p-4 bg-gradient-to-br ${current.panel.tone} border border-border/40`}>
                        <div className="text-xs text-muted-foreground">Item {i + 1}</div>
                        <div className="font-semibold mt-1">{r}</div>
                      </motion.div>
                    ))}
                  </div>
                  <div className="mt-6 rounded-xl bg-foreground/[0.03] p-4">
                    <div className="flex items-end gap-1.5 h-24">
                      {[40,65,50,80,55,90,70,95,75,100,85,110,95,120,100,130].map((h, i) => (
                        <motion.div key={i} initial={{ height: 0 }} animate={{ height: h }} transition={{ delay: i * 0.03, duration: 0.5 }} className="flex-1 rounded-t bg-gradient-to-t from-primary to-accent" />
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
