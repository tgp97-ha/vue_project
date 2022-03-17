<template>
  <div id="app">
    <NavBar/>
    <img alt="Vue logo" src="./assets/logo.png">

    <HelloWorld msg="Truong Gia Phuc"/>
    <hr class="mt-2">
    <TestComponent msg="Section 2"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import TestComponent from './components/TestComponent.vue'
import NavBar from "@/components/Navbar";
export default {
  name: 'App',
  components: {
    HelloWorld, TestComponent, NavBar
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
