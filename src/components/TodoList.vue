<template>
  <h1 class="list-heading mb__small">To do list:</h1>
  <div class="todo-container">
    <ul class="todo-list">
      <li class="todo-list__item">
        <div class="todo-list__content">
          <input
            class="todo-list__checkbox"
            type="checkbox"
            name="completed"
            id=""
          />
          <span class="todo-list__text">Item</span>
        </div>

        <div class="btn-container">
          <button class="btn-container__btn_delete">
            <ion-icon
              class="btn-container__icon_delete"
              name="trash-outline"
            ></ion-icon>
          </button>
          <button class="btn-container__btn_archive">
            <ion-icon
              class="btn-container__icon_archive"
              name="archive-outline"
            ></ion-icon>
          </button>
        </div>
      </li>
      <li class="todo-list__item">
        <span class="todo-list__text">Item</span>

        <div class="btn-container">
          <button class="btn-container__btn_delete">
            <ion-icon
              class="btn-container__icon_delete"
              name="trash-outline"
            ></ion-icon>
          </button>
          <button class="btn-container__btn_archive">
            <ion-icon
              class="btn-container__icon_archive"
              name="archive-outline"
            ></ion-icon>
          </button>
        </div>
      </li>
      <li class="todo-list__item">
        <span class="todo-list__text">Item</span>

        <div class="btn-container">
          <button class="btn-container__btn_delete">
            <ion-icon
              class="btn-container__icon_delete"
              name="trash-outline"
            ></ion-icon>
          </button>
          <button class="btn-container__btn_archive">
            <ion-icon
              class="btn-container__icon_archive"
              name="archive-outline"
            ></ion-icon>
          </button>
        </div>
      </li>
    </ul>
    <div class="todo-input">
      <input class="todo-input__input" type="text" placeholder="Feed a cat" />
      <button class="todo-input__btn_add">Add to list</button>
    </div>
  </div>
</template>

<script>
// import { useStore } from "vuex";
// import { v4 as uuid4 } from "uuid";

export default {
  name: "TodoList",
  data() {
    return {
      newTodoItem: "",
    };
  },
  prop: {
    location: String,
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
    }
    &__item {
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
