<template>
  <div class="home">
    <div v-for="post in posts" v-bind:key="post.id">
      <div class="post">
        <div class="text">
          <p class="user-name">{{ post.name }}</p>
          <p>{{ post.text }}</p>
          
          <p>{{ post.contact }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  data() {
    return {}
  },
  computed: {
    posts() {
      return this.$root.$data.getPosts();
    }
  }
}
</script>

<style scoped>
.home {
  width: calc(100% - 30%);
  margin: auto;
}
.post {
  background-color: #e1bee710;
  padding: 15px;
  margin: 15px;
  border-radius: 4px;
  
}
.user-name {
  justify-self: flex-start;
  border-bottom: solid black 1px;
  padding: 5px;
  padding-bottom: 10px;
}
</style>
