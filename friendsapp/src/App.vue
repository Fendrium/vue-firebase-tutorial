<template>
  <div id="app">
    <h1> {{ title }} </h1>
    <Navbar />
    <AllFriends />
    <OnlineFriends />
  </div>
</template>

<script>
// Nesting Navbar component into the main App component
import Navbar from "./Navbar";
import AllFriends from "./AllFriends";
import OnlineFriends from "./OnlineFriends";

export default {
  name: "app",
  components: {
    // Line below is same as Navbar: Navbar
    Navbar,
    AllFriends,
    OnlineFriends
  },
  data() {
    return {
      title: "My first Vue App"
    };
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1,
h2 {
  font-weight: normal;
  text-align: center;
}
</style>
