import { createFileRoute } from "@tanstack/react-router";
import { Solution } from "@/components/landing/sections/Solution";

export const Route = createFileRoute("/solution")({
  head: () => ({
    meta: [
      { title: "Yechim — AgroVerse" },
      { name: "description", content: "AgroVerse — fermerdan iste'molchiga yagona AI boshqaruvidagi oqim." },
      { property: "og:title", content: "Yechim — AgroVerse" },
      { property: "og:description", content: "AgroVerse — fermerdan iste'molchiga yagona AI boshqaruvidagi oqim." },
    ],
    links: [{ rel: "canonical", href: "/solution" }],
  }),
  component: Page,
});

function Page() {
  return (
    <div className="pt-24">
      <Solution />
    </div>
  );
}
