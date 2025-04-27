import { WidgetItem } from "@/app/components";
import { ItemCard } from "@/app/components/products/ItemCard";
import { Product, products } from "@/lib/products";
import { Metadata } from "next";
import { cookies } from "next/headers";
export const metadata: Metadata = {
  title: "SEO - PRODUCTOS CARRITOS",
};
interface ProductInCart {
  product: Product;
  quantity: number;
}
const getProduct = (cart: { [id: string]: number }): ProductInCart[] => {
  const productsInCart: ProductInCart[] = [];
  for (const it of Object.keys(cart)) {
    const product = products.find((prod) => prod.id === it);
    if (product) {
      productsInCart.push({ product, quantity: cart[it] });
    }
  }
  return productsInCart;
};
export default async function Cart() {
  const cookieStore = await cookies();
  const cart = (await JSON.parse(cookieStore.get("cart")?.value ?? "{}")) as {
    [id: string]: number;
  };
  const productsInCart = getProduct(cart);
  const totalToPlay = productsInCart.reduce((prev, current) => (current.product.price * current.quantity) + prev, 0)
  return (
    <>
      <h2 className="text-5xl">PRODUCTO EN CARRITOS</h2>
      <div className="flex flex-col sm:flex-row gap-2 w-full ">
        <div className="flex flex-col gap-2 w-full sm:w-8/12">
          {productsInCart.map(({ product, quantity }) => (
            <ItemCard product={product} quantity={quantity} key={product.id} />
          ))}


        
        </div>
        <div className="flex flex-col w-full sm:w-4/12 ">
          <WidgetItem  title="Total al pagar">
            <div className="mt-2 flex justify-center gap-4"> 
             <h3 className="text-3xl font-bold  text-gray-600">
                ${(totalToPlay * 1.15).toFixed(2)}    
             </h3>
             <span className="font-bold text-center text-gray-600">Impuestos 15%: </span>
            </div>
          </WidgetItem>

          </div>

      </div>
    </>
  );
}
