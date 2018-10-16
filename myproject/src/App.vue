<template>
  <div id="app">
    <h1> {{ title }} </h1>
  
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      title: 'My first Vue App'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
  text-align: center;
}


</style>
