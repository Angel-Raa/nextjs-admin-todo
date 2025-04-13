import { db } from "@/lib/db";
import { TodosTable } from "@/lib/db/schema";
import { NextResponse } from "next/server";

export async function GET() {
  await db.delete(TodosTable);
  await db.insert(TodosTable).values([
    { description: "Comprar víveres para la semana" },
    { description: "Terminar el reporte mensual", complete: true },
    { description: "Ir al gimnasio" },
    { description: "Leer 20 páginas de un libro", complete: true },
    { description: "Revisar correos pendientes" },
    { description: "Actualizar el portafolio en GitHub" },
    { description: "Hacer una llamada con el equipo", complete: true },
    { description: "Hacer una llamada con el equipo", complete: true },
    { description: "Organizar el escritorio de trabajo", complete: false },
    { description: "Aprender una nueva receta de cocina", complete: true },
    {
      description: "Limpiar la bandeja de entrada del correo",
      complete: true,
    },
    { description: "Ver un documental interesante", complete: true },
    {
      description: "Preparar la presentación para la reunión",
    },
  ]);
  return NextResponse.json({
    message: "Seed completado",
  });
}
