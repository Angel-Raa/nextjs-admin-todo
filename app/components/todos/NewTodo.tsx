"use client";
import { createTodo, deleteCompletedTodos } from "@/app/actions/todo-actions";
import { FormEvent, useState } from "react";
import { IoTrashOutline } from "react-icons/io5";

export const NewTodo = (): React.JSX.Element => {
  const [description, setDescription] = useState("");
  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (description.trim().length === 0) return;
    await createTodo({ description });
    setDescription("");
  };

  return (
    <form className="flex w-full gap-2" onSubmit={onSubmit}>
      <input
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        type="text"
        className="flex-1 px-4 py-3 rounded-lg border-2 border-gray-200 outline-none 
                    focus:border-sky-500 focus:ring-2 focus:ring-sky-200 transition-all
                    placeholder:text-gray-400 shadow-sm"
        placeholder="¿Qué necesita ser hecho?"
      />

      <button
        type="submit"
        className="flex items-center justify-center rounded-md bg-sky-500 px-5 py-3 
                     text-white font-medium hover:bg-sky-600 active:bg-sky-700 
                     transition-colors shadow-md hover:shadow-sm"
      >
        Crear
      </button>

      <button
        onClick={deleteCompletedTodos}
        type="button"
        className="flex items-center justify-center rounded-md bg-red-400 px-4 py-3 
                     text-white font-medium hover:bg-red-500 active:bg-red-600 
                     transition-colors shadow-md hover:shadow-sm gap-2"
      >
        <IoTrashOutline className="text-lg" />
        <span>Eliminar</span>
      </button>
    </form>
  );
};
