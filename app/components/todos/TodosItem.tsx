interface Props {
  description: string;
  id: number;
  complete: boolean;
}
const baseClasses =
  "rounded-lg shadow-sm p-5 border-dashed border flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0";
const doneClasses = "line-through bg-blue-50 border-blue-500";
const pendingClasses = "bg-red-50 border-red-500";
export const TodosItem = ({ complete, description, id }: Props) => {
  return (
    <div
      className={`${baseClasses} ${complete ? doneClasses : pendingClasses}`}
    >
      <p>{description}</p>
      <span>{complete ? "✅" : "🕒"}</span>
    </div>
  );
};
