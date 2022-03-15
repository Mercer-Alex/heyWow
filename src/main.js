import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

let data = {
  currentID: 2,
  posts: [{
    id: 1,
    text: 'I love the outdoors, and the smell of rain. I can show you great hikes',
    name: 'Emma Khul',
    contact: '555-555-hike'
  }],
  getPosts() {
    return this.posts;
  },
  addPost(name, text, contact) {
    this.posts.push({
      id: this.currentID,
      name: name,
      text: text,
      contact: contact,
    });
    this.currentID += 1;
  }
}

new Vue({
  router,
  data: data,
  render: h => h(App)
}).$mount('#app')
