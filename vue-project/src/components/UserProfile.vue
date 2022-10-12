<!-- <script setup>
import { RouterLink } from "vue-router";
import { ref } from "vue";
const show = ref(false);
</script> -->
<template>
	<!-- <td scope="row" data-id="{{UserProfile.id}}">{{ UserProfile.id }}</td>
    <td scope="row">{{ UserProfile.name }}</td>
    <td scope="row">{{ UserProfile.email }}</td>
    <td scope="row">{{ UserProfile.address.city }}</td>
    <td scope="row">
      <button @click="$emit('closeButton')" class="closeButton">x</button>
    </td>   -->
	<td scope="row">{{ UserProfile.phone }}</td>
	<td scope="row">{{ UserProfile.address.street }}</td>
	<td scope="row">{{ UserProfile.address.zipcode }}</td>
</template>

<script>
import axios from "axios";
export default {
	name: "UserProfile",
	props: {
		UserProfile: Object,
	},
	data() {
		return {};
	},
};
</script>

<style>
.closeButton {
	border-radius: 20%;
	background-color: #a42b2b;
	color: #b6b6b6;
	border-color: #a42b2b;
}
.bounce-enter-active {
	animation: bounce-in 0.5s;
}
.bounce-leave-active {
	animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
	0% {
		transform: scale(0);
	}
	50% {
		transform: scale(1.25);
	}
	100% {
		transform: scale(1);
	}
}
</style>

