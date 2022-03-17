<template>
    <div>
      <nav>
        <ul>
          <li>Home</li>
          <li>Post</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </div>
</template>

<script>
export default {
  name: "NavBar",
  data(){
    return {

    }
  }
}
</script>

<style>
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