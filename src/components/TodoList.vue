<template>
  <h1 class="list-heading mb__small">To do list:</h1>
  <div class="todo-container">
    <ul class="todo-list">
      <li
        v-for="todo in todos"
        :key="todo.id"
        class="todo-list__item"
        :class="{ 'todo-list__item_done': todo.completed }"
      >
        <div
          class="todo-list__item-holder"
          v-if="todo.location === location"
          :data-status="todo.completed"
        >
          <div class="todo-list__content">
            <input
              @change="updateTodo($event, todo.id)"
              class="todo-list__checkbox"
              type="checkbox"
              name="completed"
              :data-id="todo.id"
              :checked="todo.completed"
            />
            <span class="todo-list__text">{{ todo.name }}</span>
          </div>

          <div class="btn-container">
            <button
              @click="deleteTodo(todo.id)"
              class="btn-container__btn_delete"
            >
              <ion-icon
                class="btn-container__icon_delete"
                name="trash-outline"
              ></ion-icon>
            </button>
            <button
              @click="archiveTodo(todo.id)"
              class="btn-container__btn_archive"
            >
              <ion-icon
                class="btn-container__icon_archive"
                name="archive-outline"
              ></ion-icon>
            </button>
          </div>
        </div>
      </li>
    </ul>
    <div class="todo-input">
      <input
        v-model="todoItem"
        class="todo-input__input"
        type="text"
        placeholder="Feed a cat"
        @keydown.enter="addTodo"
      />
      <button @click="addTodo" class="todo-input__btn_add">Add to list</button>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { v4 as uuidv4 } from "uuid";

export default {
  name: "TodoList",
  data() {
    return {
      todoItem: "",
    };
  },
  props: {
    location: String,
  },
  setup() {
    // Open our Vuex store
    const store = useStore();
    // And use our getter to get the data.
    // When we use return {} here, it will
    // pass our todos list data straight to
    // our data() function above.

    return {
      todos: store.getters.todos,
    };
  },
  methods: {
    updateTodo(e, id) {
      let newStatus = e.target.checked;
      //   console.log(e.target.checked, id);
      this.$store.commit("updateTodo", {
        id,
        completed: newStatus,
      });
    },
    addTodo() {
      if (this.todoItem) {
        console.log(this.todoItem);
        this.$store.commit("addTodo", {
          id: uuidv4(),
          name: this.todoItem,
          completed: false,
        });
        this.todoItem = "";
      }
    },
    deleteTodo: function (id) {
      // This will fire our "deleteTodo" mutation, and delete
      // this todo item according to their ID
      this.$store.commit("deleteTodo", {
        id,
      });
    },
    archiveTodo: function (id) {
      // Finally, we can change or archive an item
      // using our "moveTodoItem" mutation
      this.$store.commit("moveTodoItem", {
        id,
        location: "archive",
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.mb__small {
  margin-bottom: 1.2rem;
}
.todo-container {
  max-width: 60%;
  margin: 0 auto;
  border: 2px solid #ddd;
  border-radius: 7px;

  .todo-list {
    width: 100%;
    border-bottom: 2px solid #ddd;
    margin: 0;
    &__content {
      display: flex;
      gap: 2rem;
      align-items: center;
      color: #42b983;
    }
    &__item_done {
      color: #333;
      text-decoration: line-through;
    }
    &__item-holder {
      padding: 1.2rem;
      border-bottom: 2px solid #ddd;
      display: flex;
      justify-content: space-between;

      .btn-container {
        display: flex;
        gap: 1.2rem;
        &__icon_delete,
        &__icon_archive {
          transition: all 0.3s;
          width: 2.4rem;
          height: 2.4rem;
        }
        &__icon_delete {
          color: rgba(225, 89, 89, 0.76);
          &:hover {
            color: rgb(225, 89, 89);
          }
        }
        &__icon_archive {
          color: rgba(66, 185, 131, 0.76);
          &:hover {
            color: rgb(66, 185, 131);
          }
        }
      }
    }
  }
  .todo-input {
    padding: 1.2rem;
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
    &__input {
      width: 100%;
      line-height: 1.8;
      border: 1px solid #ddd;
      border-radius: 7px;
      color: inherit;
      &::placeholder {
        color: #ccc;
      }
    }
    &__btn_add {
      width: 100%;
      background-color: #42b983;
      padding: 0.8rem;
      border-radius: 7px;
      box-shadow: 0 2px 10px rgba(66, 184, 131, 0.555);
      color: #fff;
      text-transform: uppercase;
      font-weight: bold;
    }
  }
}
</style>
