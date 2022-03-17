<template>
  <div id="app">
    <NavBar/>
<!--    <img alt="Vue logo" src="./assets/logo.png">-->
<!--    <AllFriends :friends="friends" @delete="deleteFriend"/>-->
<!--    <OnlineFriends :friends="friends"/>-->
    <Hook/>
  </div>
</template>

<script>
import NavBar from "@/components/Navbar";
import OnlineFriends from "@/components/OnlineFriends";
import AllFriends from "@/components/AllFriends";
import Hook from "@/components/Hook";
export default {
  name: 'App',
  components: {
    NavBar,
    OnlineFriends,
    AllFriends,
    Hook
  },
  data()
  {
    return{
      friends: [
        {name: 'ADFDFDSFAF', online: true},
        {name: 'BDSAFADSFD', online: false},
        {name: 'CBKLLKNV', online: true},
        {name: 'DTREPJNKV', online: false},
        {name: 'ERJFRNDKLFN', online: true},
        {name: 'FFREOPJFDNKALFN', online: false},
      ]
    }
  },
  methods : {
    deleteFriend(payload){
      this.friends = this.friends.filter(friend=>{
        return friend.name!=payload.name
      })
    }
  }
  }
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
