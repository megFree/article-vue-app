import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const Store = new Vuex.Store({
  state: {
    username: '',
    password: '',
    isAuth: false,
    comments: [],
  },
  mutations: {
    signIn(state, user) {
      this.state.username = user.username
      this.state.password = user.password
      this.state.isAuth = true
    },
    setComments(state, comments) {
      this.state.comments = comments
    },
    addComment(state, comment) {
      this.state.comments.push({
        id: this.state.comments.length,
        user: comment.user,
        text: comment.text,
        date: comment.date,
      })
    },
  },
})
