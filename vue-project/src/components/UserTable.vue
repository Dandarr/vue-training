<script>
import { RouterLink } from "vue-router";
import UserProfile from "../components/UserProfile.vue";

import axios from "axios";
export default {
  name: "UserTable",
  data() {
    return {
      UsersData: [],
      error: String,
      loading: Boolean,
      showProfile:Boolean(false),
      selectedUserId: 0
    };
  },
  props: {
    show: Boolean,
  },
  components:{
    UserProfile
  },
  methods: {
    async fetchContacts() {
      this.UsersData = [];
      this.loading = true;
      try {
        this.UsersData = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        ).then((response) => response.json());
      } catch (error) {
        this.error = error;
      } finally {
        this.loading = false;
      }
    },
  

  },
  created() {
    this.fetchContacts();
  },
};
</script>

<template>
  <div class="container">
    <p v-if="loading">Loading contacts...</p>
    <p v-if="error">{{ error.message }}</p>
    <h3>Users:</h3>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">City</th>
          <slot v-if="showProfile">
            <th scope="col">Website</th>
            <th scope="col">Phone number</th>
            <th scope="col">Street</th>
            <th scope="col">Close / Open</th>
          </slot>
          <!-- pass down slot content -->
        </tr>
      </thead>
      <tbody v-for="User in UsersData" v-bind:key="User.id">
        <td scope="row" data-id="{{User.id}}">{{ User.id }}</td>
        <td scope="row">{{ User.name }}</td>
        <td scope="row">{{ User.email }}</td>
        <td scope="row">{{ User.address.city }}</td>
        
        <slot v-if="showProfile">
          <UserProfile :UserProfile="User" />
        </slot>
        <td scope="row">
          <button @click="showProfile = !showProfile; selectedUserId = User.Id;" class="closeButton">x</button>
        </td>
      </tbody>
      
    </table>
  </div>
</template>

<style>
.UserTable-UserProfileButton {
  border-radius: 15px;
  color: #ffffff;
  border-color: #309975;
  background-color: #58b368;
  width: fit-content;
}
</style>