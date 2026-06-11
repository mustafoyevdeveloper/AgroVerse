import { createFileRoute } from "@tanstack/react-router";
import { Investor } from "@/components/landing/sections/Investor";

export const Route = createFileRoute("/investor")({
  head: () => ({
    meta: [
      { title: "Investorlar uchun — AgroVerse" },
      { name: "description", content: "Bozor hajmi, o'sish va investitsion imkoniyatlar." },
      { property: "og:title", content: "Investorlar uchun — AgroVerse" },
      { property: "og:description", content: "Bozor hajmi, o'sish va investitsion imkoniyatlar." },
    ],
    links: [{ rel: "canonical", href: "/investor" }],
  }),
  component: Page,
});

function Page() {
  return (
    <div className="pt-24">
      <Investor />
    </div>
  );
}
