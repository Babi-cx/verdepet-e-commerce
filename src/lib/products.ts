import shampoo from "@/assets/product-shampoo.jpg";
import treats from "@/assets/product-treats.jpg";
import calm from "@/assets/product-calm.jpg";
import catfood from "@/assets/product-catfood.jpg";
import brush from "@/assets/product-brush.jpg";
import oil from "@/assets/product-oil.jpg";
import dental from "@/assets/product-dental.jpg";

export type Need = "Ansiedade" | "Pelagem" | "Digestão" | "Higiene" | "Articulação" | "Energia";
export type Category = "Cães" | "Gatos" | "Higiene" | "Petiscos";

export type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
  rating: number;
  reviews: number;
  category: Category;
  needs: Need[];
  description: string;
};

export const products: Product[] = [
  { id: "1", name: "Shampoo Natural Calêndula", price: 49.9, image: shampoo, rating: 4.8, reviews: 142, category: "Higiene", needs: ["Pelagem", "Higiene"], description: "Limpeza suave com extrato de calêndula e aloe vera." },
  { id: "2", name: "Petiscos Orgânicos de Frango", price: 29.9, image: treats, rating: 4.9, reviews: 287, category: "Petiscos", needs: ["Energia"], description: "Snacks naturais sem conservantes ou corantes." },
  { id: "3", name: "Floral Calmante para Pets", price: 64.0, image: calm, rating: 4.7, reviews: 98, category: "Cães", needs: ["Ansiedade"], description: "Mistura de camomila e maracujá para tranquilidade." },
  { id: "4", name: "Ração Natural para Gatos", price: 89.9, image: catfood, rating: 4.6, reviews: 211, category: "Gatos", needs: ["Digestão", "Pelagem"], description: "Grãos integrais e proteína de salmão selvagem." },
  { id: "5", name: "Escova de Bambu Ecológica", price: 34.5, image: brush, rating: 4.9, reviews: 156, category: "Higiene", needs: ["Pelagem"], description: "Cabo de bambu sustentável, ideal para uso diário." },
  { id: "6", name: "Óleo de Salmão Premium", price: 79.9, image: oil, rating: 4.9, reviews: 320, category: "Cães", needs: ["Pelagem", "Articulação"], description: "Rico em ômega 3 para pelo brilhante e juntas saudáveis." },
  { id: "7", name: "Creme Dental de Hortelã", price: 24.9, image: dental, rating: 4.5, reviews: 74, category: "Higiene", needs: ["Higiene"], description: "Higiene bucal com hortelã orgânica, sem flúor." },
  { id: "8", name: "Petiscos Digestivos", price: 32.9, image: treats, rating: 4.8, reviews: 189, category: "Petiscos", needs: ["Digestão"], description: "Com prebióticos naturais para flora intestinal." },
];

export const needs: Need[] = ["Ansiedade", "Pelagem", "Digestão", "Higiene", "Articulação", "Energia"];
