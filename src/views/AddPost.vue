<template>
<div class="add-post">
    <div class="post-header">
        <span><h3>Create a post:</h3></span>
        <p>Add your name, and then write what you do, what you want people to know, or just how you feel</p>
        <p>Include your contact info if you want people to reach out to you</p>
    </div>
    
  <form class="post-form" v-if="creating" @submit.prevent="addPost">
    <input class="post-name" v-model="name" placeholder="Name">
    <p></p>
    <textarea class="post-content" v-model="post" placeholder="type here"></textarea>
    <br />
    <input class="post-contact" v-model="contact" placeholder="contact">
    <br>
    <button class="post-submit" type="submit">Submit</button>
  </form>
  <div v-else>
    <p>Thank you for submitting a post!</p>
    <p><a @click="toggleForm" href="#">Post something else</a></p>
  </div>
</div>
</template>

<script>
export default {
  name: 'AddPost',
  data() {
    return {
      creating: true,
      name: '',
      post: '',
      contact: '',
    }
  },
  methods: {
    toggleForm() {
      this.creating = !this.creating;
    },
    addPost() {
      this.$root.$data.addPost(this.name, this.post, this.contact);
      this.name = "";
      this.post = "";
      this.contact= "";
      this.creating = false;
    },
  }
}
</script>

<style scoped>

input {
  font-size: 1.2em;
  height: 30px;
  width: 400px;
  background: #e1bee721;
  border: none;
  border-radius: 4px;
  color: #cecece;
}

textarea {
  font-size: 1.6em;
  width: 100%;
  max-width: 500px;
  height: 100px;
  background: #e1bee721;
  border: none;
  border-radius: 4px;
  color: #cecece;
}

button {
  margin-top: 20px;
  font-size: 1.2em;
  background-color: #7f6085;
  border: none;
  border-radius: 4px;
  max-width: 70%;
  justify-self: center;
  margin-top: 0;
}
button:hover {
    background-color: #af8eb5;
}
.add-post {
    display: flex;
    flex-flow: column nowrap;
    align-content: center;
    justify-content: center;
}
.post-header {
    font-size: 25px;
    margin: 15px;
    padding: 15px;
    background: #e1bee709;
    color:#cecece;
}
.post-form {
    display: grid;
    justify-content: center;
    align-content: center;
    background: #e1bee709;
    margin: 15px;
    padding: 15px;
}

</style>