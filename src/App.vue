<template>
  <div id="app" class="app">
    <header class="header"></header>
    <main class="main">
      <flat-component v-for="flat of flatsArray" :key="flat.id" :flat="flat" />
    </main>
    <footer class="footer"></footer>
  </div>
</template>

<script>
import getData from "./services/api";
import FlatComponent from "./components/FlatComponent";
import {mapState} from 'vuex';

export default {
  name: 'App',
  components: {
    FlatComponent
  },
  data: () => ({

  }),
  computed: {
    ...mapState(['flatsArray'])
  },
  created() {
    this.loadData()
  },
  methods: {
    async loadData() {
      const result = await getData()
      if (result) {
        await this.$store.dispatch('setFlatsArray', result.response)
      }
    }
  }
}
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
}
html, body {
  height: 100%;
  width: 100%;
}
html {
  font-size: 18px;
  font-family: "Roboto Light";
}
.app {

}
</style>
