import { motion } from "framer-motion";
import { Tractor, Brain, Store, ShoppingCart, Truck, PackageCheck, ChevronDown } from "lucide-react";
import { SectionTitle } from "../Reveal";

const flow = [
  { icon: Tractor, label: "Fermer" },
  { icon: Brain, label: "AI Agronom" },
  { icon: Store, label: "Marketplace" },
  { icon: ShoppingCart, label: "Xaridor" },
  { icon: Truck, label: "Logistika" },
  { icon: PackageCheck, label: "Yetkazib berish" },
];

export function Solution() {
  return (
    <section id="solution" className="py-24 sm:py-32 bg-muted relative overflow-hidden">
      <div className="absolute inset-0 -z-0 opacity-60">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[500px] w-[700px] rounded-full bg-primary/10 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <SectionTitle
          eyebrow="Yechim"
          title={<>Yagona platformada <span className="text-gradient">barcha jarayon</span></>}
          subtitle="Fermerdan iste'molchiga — bitta uzluksiz, AI tomonidan boshqariladigan oqim."
        />

        <div className="mt-16 max-w-md mx-auto flex flex-col gap-4">
          {flow.map((step, i) => (
            <motion.div
              key={step.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex flex-col items-center"
            >
              <div className="w-full flex items-center gap-4 glass rounded-2xl p-4 shadow-card-soft hover:shadow-glow transition-shadow">
                <div className="h-12 w-12 rounded-xl bg-gradient-primary grid place-items-center text-white shadow-glow">
                  <step.icon className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <div className="text-xs text-muted-foreground font-medium">Bosqich {i + 1}</div>
                  <div className="font-bold text-lg">{step.label}</div>
                </div>
                <div className="text-xs font-mono text-primary">0{i + 1}</div>
              </div>
              {i < flow.length - 1 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 + 0.2 }}
                >
                  <ChevronDown className="h-5 w-5 text-primary/60 my-1" />
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
