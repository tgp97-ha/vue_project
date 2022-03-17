<template>
  <div>
    <h1 class="font-weigh-bold"> Post</h1>
    <div class="row justify-content-center py-3">
      <div class="col-6">
        <input type="text" v-model='searchTitle' class="form-control" name="" id="" placeholder="Search Title">
      </div>
    </div>
<!--    <div v-for="post in filterSearch" :key="post.id">-->
      <div class="row justify-content-center">
        <div class="col-7">
          <table class="table table-bordered table-striped">
            <thead>
            <tr class="align-middle">
              <th class="col-2">Title</th>
              <th class="col-10">Body</th>
            </tr>
            </thead>
            <tbody >
            <tr v-for="post in filterSearch" :key="post.id" class="align-middle">
              <td>{{ post.title }}</td>
              <td>{{ post.body }}</td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
<!--      <div class="row justify-content-center">-->
<!--        <div class="col-6">-->
<!--          <h2>{{ post.title }}</h2>-->
<!--          <p>{{ post.body | snippet }}</p>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
    <button @click="changeTitle">Click Me!!</button>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Hook",
  data() {
    return {
      title: 'Hook part',
      posts: [],
      searchTitle: '',
    }
  },
  methods: {
    changeTitle() {
      this.title = 'New Title'
    }
  },
  computed: {
    filterSearch() {
      return this.posts.filter(element => {
        return element.title.match(this.searchTitle)
      })
    }
  },
  created() {
    axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
          this.posts = response.data
        })
        .catch(error => alert(error))
  }
}
</script>

<style scoped>
h1 {
  color: red;
  text-align: center;
}
</style>