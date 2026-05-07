import { Trash } from "lucide-react";
import useAppStore from "../store/useAppStore";
import useTodosStore from "../store/useTodosStore";

export default function TodoItem({ id, title, description }) {
  const setEditMode = useAppStore((state) => state.setEditMode);
  const setEditStatus = useTodosStore((state) => state.setEditStatus);
  return (
    <div key={id} className="border-2 border-gray-500/50 rounded-xl p-3">
      <div className="flex items-center pb-2 justify-between">
        <p className="font-medium">{title}</p>
        <button className="p-2 bg-red-500/50 rounded-sm text-white cursor-pointer hover:bg-red-500/70 transition">
          <Trash />
        </button>
      </div>
      {description ? (
        <div className="pt-2 border-t-2 border-gray-500/50">{description}</div>
      ) : (
        <button
          onClick={() => {
            (setEditMode(true), setEditStatus(id, true));
          }}
          className="w-full text-left cursor-pointer pt-2 border-t-2 border-gray-500/50 text-gray-500/40"
        >
          type description
        </button>
      )}
    </div>
  );
}
