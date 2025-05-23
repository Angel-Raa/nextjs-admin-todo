import { getTodos } from "@/app/actions/todo-actions";
import { TodoGrid } from "@/app/components";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "REST TODOS",
};
export default async function RestTodos() {
  const todos = await getTodos({});

  return (
    <>
      {/**FORMULARIOS DE TODOS */}
      <TodoGrid todos={todos} />
    </>
  );
}
