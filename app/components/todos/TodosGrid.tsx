import { TodoSelect } from "@/lib/db/schema";
import { TodosItem } from "./TodosItem";

interface Props {
  todos?: TodoSelect[];
}
export const TodoGrid = ({ todos = [] }: Props) => {
 

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
      {todos.map((todo) => (
        <TodosItem
          key={todo.id}
          complete={todo.complete ?? false}
          description={todo.description}
          id={todo.id}
        />
      ))}
    </div>
  );
};
