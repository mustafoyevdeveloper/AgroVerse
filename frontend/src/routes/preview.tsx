import { createFileRoute } from "@tanstack/react-router";
import { PreviewTabs } from "@/components/landing/sections/PreviewTabs";

export const Route = createFileRoute("/preview")({
  head: () => ({
    meta: [
      { title: "Platforma Preview — AgroVerse" },
      { name: "description", content: "AgroVerse interfeysi: marketplace, AI va analytics ko'rinishi." },
      { property: "og:title", content: "Platforma Preview — AgroVerse" },
      { property: "og:description", content: "AgroVerse interfeysi: marketplace, AI va analytics ko'rinishi." },
    ],
    links: [{ rel: "canonical", href: "/preview" }],
  }),
  component: Page,
});

function Page() {
  return (
    <div className="pt-24">
      <PreviewTabs />
    </div>
  );
}
