<template>
  <div id="onlinefriends">
    <h2> Online Friend </h2>
    <div v-for="(friend,index) in friends"  :key="index">
      <span v-if="friend.online">{{friend.name}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "OnlineFriends",
  data(){
    return{
    }
  },
  props: ['friends']
}
</script>

<style scoped>
nav{
  text-align:center;
}
nav ul{
  padding:0;
}
nav li{
  list-style-type: none;
  display: inline-block;
  margin:0;
  padding: 8px;
}
</style>