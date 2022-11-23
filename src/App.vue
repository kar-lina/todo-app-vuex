<template>
  <div class="default-container">
    <nav class="nav">
      <router-link class="nav__item" to="/">Home</router-link>
      <router-link class="nav__item" to="/about">About</router-link>
      <router-link class="nav__item" to="/archive">Archive</router-link>
    </nav>
    <router-view />
  </div>
</template>
<script>
import { useStore } from "vuex";
export default {
  beforeCreate() {
    const store = useStore();
    store.commit("loadStore");
  },
};
</script>

<style lang="scss">
html {
  font-size: 62.5%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.default-container {
  max-width: 80rem;
  margin: 0 auto;
  padding: 4.8rem 0;
}

.nav {
  padding: 3rem;
  display: flex;
  gap: 3.2rem;
  justify-content: space-around;
  max-width: 30%;
  margin: 0 auto;

  a {
    &:link,
    &:visited {
      display: inline-block;
      padding: 0.8rem 1.2rem;
      border-radius: 100px;
      background-color: #ddd;
      font-weight: bold;
      font-size: 1.8rem;
      color: #2c3e50;
      text-decoration: none;
      transition: all 0.3s;
    }

    &:hover,
    &:active {
      background-color: transparent;
    }

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
