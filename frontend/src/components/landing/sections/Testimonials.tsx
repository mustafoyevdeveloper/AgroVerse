import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { SectionTitle } from "../Reveal";

const items = [
  { name: "Akmal Karimov", role: "Fermer xo'jaligi rahbari", initials: "AK", comment: "AgroVerse orqali mahsulotlarimni 25% qimmatroq narxda sotyapman. AI agronom esa hosildorlikni sezilarli oshirdi." },
  { name: "Dilshoda Rahimova", role: "Yirik xaridor, retail tarmoq", initials: "DR", comment: "Ishonchli yetkazib beruvchilarni topish endi bir-ikki minutlik ish. Logistika integratsiyasi ajoyib." },
  { name: "Bobur Yusupov", role: "Logistika kompaniyasi CEO", initials: "BY", comment: "Bo'sh qatnovlar 40% ga kamaydi. AI marshrut optimizatsiyasi haqiqatan ham yutuq." },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  const it = items[i];

  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionTitle eyebrow="Mijozlar" title={<>Mijozlar <span className="text-gradient">nima deyishadi</span></>} />
        <div className="mt-16 max-w-3xl mx-auto">
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div key={it.name} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }} className="rounded-3xl glass p-8 sm:p-12 shadow-card-soft text-center">
                <Quote className="h-10 w-10 text-primary/40 mx-auto mb-4" />
                <p className="text-xl sm:text-2xl leading-relaxed font-medium">"{it.comment}"</p>
                <div className="mt-8 flex items-center justify-center gap-4">
                  <div className="h-14 w-14 rounded-full bg-gradient-primary grid place-items-center text-white font-bold text-lg shadow-glow">{it.initials}</div>
                  <div className="text-left">
                    <div className="font-bold">{it.name}</div>
                    <div className="text-sm text-muted-foreground">{it.role}</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
            <div className="mt-6 flex items-center justify-center gap-4">
              <button onClick={() => setI((i - 1 + items.length) % items.length)} className="h-10 w-10 rounded-full glass grid place-items-center hover:bg-card transition-colors" aria-label="Oldingi"><ChevronLeft className="h-5 w-5" /></button>
              <div className="flex gap-2">
                {items.map((_, k) => (
                  <button key={k} onClick={() => setI(k)} aria-label={`Slide ${k + 1}`} className={`h-2 rounded-full transition-all ${k === i ? "w-8 bg-gradient-primary" : "w-2 bg-border"}`} />
                ))}
              </div>
              <button onClick={() => setI((i + 1) % items.length)} className="h-10 w-10 rounded-full glass grid place-items-center hover:bg-card transition-colors" aria-label="Keyingi"><ChevronRight className="h-5 w-5" /></button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
