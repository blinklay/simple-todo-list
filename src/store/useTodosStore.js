import { create } from "zustand";

const useTodosStore = create((set) => ({
  todos: [
    {
      id: 1,
      title: "Go to Walk!",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur molestias, ad at itaque aliquid sed commodi maiores neque voluptatum nesciunt.",
      edit: false,
    }, {
      id: 2,
      title: "Go to Walk!",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur molestias, ad at itaque aliquid sed commodi maiores neque voluptatum nesciunt."
    },
  ],
  addTodo: (item) => {
    set(state => ({
      todos: [...state.todos, item]
    }))
  },
  removeTodo: (id) => {
    set((state) => ({
      todos: state.todos.filter(item => item.id !== id)
    }))
  },
  setEditStatus: (id, bool) => {
    set(state => ({
      todos: state.todos.map(item => {
        if (item.id === id) {
          return {
            ...item,
            editMode: bool
          }
        }
        return item
      })
    }))
  },
  editTodo: (id, updatedItem) => {
    set(state => ({
      todos: state.todos.map(item => {
        if (item.id === id) {
          return {
            ...item,
            ...updatedItem
          }
        }
        return item
      })
    }))
  }
}))

export default useTodosStore;