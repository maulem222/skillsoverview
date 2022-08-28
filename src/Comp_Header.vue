<template>
  <div>
    <img src="./assets/asp.net.png" />
    <img src="./assets/asp.net mvc 2.png" />
    <img src="./assets/nodejsexpress.jpg" />
    <img src="./assets/vuejs.png" />
    <img src="./assets/react.png" />
  </div>
</template>

<script>
  export default {
    name: 'Comp_Header',
    props: [],
    data() {
      return {
        expanded: true
      }
    },
    computed: {
    },
    methods: {
    }
  }
</script>

<style scoped>

  img {
    height: calc(24vh - 2px);
  }
</style>
