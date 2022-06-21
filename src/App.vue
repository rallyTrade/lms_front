<template>
  <component :is="currentView" />
</template>

<script>
import HomePage from './components/HomePage.vue';
import Login from './components/Login.vue';
import NotFound from './components/NotFound.vue'

const routes = {
  '/':HomePage,
  '/login':Login
}

export default {
  data() {
    return {
      currentPath: window.location.hash
    }
  },
  computed: {
    currentView() {
      return routes[this.currentPath.slice(1) || '/'] || NotFound
    }
  },
  mounted() {
    window.addEventListener('hashchange', () => {
      this.currentPath = window.location.hash
    })
  }
}
</script>

<style>
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: 'Montserrat', sans-serif;
}
</style>
