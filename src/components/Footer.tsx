import { Leaf, Instagram, Facebook, Youtube } from "lucide-react";
import { useState } from "react";

export function Footer() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  return (
    <footer className="mt-24 border-t border-border/60 bg-sand/60">
      <div className="mx-auto grid w-full max-w-7xl gap-12 px-4 py-16 md:grid-cols-4 md:px-6">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-2xl bg-primary/15 text-primary">
              <Leaf className="h-5 w-5" />
            </span>
            <span className="font-serif text-2xl font-semibold">VerdePet</span>
          </div>
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">
            Produtos naturais e orgânicos para cuidar do seu melhor amigo com tudo que a natureza tem de melhor.
          </p>
          <div className="mt-6 flex gap-2">
            {[Instagram, Facebook, Youtube].map((Icon, i) => (
              <a key={i} href="#" aria-label="Rede social" className="grid h-10 w-10 place-items-center rounded-2xl bg-background text-foreground/70 transition-colors hover:bg-primary hover:text-primary-foreground">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold">Institucional</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><a href="#" className="hover:text-primary">Sobre nós</a></li>
            <li><a href="#" className="hover:text-primary">Sustentabilidade</a></li>
            <li><a href="#" className="hover:text-primary">Trocas e devoluções</a></li>
            <li><a href="#" className="hover:text-primary">Contato</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold">Newsletter</h4>
          <p className="mt-4 text-sm text-muted-foreground">Receba dicas naturais e novidades.</p>
          <form
            onSubmit={(e) => { e.preventDefault(); if (email) { setDone(true); setEmail(""); } }}
            className="mt-3 flex flex-col gap-2"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="seu@email.com"
              className="rounded-2xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary"
            />
            <button type="submit" className="rounded-2xl bg-terracotta px-4 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90">
              {done ? "Obrigado! 🌿" : "Assinar"}
            </button>
          </form>
        </div>
      </div>
      <div className="border-t border-border/60 py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} VerdePet. Feito com ♥ pela natureza.
      </div>
    </footer>
  );
}
