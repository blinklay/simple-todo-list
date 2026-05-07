import { useState } from "react";
import useTodosStore from "../store/useTodosStore";
import { nanoid } from "nanoid";

export default function Input() {
  const [text, setText] = useState("");
  const addTodo = useTodosStore((state) => state.addTodo);

  const onClick = () => {
    const todo = {
      title: text,
      description: "",
      id: nanoid(),
    };

    addTodo(todo);
  };

  return (
    <div className="bg-white w-xl rounded-xl p-2 flex">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        type="text"
        className="border-1 w-full border-gray-500/50  text-xl p-1"
      />
      <button
        onClick={onClick}
        className="bg-blue-500/50 w-10 flex items-center justify-center cursor-pointer hover:bg-blue-500/70 transition text-xl text-white"
      >
        +
      </button>
    </div>
  );
}
