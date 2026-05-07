import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Leaf, Sparkles, ShieldCheck } from "lucide-react";
import heroImg from "@/assets/hero-pets.jpg";
import dogImg from "@/assets/testimonial-dog.jpg";
import catImg from "@/assets/testimonial-cat.jpg";
import poodleImg from "@/assets/testimonial-poodle.jpg";
import { products } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";

export const Route = createFileRoute("/")({
  component: Index,
});

const categories = [
  { label: "Cães", icon: "🐕", search: { categoria: "Cães" as const } },
  { label: "Gatos", icon: "🐈", search: { categoria: "Gatos" as const } },
  { label: "Higiene", icon: "🌿", search: { categoria: "Higiene" as const } },
  { label: "Petiscos", icon: "🦴", search: { categoria: "Petiscos" as const } },
];

const testimonials = [
  { name: "Mel & Cacau", text: "Desde que troquei a ração industrializada pela VerdePet, o pelo do meu Cacau ficou muito mais brilhante e ele tem mais energia.", img: dogImg, owner: "Carolina S." },
  { name: "Luna", text: "O floral calmante mudou as nossas noites. A Luna era ansiosa e agora está muito mais tranquila durante os temporais.", img: catImg, owner: "Rafael M." },
  { name: "Nino", text: "Adoro saber exatamente o que estou dando para o meu pet. Ingredientes naturais, embalagem linda, atendimento incrível.", img: poodleImg, owner: "Patrícia L." },
];

function Index() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-hero">
        <div className="mx-auto grid w-full max-w-7xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:px-6 md:py-24">
          <div>
            <span className="inline-flex items-center gap-2 rounded-2xl bg-background/70 px-3 py-1.5 text-xs font-medium text-primary">
              <Leaf className="h-3.5 w-3.5" /> 100% natural & orgânico
            </span>
            <h1 className="mt-6 font-serif text-4xl leading-[1.05] tracking-tight md:text-6xl">
              Saúde que vem da natureza para o seu melhor amigo
            </h1>
            <p className="mt-5 max-w-md text-base text-muted-foreground md:text-lg">
              Produtos naturais, sustentáveis e cuidadosamente formulados por veterinários para o bem-estar completo do seu pet.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/produtos"
                className="inline-flex items-center gap-2 rounded-2xl bg-terracotta px-7 py-4 text-base font-medium text-white shadow-soft transition-all hover:opacity-90"
              >
                Comprar Agora <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/produtos"
                className="inline-flex items-center gap-2 rounded-2xl border border-foreground/15 bg-background/60 px-7 py-4 text-base font-medium text-foreground transition-colors hover:bg-background"
              >
                Conhecer linhas
              </Link>
            </div>
            <dl className="mt-10 grid grid-cols-3 gap-4 max-w-md">
              {[
                { v: "+12k", l: "pets felizes" },
                { v: "100%", l: "natural" },
                { v: "4.9★", l: "avaliação" },
              ].map((s) => (
                <div key={s.l}>
                  <dt className="font-serif text-2xl text-primary">{s.v}</dt>
                  <dd className="text-xs text-muted-foreground">{s.l}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="relative">
            <div className="overflow-hidden rounded-2xl shadow-soft">
              <img src={heroImg} alt="Cachorro e gato em meio à natureza" width={1536} height={1024} className="h-[460px] w-full object-cover md:h-[560px]" />
            </div>
            <div className="absolute -bottom-4 -left-4 hidden rounded-2xl bg-background p-4 shadow-soft md:block">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-2xl bg-primary/15 text-primary">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold">Aprovado por vets</p>
                  <p className="text-xs text-muted-foreground">Fórmulas seguras</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="mx-auto w-full max-w-7xl px-4 py-16 md:px-6">
        <div className="mb-10 text-center">
          <h2 className="font-serif text-3xl md:text-4xl">Explore por categoria</h2>
          <p className="mt-2 text-sm text-muted-foreground">Tudo que seu pet precisa, organizado para você.</p>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {categories.map((c) => (
            <Link
              key={c.label}
              to="/produtos"
              search={c.search}
              className="group flex flex-col items-center gap-3 rounded-2xl border border-border/60 bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-soft"
            >
              <div className="grid h-20 w-20 place-items-center rounded-full bg-sand text-4xl transition-colors group-hover:bg-primary/15">
                {c.icon}
              </div>
              <span className="font-serif text-lg">{c.label}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* PRODUCT GRID */}
      <section className="mx-auto w-full max-w-7xl px-4 pb-16 md:px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl">Mais amados</h2>
            <p className="mt-2 text-sm text-muted-foreground">Os favoritos de quem cuida com carinho.</p>
          </div>
          <Link to="/produtos" className="hidden text-sm font-medium text-primary hover:underline md:inline">
            Ver todos →
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 lg:grid-cols-4">
          {products.slice(0, 8).map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-sand/60 py-20">
        <div className="mx-auto w-full max-w-7xl px-4 md:px-6">
          <div className="mb-12 text-center">
            <span className="inline-flex items-center gap-2 rounded-2xl bg-background px-3 py-1.5 text-xs font-medium text-primary">
              <Sparkles className="h-3.5 w-3.5" /> Quem usa, aprova
            </span>
            <h2 className="mt-4 font-serif text-3xl md:text-4xl">Histórias de patinhas felizes</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure key={t.name} className="flex flex-col gap-4 rounded-2xl bg-background p-6 shadow-soft">
                <blockquote className="font-serif text-lg leading-snug">"{t.text}"</blockquote>
                <figcaption className="mt-auto flex items-center gap-3 border-t border-border/60 pt-4">
                  <img src={t.img} alt={t.name} loading="lazy" width={64} height={64} className="h-14 w-14 rounded-2xl object-cover" />
                  <div>
                    <p className="font-medium">{t.name}</p>
                    <p className="text-xs text-muted-foreground">Tutor: {t.owner}</p>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
