<template>
  <v-app id="app">
      <router-view/>
  </v-app>
</template>

<style lang="scss">

html, body {
  background-color: #2c3e50;
}

#app {
  position: relative;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  //color: #ddd;
}

h1 {
  font-size: 1.25rem;
  font-weight: 500;
}

</style>
