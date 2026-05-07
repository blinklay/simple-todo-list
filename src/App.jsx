import useTodosStore from "./store/useTodosStore";
import Input from "./components/Input";
import TodoItem from "./components/TodoItem";
import useAppStore from "./store/useAppStore";
import EditTodo from "./components/EditTodo";

export default function App() {
  const todos = useTodosStore((state) => state.todos);
  const editMode = useAppStore((state) => state.editMode);

  return (
    <div className="w-[100vw] h-[100vh] flex items-center justify-center flex-col gap-10">
      <Input />
      {editMode ? (
        <EditTodo />
      ) : (
        <div className="flex flex-col w-xl p-6 bg-white rounded-xl gap-3">
          {todos.map((item) => (
            <TodoItem {...item} key={item.id} />
          ))}
        </div>
      )}
    </div>
  );
}
