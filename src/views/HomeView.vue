<template>
  <div class="home">
    <TodoList location="home" />
  </div>
</template>

<script>
import TodoList from "@/components/TodoList.vue";

export default {
  name: "HomeView",
  components: {
    TodoList,
  },
};
</script>
