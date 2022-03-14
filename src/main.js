import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

let data = {
  currentID: 2,
  posts: [{
    id: 1,
    text: 'I love the outdoors, and the smell of rain',
    name: 'Emma Khul'
  }],
  getPosts() {
    return this.posts;
  },
  addPost(name, text) {
    this.posts.push({
      id: this.currentID,
      name: name,
      text: text
    });
    this.currentID += 1;
  }
}

new Vue({
  router,
  data: data,
  render: h => h(App)
}).$mount('#app')
