import { Link } from "@tanstack/react-router";
import { Search, ShoppingBag, Leaf, Menu } from "lucide-react";
import { useCart } from "@/lib/cart";
import { useState } from "react";

const nav = [
  { label: "Cães", to: "/produtos", search: { categoria: "Cães" as const } },
  { label: "Gatos", to: "/produtos", search: { categoria: "Gatos" as const } },
  { label: "Higiene", to: "/produtos", search: { categoria: "Higiene" as const } },
  { label: "Petiscos", to: "/produtos", search: { categoria: "Petiscos" as const } },
];

export function Header() {
  const { count, setOpen } = useCart();
  const [mobile, setMobile] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 md:px-6">
        <Link to="/" className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-2xl bg-primary/15 text-primary">
            <Leaf className="h-5 w-5" />
          </span>
          <span className="font-serif text-2xl font-semibold tracking-tight">VerdePet</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((n) => (
            <Link
              key={n.label}
              to={n.to}
              search={n.search}
              className="text-sm font-medium text-foreground/70 transition-colors hover:text-primary"
              activeProps={{ className: "text-primary" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-1">
          <button aria-label="Buscar" className="grid h-10 w-10 place-items-center rounded-2xl text-foreground/70 hover:bg-sand">
            <Search className="h-5 w-5" />
          </button>
          <button
            aria-label="Carrinho"
            onClick={() => setOpen(true)}
            className="relative grid h-10 w-10 place-items-center rounded-2xl text-foreground/70 hover:bg-sand"
          >
            <ShoppingBag className="h-5 w-5" />
            {count > 0 && (
              <span className="absolute -right-0.5 -top-0.5 grid h-5 min-w-5 place-items-center rounded-full bg-terracotta px-1 text-[10px] font-semibold text-white">
                {count}
              </span>
            )}
          </button>
          <button aria-label="Menu" onClick={() => setMobile((v) => !v)} className="grid h-10 w-10 place-items-center rounded-2xl text-foreground/70 hover:bg-sand md:hidden">
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      {mobile && (
        <div className="border-t border-border/60 bg-background md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col p-4">
            {nav.map((n) => (
              <Link
                key={n.label}
                to={n.to}
                search={n.search}
                onClick={() => setMobile(false)}
                className="rounded-2xl px-4 py-3 text-base font-medium text-foreground/80 hover:bg-sand"
              >
                {n.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
