import Vue from 'vue'
import { Store } from './Store.js'
import { Router } from './Router.js'
import App from './App.vue'
import 'reset-css'
import moment from 'moment'
moment.locale('ru')

new Vue({
  el: '#app',
  render: (h) => h(App),
  router: Router,
  store: Store,
})
