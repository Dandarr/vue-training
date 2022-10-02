<template>
  <div id="app">
    <UserTable/>
  </div>

</template>

<script>
import Users from './components/Users.vue'
import UserTable from './components/UserTable.vue'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'


export default {
  name: 'app',
  components: {
    Users,
    UserTable
  }
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>