<template>
  <div id="app">
    <NavBar/>
    <img alt="Vue logo" src="./assets/logo.png">
    <AllFriends :friends="friends"/>
    <OnlineFriends :friends="friends"/>
  </div>
</template>

<script>
import NavBar from "@/components/Navbar";
import OnlineFriends from "@/components/OnlineFriends";
import AllFriends from "@/components/AllFriends";
export default {
  name: 'App',
  components: {
    NavBar,
    OnlineFriends,
    AllFriends
  },
  data()
  {
    return{
      friends: [
        {name: 'A', online: true},
        {name: 'B', online: false},
        {name: 'C', online: true},
        {name: 'D', online: false},
        {name: 'E', online: true},
        {name: 'F', online: false},
      ]
    }
  }}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
