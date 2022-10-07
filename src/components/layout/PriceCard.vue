<template>
  <section class="z-depth-1" :class="cardStyle">
    <header>
      <h1>{{ data.title }}</h1>
    </header>

    <main>
      <ul>
        <li>{{ data.price }}€</li>
      </ul>
    </main>

    <div class="actions">
      <button @click="contact">contact</button>
    </div>
  </section>
</template>

<script>
export default {
  props: ["data"],
  computed: {
    cardStyle() {
      return this.data.style;
    }
  },
  methods: {
    contact() {
      return window.location.href = '#contact';
    }
  }
};
</script>

<style scoped>
section {
  border: 1px solid grey;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  min-height: 55vh;
  margin: 2px;
  width: 16vw;
  border-radius: 20px;
}
section.basic > header,
section.basic > .actions > button {
  background: orange;
}
section.basic > .actions > button:hover {
  background: #ffb11f;
}
section.reduced > header,
section.reduced > .actions > button {
  background: #ff4949;
}
section.reduced > .actions > button:hover {
  background: #ff2f2f;
}
section.kids > header,
section.kids > .actions > button {
  background: #4ef24e;
}
section.kids > .actions > button:hover {
  background: #23fa23;
}
header {
  width: 100%;
  padding: 1rem;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}
h1 {
  font-size: calc(2vw);
  text-transform: uppercase;
  margin: 0;
}
.actions {
  margin: 1rem;
}
li {
  font-size: 3em;
}
button {
  padding: 10px 20px;
  text-transform: uppercase;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

</style>
