import { X, ShoppingBag, Minus, Plus, Trash2 } from "lucide-react";
import { useCart } from "@/lib/cart";

export function CartDrawer() {
  const { open, setOpen, items, setQty, remove, total } = useCart();
  return (
    <>
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-50 bg-foreground/30 backdrop-blur-sm transition-opacity ${open ? "opacity-100" : "pointer-events-none opacity-0"}`}
      />
      <aside
        className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-background shadow-soft transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex items-center justify-between border-b border-border/60 p-5">
          <h3 className="font-serif text-xl">Seu carrinho</h3>
          <button onClick={() => setOpen(false)} aria-label="Fechar" className="grid h-10 w-10 place-items-center rounded-2xl hover:bg-sand">
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-5">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center gap-3 text-center text-muted-foreground">
              <ShoppingBag className="h-10 w-10" />
              <p>Seu carrinho está vazio.</p>
            </div>
          ) : (
            <ul className="space-y-4">
              {items.map(({ product, qty }) => (
                <li key={product.id} className="flex gap-3 rounded-2xl border border-border/60 p-3">
                  <img src={product.image} alt="" className="h-20 w-20 rounded-2xl object-cover" />
                  <div className="flex flex-1 flex-col">
                    <h4 className="font-serif text-base leading-tight">{product.name}</h4>
                    <p className="text-sm text-muted-foreground">R$ {product.price.toFixed(2).replace(".", ",")}</p>
                    <div className="mt-auto flex items-center justify-between">
                      <div className="flex items-center gap-1 rounded-2xl border border-border">
                        <button onClick={() => setQty(product.id, qty - 1)} className="grid h-8 w-8 place-items-center"><Minus className="h-3.5 w-3.5" /></button>
                        <span className="min-w-6 text-center text-sm">{qty}</span>
                        <button onClick={() => setQty(product.id, qty + 1)} className="grid h-8 w-8 place-items-center"><Plus className="h-3.5 w-3.5" /></button>
                      </div>
                      <button onClick={() => remove(product.id)} aria-label="Remover" className="text-muted-foreground hover:text-destructive">
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
        {items.length > 0 && (
          <div className="border-t border-border/60 p-5 space-y-3">
            <div className="flex justify-between font-serif text-lg">
              <span>Total</span>
              <span>R$ {total.toFixed(2).replace(".", ",")}</span>
            </div>
            <button className="w-full rounded-2xl bg-terracotta py-4 font-medium text-white transition-opacity hover:opacity-90">
              Finalizar compra
            </button>
          </div>
        )}
      </aside>
    </>
  );
}
