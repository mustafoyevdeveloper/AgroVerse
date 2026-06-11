import { motion } from "framer-motion";
import { Tractor, ShieldQuestion, Route, Database } from "lucide-react";
import { SectionTitle } from "../Reveal";

const items = [
  { icon: Tractor, title: "Fermer", desc: "Mahsulotni qimmatga sota olmaydi." },
  { icon: ShieldQuestion, title: "Xaridor", desc: "Ishonchli yetkazib beruvchi topa olmaydi." },
  { icon: Route, title: "Logistika", desc: "Bo'sh qatnovlar va samarasiz marshrutlar." },
  { icon: Database, title: "Bozor", desc: "Ma'lumotlar tarqoq, qaror qabul qilish qiyin." },
];

export function Problem() {
  return (
    <section id="problem" className="py-24 sm:py-32 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionTitle
          eyebrow="Muammo"
          title={<>Nega <span className="text-gradient">AgroVerse</span> kerak?</>}
          subtitle="Agro sanoatdagi to'rtta asosiy uzilish — bir vaqtning o'zida hal etilishi kerak."
        />

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="group relative rounded-3xl p-6 bg-card border border-border shadow-card-soft hover:shadow-glow transition-all overflow-hidden"
            >
              <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="h-12 w-12 rounded-2xl bg-primary/10 grid place-items-center mb-5 group-hover:bg-gradient-primary transition-all">
                <it.icon className="h-6 w-6 text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-bold text-lg">{it.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}