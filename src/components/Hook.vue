<template>
  <div>
    <h1 class="font-weigh-bold"> Post</h1>
    <div v-for="post in posts" :key="post.id">
      <div class="row justify-content-center">
        <div class="col-6">
          <h2>{{post.title}}</h2>
          <p>{{post.body}}</p>
        </div>
      </div>
    </div>
    <button @click="changeTitle">Click Me!!</button>
  </div>

</template>

<script>
import axios from 'axios'
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Hook",
  data(){
    return {
        title: 'Hook part',
        posts: []
    }
  },
  methods:{
    changeTitle(){
      this.title= 'New Title'
    }
  },
  created(){
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then( response=>{
      this.posts = response.data
    })
    .catch( error=> alert(error))
  }
}
</script>

<style scoped>
  h1{
    color: red;
    text-align: center;
  }
</style>