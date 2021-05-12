<template>
  <div id="time-table" class="section scrollspy">
    <div id="header-container">
      <h2 class="header">Adult Classes</h2>
      <div class="header-highlight"></div>
    </div>
    <table class="striped hide-on-small-and-down">
      <thead>
        <tr>
          <th class="center-align" v-for="day in days" :key="day">{{day}}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="center-align orange lighten-1 z-depth-2">
            <p>BJJ Adults</p>
            <p>12:00 - 13:00</p>
          </td>
          <td></td>
          <td class="center-align orange lighten-1 z-depth-2">
            <p>BJJ Adults</p>
            <p>12:00 - 13:00</p>
          </td>
          <td></td>
          <td class="center-align orange lighten-1 z-depth-2">
            <p>BJJ Adults</p>
            <p>12:00 - 13:00</p>
          </td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td class="center-align orange lighten-1 z-depth-2">
            <p>BJJ Adults</p>
            <p>13:30 - 15:00</p>
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
          <td class="center-align orange darken-2 z-depth-2">
            <p>BJJ Basics</p>
            <p>19:00 - 20:00</p>
          </td>
          <td class="center-align orange darken-4 z-depth-2">
            <p>NoGi Adult</p>
            <p>19:30 - 21:00</p>
          </td>
          <td class="center-align orange darken-2 z-depth-2">
            <p>BJJ Basics</p>
            <p>19:00 - 20:00</p>
          </td>
          <td class="center-align orange lighten-1 z-depth-2">
            <p>BJJ Adults</p>
            <p>19:30 - 21:00</p>
          </td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td class="center-align orange lighten-1 z-depth-2">
            <p>BJJ Adults</p>
            <p>20:00 - 22:00</p>
          </td>
          <td></td>
          <td class="center-align orange lighten-1 z-depth-2">
            <p>BJJ Adults</p>
            <p>20:00 - 22:00</p>
          </td>
          <td></td>
          <td class="center-align orange lighten-1 z-depth-2">
            <p>BJJ Adults</p>
            <p>20:00 - 22:00</p>
          </td>
          <td></td>
        </tr>
      </tbody>
    </table>
    <img
      class="hide-on-med-and-up materialboxed"
      src="/img/icon-time-table.png"
    />
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
img {
  width: 100%;
  margin: 2px;
  height: 100%;
}
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
  border-top: 4px orange solid;
}
</style>
