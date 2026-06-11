import { motion } from "framer-motion";
import { Store, Truck, Brain, LineChart, BarChart3, Smartphone } from "lucide-react";
import { SectionTitle } from "../Reveal";

const mods = [
  { icon: Store, title: "Marketplace", desc: "Mahsulot oldi-sotdi uchun shaffof bozor." },
  { icon: Truck, title: "Logistics Exchange", desc: "Bo'sh qatnovlarsiz, smart marshrutlar." },
  { icon: Brain, title: "AI Agronom", desc: "Maydonni boshqaruvchi raqamli mutaxassis." },
  { icon: LineChart, title: "Market Intelligence", desc: "Real vaqtli narx va talab signallari." },
  { icon: BarChart3, title: "Analytics", desc: "Biznes uchun chuqur insights va KPI." },
  { icon: Smartphone, title: "Mobile App", desc: "iOS va Android — hamma joyda nazorat." },
];

export function Modules() {
  return (
    <section id="modules" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionTitle
          eyebrow="Platforma"
          title={<>Modul-modul <span className="text-gradient">to'liq ekotizim</span></>}
          subtitle="Mustaqil ishlaydigan, bir-biri bilan chuqur integratsiyalashgan modullar."
        />
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {mods.map((m, i) => (
            <motion.div
              key={m.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: (i % 3) * 0.08 }}
              whileHover={{ y: -4 }}
              className="group rounded-3xl p-7 glass shadow-card-soft hover:shadow-glow transition-all relative overflow-hidden"
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-primary opacity-0 group-hover:opacity-20 blur-2xl transition-opacity" />
              <div className="h-14 w-14 rounded-2xl bg-gradient-primary grid place-items-center shadow-glow mb-5">
                <m.icon className="h-7 w-7 text-white" />
              </div>
              <h3 className="font-bold text-xl">{m.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{m.desc}</p>
              <div className="mt-5 text-sm font-semibold text-primary flex items-center gap-1.5 group-hover:gap-2.5 transition-all">
                Batafsil →
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
