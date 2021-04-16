<template>
  <div id="main-application-app">
    <router-link to="/home">home</router-link>
    <router-link to="/about">about</router-link>
    <!-- <router-link to="/micro-app-1">micro-app-1</router-link> -->
    <router-view></router-view>
    <div id="micro-app-container"></div>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
#main-application-app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
