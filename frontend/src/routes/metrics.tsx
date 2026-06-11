import { createFileRoute } from "@tanstack/react-router";
import { KPI } from "@/components/landing/sections/KPI";

export const Route = createFileRoute("/metrics")({
  head: () => ({
    meta: [
      { title: "Ko'rsatkichlar — AgroVerse" },
      { name: "description", content: "Platformaning asosiy biznes va o'sish ko'rsatkichlari." },
      { property: "og:title", content: "Ko'rsatkichlar — AgroVerse" },
      { property: "og:description", content: "Platformaning asosiy biznes va o'sish ko'rsatkichlari." },
    ],
    links: [{ rel: "canonical", href: "/metrics" }],
  }),
  component: Page,
});

function Page() {
  return (
    <div className="pt-24">
      <KPI />
    </div>
  );
}
