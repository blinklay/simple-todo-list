import React from "react";
import useTodosStore from "./store/useTodosStore";
import { Trash } from "lucide-react";

export default function App() {
  const todos = useTodosStore((state) => state.todos);

  return (
    <div className="w-[100vw] h-[100vh] flex items-center justify-center">
      <div className="flex flex-col w-xl p-6 bg-white rounded-xl gap-3">
        {todos.map((item) => (
          <div
            key={item.id}
            className="border-2 border-gray-500/50 rounded-xl p-3"
          >
            <div className="flex items-center pb-2 justify-between">
              <p className="font-medium">{item.title}</p>
              <button className="p-2 bg-red-500/50 rounded-sm text-white cursor-pointer hover:bg-red-500/70 transition">
                <Trash />
              </button>
            </div>
            <div className="pt-2 border-t-2 border-gray-500/50">
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
