import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/landing/sections/Hero";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AgroVerse — AI bilan boshqariladigan agro ekotizim" },
      {
        name: "description",
        content:
          "Fermer, xaridor va logistika xizmatlarini yagona aqlli platformada birlashtiruvchi AI-powered agro ekotizim.",
      },
      { property: "og:title", content: "AgroVerse — AI Agro Ecosystem" },
      {
        property: "og:description",
        content:
          "Premium AI platforma: marketplace, logistika, agronom va analytics — bir joyda.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

function HomePage() {
  return <Hero />;
}
