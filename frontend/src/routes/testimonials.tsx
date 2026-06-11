import { createFileRoute } from "@tanstack/react-router";
import { Testimonials } from "@/components/landing/sections/Testimonials";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Foydalanuvchilar fikri — AgroVerse" },
      { name: "description", content: "Fermerlar, xaridorlar va hamkorlarning AgroVerse haqidagi taassurotlari." },
      { property: "og:title", content: "Foydalanuvchilar fikri — AgroVerse" },
      { property: "og:description", content: "Fermerlar, xaridorlar va hamkorlarning AgroVerse haqidagi taassurotlari." },
    ],
    links: [{ rel: "canonical", href: "/testimonials" }],
  }),
  component: Page,
});

function Page() {
  return (
    <div className="pt-24">
      <Testimonials />
    </div>
  );
}
