import { createFileRoute } from "@tanstack/react-router";
import { Modules } from "@/components/landing/sections/Modules";

export const Route = createFileRoute("/modules")({
  head: () => ({
    meta: [
      { title: "Modullar — AgroVerse" },
      { name: "description", content: "Marketplace, AI Agronom, Logistika, Analytics va boshqa modullar." },
      { property: "og:title", content: "Modullar — AgroVerse" },
      { property: "og:description", content: "Marketplace, AI Agronom, Logistika, Analytics va boshqa modullar." },
    ],
    links: [{ rel: "canonical", href: "/modules" }],
  }),
  component: Page,
});

function Page() {
  return (
    <div className="pt-24">
      <Modules />
    </div>
  );
}
