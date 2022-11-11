<template>
  <div>
    <label>Calendar</label>
    <label>{{SelectedMonth}}</label>
    <button>Previous</button>
    <button>Next</button>
    <table>
      <thead>
      <th id="0">S</th>
      <th id="1">M</th>
      <th id="2">T</th>
      <th id="3">W</th>
      <th id="4">T</th>
      <th id="5">F</th>
      <th id="6">S</th>
      </thead>
      <tbody v-for="$("#1")" v-if="">
      <!-- where column id matches getfirstdayofmonth() -->
      <a>{{n}}</a>
      <!-- </tbody> -->
    </table>
  </div>
</template>

<script>
export default{
  name: 'datetime',
  components: {
    //datetime: Datetime
  },
  computed: {
    getFirstDayOfMonth: function(year, month) {
    let fdom = new Date(year, month, 1);
    return fdom.getDay();
  },
    getDaysInMonth: function(currentlySelectedYear, currentlySelectedMonth) {
    return new Date(currentlySelectedYear, currentlySelectedMonth, 0).getDate();
  }
 }
};



//returns day 0 sun, 1 mon
let todaysDate = new Date();
let dayOfWeek = todaysDate.getDay(day);
let monthOfYear = todaysDate.getMonth();
let dateOfWeek = todaysDate.getDate();
let currentYear = todaysDate.getFullYear();
let firstDayofMonth = getFirstDayOfMonth(currentYear, monthOfYear)



console.log(dayOfWeek, todaysDate, monthOfYear, dateOfWeek, currentYear);
console.log(firstDayofMonth);

</script>