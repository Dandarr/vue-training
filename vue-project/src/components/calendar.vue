<template>
  <div>
    <label>Calendar</label>
    <label>{{SelectedMonth}}</label>
    <button>Previous</button>
    <button>Next</button>
    <table>
      <th>M</th>
      <th>T</th>
      <th>W</th>
      <th>T</th>
      <th>F</th>
      <th>S</th>
      <th>S</th>
    </table>
  </div>
</template>

<script>
export default{
  name: 'datetime',
  components: {
    //datetime: Datetime
  }
};

</script>