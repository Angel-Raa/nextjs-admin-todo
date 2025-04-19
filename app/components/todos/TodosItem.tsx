"use client";

interface Props {
  description: string;
  id: number;
  complete: boolean;
  //toggleTodo:(id:number, complete:boolean) => Promise<void>;
}
const baseClasses =
  "rounded-lg shadow-sm p-5 border-dashed border flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0";
const doneClasses = "line-through bg-blue-50 border-blue-500";
const pendingClasses = "bg-red-50 border-red-500";
export const TodosItem = ({ complete, description, id }: Props) => {
  const toggleTodo = async (id: number, complete: boolean) => {
    fetch("/api/todos", {
      method: "PUT",
      body: JSON.stringify({ id, complete }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if (!res.ok) {
        throw new Error("Failed to update todo");
      }
      return res.json();
    });
  };
  return (
    <div
      onClick={() => toggleTodo(id, !complete)}
      className={`${baseClasses} ${complete ? doneClasses : pendingClasses}`}
    >
      <p>{description}</p>
      <span>{complete ? "✅" : "🕒"}</span>
    </div>
  );
};
