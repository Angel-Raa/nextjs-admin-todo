import { IoAddCircleOutline, IoTrashOutline } from "react-icons/io5";
import { StarIcon } from "./StarIcon";
interface Props {
  id: string;
  name: string;
  price: number;
  rating: number;
  reviewCount?: number; // Opcional: cantidad de reviews
}

export const ProductCard = ({
  name,
  price,
  rating,
  reviewCount = 0,
}: Props) => {
    const roundedRating = Math.round(rating * 2) / 2;
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 dark:bg-gray-800">
      {/* Imagen del producto (puedes agregar una imagen real) */}
      <div className="h-48 bg-gradient-to-r from-blue-50 to-purple-50 flex items-center justify-center dark:from-gray-700 dark:to-gray-600">
        <span className="text-4xl">⌚</span>
      </div>

      {/* Contenido de la tarjeta */}
      <div className="p-6">
        {/* Categoría */}
        <span className="text-xs font-semibold text-blue-600 dark:text-blue-400">
          Smartwatch
        </span>

        {/* Título */}
        <h3 className="mt-1 text-xl font-bold text-gray-900 dark:text-white line-clamp-2">
          {name}
        </h3>

        {/* Rating */}
        {/* Rating */}
        <div className="mt-3 flex items-center">
          <div className="flex">
            {[1, 2, 3, 4, 5].map((star) => {
              // Mostrar estrella llena, media o vacía
              return (
                <StarIcon
                  key={star}
                  filled={star <= roundedRating}
                  half={star - 0.5 === roundedRating}
                />
              );
            })}
          </div>
          <span className="ml-2 bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
            {rating.toFixed(1)}
          </span>
          {reviewCount > 0 && (
            <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">
              ({reviewCount} {reviewCount === 1 ? "review" : "reviews"})
            </span>
          )}
        </div>

        {/* Precio y acciones */}
        <div className="mt-4 flex items-center justify-between">
          <div>
            <span className="text-3xl font-bold text-gray-900 dark:text-white">
              ${price}
            </span>
            {599 > 400 && (
              <span className="ml-2 text-sm text-green-600 dark:text-green-400">
                Envío gratis
              </span>
            )}
          </div>

          <div className="flex space-x-2">
            <button
              className="p-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
              aria-label="Añadir al carrito"
            >
              <IoAddCircleOutline size={22} />
            </button>
            <button
              className="p-2 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600 dark:focus:ring-offset-gray-800"
              aria-label="Eliminar"
            >
              <IoTrashOutline size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
