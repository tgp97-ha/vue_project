<template>
  <div>
    <h1>
      {{ title }}
    </h1>
    <br>
    <button @click="changeTitle">Change</button>
  </div>

</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Hook",
  data(){
    return {
        title: 'Hook part'
    }
  },
  methods:{
    changeTitle(){
      this.title= 'New Title'
    }
  },
  beforeCreate() {
    alert('beforeCreate')
  },
  created() {
    alert('created')
  },
  beforeMount() {
    alert("beforeMount")
  },
  mounted() {
    alert("mounted")
  },
  beforeUpdate() {
    alert("beforeUpdate")
  },
  updated() {
    alert("updated")
  },


}
</script>

<style scoped>

</style>