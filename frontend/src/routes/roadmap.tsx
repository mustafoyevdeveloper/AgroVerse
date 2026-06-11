import { createFileRoute } from "@tanstack/react-router";
import { Roadmap } from "@/components/landing/sections/Roadmap";

export const Route = createFileRoute("/roadmap")({
  head: () => ({
    meta: [
      { title: "Roadmap — AgroVerse" },
      { name: "description", content: "AgroVerse mahsulot rivojlanish bosqichlari va kelajak rejalari." },
      { property: "og:title", content: "Roadmap — AgroVerse" },
      { property: "og:description", content: "AgroVerse mahsulot rivojlanish bosqichlari va kelajak rejalari." },
    ],
    links: [{ rel: "canonical", href: "/roadmap" }],
  }),
  component: Page,
});

function Page() {
  return (
    <div className="pt-24">
      <Roadmap />
    </div>
  );
}
