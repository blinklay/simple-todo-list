import { useState } from "react";
import useTodosStore from "../store/useTodosStore";
import useAppStore from "../store/useAppStore";

export default function EditTodo() {
  const todo = useTodosStore((state) => state.todos).filter(
    (item) => item.editMode,
  )[0];
  const editTodo = useTodosStore((state) => state.editTodo);
  const [title, setTitle] = useState(todo.title);
  const [description, setDescription] = useState(todo.description);
  const setEditMode = useAppStore((state) => state.setEditMode);

  function onSubmit(e) {
    e.preventDefault();

    editTodo(todo.id, { title, description });
    setEditMode(false);
  }

  return (
    <div className="flex flex-col w-xl p-6 bg-white rounded-xl gap-3">
      <form onSubmit={onSubmit} className="flex flex-col gap-2">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="p-2 text-xl"
          placeholder="Type title"
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Type description"
          className="resize-none p-2"
        ></textarea>
        <button
          type="submit"
          className="bg-blue-500 text-white rounded-sm text-white p-2"
        >
          submit
        </button>
      </form>
    </div>
  );
}
