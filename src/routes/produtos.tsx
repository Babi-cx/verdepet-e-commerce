import { createFileRoute, Link } from "@tanstack/react-router";
import { zodValidator, fallback } from "@tanstack/zod-adapter";
import { z } from "zod";
import { useMemo, useState } from "react";
import { Filter, X } from "lucide-react";
import { products, needs, type Need } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";

const searchSchema = z.object({
  categoria: z.enum(["Cães", "Gatos", "Higiene", "Petiscos"]).optional().catch(undefined),
  necessidade: z.string().optional().catch(undefined),
});

export const Route = createFileRoute("/produtos")({
  validateSearch: zodValidator(searchSchema),
  component: ProdutosPage,
  head: () => ({
    meta: [
      { title: "Produtos naturais — VerdePet" },
      { name: "description", content: "Catálogo de produtos naturais para cães e gatos. Filtre por necessidade: ansiedade, pelagem, digestão e mais." },
    ],
  }),
});

function ProdutosPage() {
  const { categoria, necessidade } = Route.useSearch();
  const navigate = Route.useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);

  const selected = (necessidade ?? "") as Need | "";

  const filtered = useMemo(() => products.filter((p) =>
    (!categoria || p.category === categoria) &&
    (!selected || p.needs.includes(selected))
  ), [categoria, selected]);

  const setNeed = (n: Need | "") => {
    navigate({ search: (prev) => ({ ...prev, necessidade: n || undefined }) });
    setMobileOpen(false);
  };

  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-12 md:px-6">
      <header className="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm font-medium uppercase tracking-wide text-primary">{categoria ?? "Todos os produtos"}</p>
          <h1 className="mt-1 font-serif text-4xl md:text-5xl">Encontre o cuidado certo</h1>
          <p className="mt-2 text-sm text-muted-foreground">{filtered.length} produtos disponíveis</p>
        </div>
        <button
          onClick={() => setMobileOpen(true)}
          className="inline-flex items-center justify-center gap-2 self-start rounded-2xl border border-border bg-card px-5 py-3 text-sm font-medium md:hidden"
        >
          <Filter className="h-4 w-4" /> Filtrar
        </button>
      </header>

      <div className="grid gap-8 md:grid-cols-[240px_1fr]">
        {/* Sidebar */}
        <aside className={`${mobileOpen ? "fixed inset-0 z-50 overflow-auto bg-background p-6" : "hidden"} md:relative md:block md:bg-transparent md:p-0`}>
          <div className="md:sticky md:top-24">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="font-serif text-xl">Necessidade</h2>
              <button onClick={() => setMobileOpen(false)} aria-label="Fechar" className="md:hidden grid h-10 w-10 place-items-center rounded-2xl hover:bg-sand">
                <X className="h-5 w-5" />
              </button>
            </div>
            <ul className="space-y-1">
              <li>
                <button
                  onClick={() => setNeed("")}
                  className={`w-full rounded-2xl px-4 py-2.5 text-left text-sm transition-colors ${!selected ? "bg-primary/15 font-medium text-primary" : "hover:bg-sand"}`}
                >
                  Todas
                </button>
              </li>
              {needs.map((n) => (
                <li key={n}>
                  <button
                    onClick={() => setNeed(n)}
                    className={`w-full rounded-2xl px-4 py-2.5 text-left text-sm transition-colors ${selected === n ? "bg-primary/15 font-medium text-primary" : "hover:bg-sand"}`}
                  >
                    {n}
                  </button>
                </li>
              ))}
            </ul>

            {categoria && (
              <Link to="/produtos" search={{}} className="mt-6 inline-block text-xs text-muted-foreground underline hover:text-primary">
                Limpar categoria
              </Link>
            )}
          </div>
        </aside>

        {/* Grid */}
        {filtered.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-border p-12 text-center text-muted-foreground">
            Nenhum produto encontrado com esses filtros.
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
            {filtered.map((p) => <ProductCard key={p.id} product={p} />)}
          </div>
        )}
      </div>
    </div>
  );
}
