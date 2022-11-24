import { createStore } from "vuex";

export default createStore({
  state() {
    return {
      todos: [
        {
          id: 1,
          name: "Create a todo app",
          completed: false,
          // dueTo: new Date().now(),
          location: "home",
        },
      ],
    };
  },
  getters: {
    todos(state) {
      return state.todos;
    },
  },
  mutations: {
    loadStore() {
      if (localStorage.getItem("store")) {
        try {
          this.replaceState(JSON.parse(localStorage.getItem("store")));
        } catch (e) {
          console.log(`Cannot intialize store: ${e}`);
        }
      }
    },
    updateTodo(state, todoItem) {
      const id = todoItem.id;
      const name = todoItem.name;
      const completed = todoItem.completed;
      let findEl = state.todos.find((el) => el.id === id);
      if (findEl !== null) {
        if (completed !== undefined) {
          findEl.completed = completed;
        }
        if (name !== undefined) {
          findEl.name = name;
        }
      } else {
        console.log(`Todo Item with id = ${id} cannot be found`);
      }
    },
    addTodo(state, todoItem) {
      if (
        todoItem.id !== undefined &&
        typeof todoItem.name === "string" &&
        typeof todoItem.completed === "boolean"
      ) {
        state.todos.push({ ...todoItem, location: "home" });
        console.log(state.todos);
      }
    },
    deleteTodo(state, todoItem) {
      let id = todoItem.id;
      let elToRemove = state.todos.findIndex((el) => el.id === id);
      if (elToRemove !== null) {
        state.todos.splice(elToRemove, 1);
      }
    },
    moveTodoItem(state, todoItem) {
      let id = todoItem.id;
      let location = todoItem.location;
      let findEl = state.todos.find((el) => el.id === id);
      if (findEl !== null) {
        findEl.location = location;
      }
    },
  },
});
