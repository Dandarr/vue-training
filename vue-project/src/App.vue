<template>
	<div id="app">
 	<user-table/>
	 </div>
</template>

<script>
import Users from "./components/UserProfile.vue";
import UserTable from "./components/UserTable.vue";
//import Calendar from "./components/calendar.vue";
//import { createApp } from 'vue'
//import { createPinia } from 'pinia'
//import App from './App.vue'

export default {
	name: "app",
	components: {
		//Users,
		UserTable,
		//Calendar,
	},
};
</script>

<style>
#app {
	font-family: "Avenir", Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>