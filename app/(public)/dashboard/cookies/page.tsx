import { TabBar } from "@/app/components/shared/TabBar";
import { Metadata } from "next";
import { cookies } from "next/headers";
export const metadata: Metadata = {
  title: "COOKIES",
  description: "SEO - COOKIES ",
};
export default async function Cookies() {
  const cookieStore = await cookies();
  const currentIndex = Number(cookieStore.get("selected-tab")?.value ?? "1");
  const allCookies = cookieStore.getAll();
  console.log({allCookies});
  

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Política de Cookies
          </h2>
          <p className="text-gray-600 mb-4">
            Nuestro sitio web utiliza cookies para mejorar tu experiencia de
            navegación.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition duration-200">
            Aprender más
          </button>
        </div>
        <div className="flex justify-center">
          <TabBar currentIndex={currentIndex} />
        </div>
      </div>
    </div>
  );
}
