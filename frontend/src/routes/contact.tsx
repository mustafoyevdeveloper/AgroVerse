import { createFileRoute } from "@tanstack/react-router";
import { CTA } from "@/components/landing/sections/CTA";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Boshlash — AgroVerse" },
      { name: "description", content: "AgroVerse bilan bog'laning va platformani sinab ko'ring." },
      { property: "og:title", content: "Boshlash — AgroVerse" },
      { property: "og:description", content: "AgroVerse bilan bog'laning va platformani sinab ko'ring." },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Page,
});

function Page() {
  return (
    <div className="pt-24">
      <CTA />
    </div>
  );
}
