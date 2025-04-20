import { getAllTodos } from "@/app/actions/todo-actions";
import { NewTodo, TodoGrid } from "@/app/components";
import { Metadata } from "next";

export const metadata:Metadata = {
  title:'SERVER ACTIONS - TODOS',
  description:"SERVER ACTIONS - TODOS "
}
export default async function ServerActions() {
  const todos = await getAllTodos();
  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">
        SERVER ACTIONS - TODOS
      </h1>
      <div className="mb-10">
        <NewTodo />
      </div>
      <div>
        <TodoGrid todos={todos} />
      </div>
    </div>
  );
}
