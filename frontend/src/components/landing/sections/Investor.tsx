import { motion } from "framer-motion";
import { TrendingUp, Globe2, Users, DollarSign } from "lucide-react";
import { SectionTitle } from "../Reveal";

const metrics = [
  { icon: TrendingUp, value: "$24B", label: "TAM — Markaziy Osiyo agro bozori" },
  { icon: Globe2, value: "5", label: "Maqsadli mamlakatlar" },
  { icon: Users, value: "12M+", label: "Potensial foydalanuvchilar" },
  { icon: DollarSign, value: "78%", label: "Yillik o'sish prognozi" },
];

export function Investor() {
  return (
    <section className="py-24 sm:py-32 bg-muted relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionTitle
          eyebrow="Investorlar uchun"
          title={<><span className="text-gradient">Central Asia's</span> Future Agro Ecosystem</>}
          subtitle="Mintaqaning eng katta agrotech imkoniyati — bitta platformada."
        />
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {metrics.map((m, i) => (
            <motion.div key={m.label} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }} className="rounded-3xl p-6 bg-card border border-border shadow-card-soft hover:shadow-glow transition-shadow">
              <m.icon className="h-6 w-6 text-primary" />
              <div className="mt-4 text-4xl font-extrabold tracking-tight text-gradient">{m.value}</div>
              <div className="mt-2 text-sm text-muted-foreground">{m.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
