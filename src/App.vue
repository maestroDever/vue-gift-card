<template>
  <v-app id="app">
    <router-view/>
  </v-app>
</template>
<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
@import '@/assets/scss/_variables.scss';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
