import { ProductCard } from "@/app/components";
import { products } from "@/lib/products";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "PRODUCTOS",
};

export default function Products() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
        Nuestros Productos
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}
