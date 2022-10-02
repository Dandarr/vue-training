<template>

    <button @click="$emit('closeButton')" class="closeButton">x</button>
    <div>
        <input type="text" id="datepicker" @change="dateLookup">
        <tbody>
            <tr v-for="timelsot in AvailableAppointmentOnDateSelected"> 
            <td>{{AvailableAppointmentOnDateSelected.timelsot}}</td>
            </tr>
        </tbody>
        <button>save appointment</button>
    </div>
</template>

<script>
import { defineStore } from 'pinia';
import fs from 'fs';

function loadMockData(){
  fs.readFile("../TestData/Appointment_Mock_Data.csv", "utf8", function (err, AppointmentMockdata) {
    console.log(AppointmentMockdata);
  return AppointmentMockdata;
  });
}

export const UserDateStore = defineStore('DateTimeStore', {
  state: () => ({
    todoList: [],
    id: 0,
  }),
  actions: {
    addTodo(item) {
      this.todoList.push({ item, id: this.id++, completed: false })
    },
  },
})

  $( function() {
    $( "#datepicker" ).datepicker();
  } );

function dateLookup(){
    return 0;
}
/*
multiple ways of closing templates.
-Method 1 loop invoke remove
    - Add all element names that you want closed by that button into list.
    - invoke remove method in the export
    data: function(){
    return {
        CloseButton1items: ['item1','item2','item3']
        }
    },

    methods: {
        remove: function(close){
            ajaxCall.then(function(){
                this.CloseButton1items.$remove(close);//will remove the <tr> from the DOM 
            });
        }
    }

-Method 2
    -set an emit event on click of button
    -have event listener fire function
    -function deletes pretermined elements
*/

export default {
    name: 'Users',
    data: function(){
    return {
        CloseButton1items: ['item1','item2','item3']
        }
    },

    methods: {
        remove: function(close){
            ajaxCall.then(function(){
                this.CloseButton1items.$remove(close);//will remove the <tr> from the DOM 
            });
        }
    }
}
  </script>


  <style>
  .closeButton{
    border-radius: 20%;
    background-color: #a42b2b;
    color: #b6b6b6;
    border-color: #a42b2b;
  }
  </style>