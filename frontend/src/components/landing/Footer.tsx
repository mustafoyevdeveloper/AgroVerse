import { Leaf, Twitter, Linkedin, Github, Instagram } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border bg-muted">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <div className="h-9 w-9 rounded-xl bg-gradient-primary grid place-items-center shadow-glow">
                <Leaf className="h-5 w-5 text-white" />
              </div>
              <span className="font-bold text-lg">AgroVerse</span>
            </div>
            <p className="mt-3 text-sm text-muted-foreground max-w-sm">
              AI bilan boshqariladigan agro ekotizim — fermer, xaridor va logistikani birlashtiradi.
            </p>
          </div>
          <div>
            <div className="text-sm font-semibold mb-3">Platforma</div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/modules" className="hover:text-foreground">Modullar</Link></li>
              <li><Link to="/ai" className="hover:text-foreground">AI</Link></li>
              <li><Link to="/preview" className="hover:text-foreground">Preview</Link></li>
              <li><Link to="/roadmap" className="hover:text-foreground">Roadmap</Link></li>
            </ul>
          </div>
          <div>
            <div className="text-sm font-semibold mb-3">Kompaniya</div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/contact" className="hover:text-foreground">Bog'lanish</Link></li>
              <li><Link to="/investor" className="hover:text-foreground">Investorlar</Link></li>
              <li><Link to="/testimonials" className="hover:text-foreground">Sharhlar</Link></li>
              <li><Link to="/metrics" className="hover:text-foreground">Ko'rsatkichlar</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-sm text-muted-foreground">© {year} AgroVerse. Barcha huquqlar himoyalangan.</div>
          <div className="flex gap-3 text-muted-foreground">
            <a href="#" aria-label="Twitter" className="hover:text-foreground"><Twitter className="h-4 w-4" /></a>
            <a href="#" aria-label="LinkedIn" className="hover:text-foreground"><Linkedin className="h-4 w-4" /></a>
            <a href="#" aria-label="GitHub" className="hover:text-foreground"><Github className="h-4 w-4" /></a>
            <a href="#" aria-label="Instagram" className="hover:text-foreground"><Instagram className="h-4 w-4" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
