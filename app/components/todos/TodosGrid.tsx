import { TodoSelect } from "@/lib/db/schema";
import { TodosItem } from "./TodosItem";
import { updateTodoCompletion } from "@/app/actions/todo-actions";

interface Props {
  todos?: TodoSelect[];
}
export const TodoGrid = ({ todos = [] }: Props) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {todos.map((todo) => (
        <TodosItem
          key={todo.id}
          complete={todo.complete ?? false}
          description={todo.description}
          id={todo.id}
          toggleTodo={updateTodoCompletion}
        />
      ))}
    </div>
  );
};
