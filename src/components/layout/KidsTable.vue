<template>
  <div id="kids-time-table" class="section scrollspy">
    <div id="header-container">
      <h2 class="header">Kid's Classes</h2>
      <div class="header-highlight"></div>
    </div>
    <table class=" striped">
      <thead>
        <tr>
          <th class="center-align" v-for="day in days" :key="day">{{ day }}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td></td>
          <td></td>
          <td class="center-align indigo lighten-3 z-depth-2">
            <p>Kids(3-5) Class</p>
            <p>13:40 - 14:30</p>
          </td>
          <td></td>
          <td></td>
          <td class="center-align indigo lighten-3 z-depth-2">
            <p>Kids(3-5) Class</p>
            <p>10:30 - 11:30</p>
          </td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td class="center-align green lighten-2 z-depth-2">
            <p>Kids(6-12) Class</p>
            <p>14:30 - 15:45</p>
          </td>
          <td></td>
          <td></td>
          <td class="center-align green lighten-2 z-depth-2">
            <p>Kids(6-12) Class</p>
            <p>11:30 - 13:00</p>
          </td>
        </tr>
        <tr>
          <td v-for="day in days" :key="day"></td>
        </tr>
        <tr>
          <td v-for="day in days" :key="day"></td>
        </tr>
        <tr>
          <td v-for="day in days" :key="day"></td>
        </tr>
        <tr>
          <td v-for="day in days" :key="day"></td>
        </tr>
        <tr>
          <td v-for="day in days" :key="day"></td>
        </tr>
        <tr>
          <td v-for="day in days" :key="day"></td>
        </tr>
        <tr></tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    };
  }
};
</script>

<style scoped>
td.center-align {
  font-size: small;
  border-radius: 10px;
}

td p {
  padding: 0;
  margin: 0;
  font-weight: bold;
}

h2.header {
  margin-bottom: 0;
  letter-spacing: 1px;
  font-size: 3.5rem;
}
.header {
  font-weight: bold;
  margin: 2rem;
}
#header-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 5rem;
}
.header-highlight {
  width: 20rem;
  border-top: 4px rgb(255, 166, 0) solid;
}
</style>
