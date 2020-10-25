import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from './components/Main.vue'
import Article from './components/Article.vue'

Vue.use(VueRouter)

export const Router = new VueRouter({
  routes: [
    { path: '/', component: Main },
    { path: '/article', component: Article },
  ],
})
