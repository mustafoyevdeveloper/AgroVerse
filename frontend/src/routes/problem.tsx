import { createFileRoute } from "@tanstack/react-router";
import { Problem } from "@/components/landing/sections/Problem";

export const Route = createFileRoute("/problem")({
  head: () => ({
    meta: [
      { title: "Muammo — AgroVerse" },
      { name: "description", content: "Agro sanoatdagi to'rtta asosiy uzilish — fermer, xaridor, logistika va ma'lumotlar." },
      { property: "og:title", content: "Muammo — AgroVerse" },
      { property: "og:description", content: "Agro sanoatdagi to'rtta asosiy uzilish — fermer, xaridor, logistika va ma'lumotlar." },
    ],
    links: [{ rel: "canonical", href: "/problem" }],
  }),
  component: Page,
});

function Page() {
  return (
    <div className="pt-24">
      <Problem />
    </div>
  );
}
