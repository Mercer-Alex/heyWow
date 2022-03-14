<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div v-for="post in posts" v-bind:key="post.id">
      <hr>
      <div class="post">
        <div class="text">
          <p>{{ post.text }}</p>
          <p><i>-- {{ post.name }}</i></p>
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
