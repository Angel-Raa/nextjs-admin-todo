"use client";

interface Props {
  description: string;
  id: number;
  complete: boolean;
  toggleTodo: ({
    id,
    complete,
  }: {
    id: number;
    complete?: boolean;
  }) => Promise<void>;
}
const baseClasses =
  "rounded-lg shadow p-4 border-2 cursor-pointer transition-all hover:shadow-md flex justify-between items-center gap-3";
const doneClasses = "bg-blue-50 border-blue-300 text-blue-700";
const pendingClasses = "bg-red-50 border-red-300 text-red-700";
export const TodosItem = ({ complete, description, id, toggleTodo }: Props) => {
  return (
    <div
      onClick={() => toggleTodo({ id, complete })}
      className={`${baseClasses} ${complete ? doneClasses : pendingClasses}`}
    >
      <p className={`font-medium ${complete ? "line-through" : ""}`}>
        {description}
      </p>
      <span className="text-xl">{complete ? "✅" : "🕒"}</span>
    </div>
  );
};
