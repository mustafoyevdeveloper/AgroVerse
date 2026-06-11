import { createFileRoute } from "@tanstack/react-router";
import { AIPower } from "@/components/landing/sections/AIPower";

export const Route = createFileRoute("/ai")({
  head: () => ({
    meta: [
      { title: "AI Yadrolari — AgroVerse" },
      { name: "description", content: "To'rtta ixtisoslashgan AI yadrosi — har bir jarayon uchun aql." },
      { property: "og:title", content: "AI Yadrolari — AgroVerse" },
      { property: "og:description", content: "To'rtta ixtisoslashgan AI yadrosi — har bir jarayon uchun aql." },
    ],
    links: [{ rel: "canonical", href: "/ai" }],
  }),
  component: Page,
});

function Page() {
  return (
    <div className="pt-24">
      <AIPower />
    </div>
  );
}
