import { Star, Plus } from "lucide-react";
import type { Product } from "@/lib/products";
import { useCart } from "@/lib/cart";

export function ProductCard({ product }: { product: Product }) {
  const { add } = useCart();
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-soft">
      <div className="aspect-square overflow-hidden bg-sand">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          width={768}
          height={768}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="space-y-2 p-4">
        <p className="text-xs font-medium uppercase tracking-wide text-primary">{product.category}</p>
        <h3 className="font-serif text-lg leading-tight">{product.name}</h3>
        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <Star className="h-3.5 w-3.5 fill-terracotta text-terracotta" />
          <span className="font-medium text-foreground">{product.rating}</span>
          <span>({product.reviews})</span>
        </div>
        <div className="flex items-end justify-between pt-1">
          <span className="font-serif text-xl font-semibold">R$ {product.price.toFixed(2).replace(".", ",")}</span>
          <button
            onClick={() => add(product)}
            aria-label="Adicionar ao carrinho"
            className="grid h-11 w-11 place-items-center rounded-2xl bg-terracotta text-white transition-all hover:opacity-90 md:h-10 md:w-10 md:opacity-0 md:group-hover:opacity-100"
          >
            <Plus className="h-5 w-5" />
          </button>
        </div>
      </div>
    </article>
  );
}
