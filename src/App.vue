<template>
  <div id="app" class="app">
    <header class="header"></header>
    <main class="main">
      <flat-component
          v-for="(flat, index) of flatsArray"
          :key="flat.id" :flat="flat"
          @toggle-like="toggleLikeOnFlat(index)" />
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
        const preparedFlatArray = this.prepareFlatArray(result.response)
        await this.$store.dispatch('setFlatsArray', preparedFlatArray)
      }
    },
    prepareFlatArray(rawArray) {
      for (const flat of rawArray) {
        flat.attributes.like = false
      }
      return rawArray
    },
    toggleLikeOnFlat(flatIndex) {
      this.$store.dispatch('toggleLikeOnFlat', flatIndex)
    }
  }
}
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
html, body {
  height: 100%;
  width: 100%;
}
html {
  font-size: 18px;
  font-family: "Roboto Light";
}
img {
  max-width: 100%;
  display: block;
}

input {
  outline: none;
}
.app {
  .main {
    display: flex;
    flex-flow: row wrap;
  }
  .flat-wrapper {
    margin: 0 1rem 1rem 0;
  }
}
@media only screen and (max-width: 690px) {
  .app {
    .flat-wrapper {
      margin: 0 0 1rem 0;
    }
  }
}

@media only screen and (max-width: 690px) and (orientation: landscape) {

}

@media only screen and (max-width: 690px) and (orientation: portrait) {

}
</style>
