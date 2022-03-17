<template>
  <div id="allfriends">
    <h2> All Friend </h2>
    <div v-for="(friend,index) in friends" :key="index">
          <span>{{friend.name}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "AllFriends",
  data (){
    return {

    }
  },
  props:{
    friends: Array
  }
}
</script>

<style scoped>
nav {
  text-align: center;
}

nav ul {
  padding: 0;
}

nav li {
  list-style-type: none;
  display: inline-block;
  margin: 0;
  padding: 8px;
}
</style>