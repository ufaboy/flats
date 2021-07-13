<template>
  <div class="flat-wrapper">
    <div class="flat">
      <div class="cover"
           style="background-image: url(&quot;http://bosscode.monoame.com/20170323_vue_comp/img/room%20(1).jpg&quot;); background-color: rgb(85, 85, 85);">
      </div>
      <div class="info">
        <span class="title">{{flat.attributes.title}}</span>
        <span class="square">{{flat.attributes.area}}</span>
        <span class="square">{{flat.attributes.address}}</span>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FlatComponent",
  components: {},
  props: {
    flat: Object
  },
  data: () => ({}),
  computed: {

  },
  watch: {},
  created() {
  },
  mounted() {
  },
  methods: {
    calcAddress() {
      return `${this.flat.attributes.address}`
    }
  },
}
</script>

<style scoped lang="scss">
.flat-wrapper {

}
</style>