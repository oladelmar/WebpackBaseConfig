//import all styles
import './assets/styles/main.sass'

//import vue.js
import Vue from 'vue'

//import main component
import App from './components/App.vue'

//render applications
new Vue({
  el: '#app',
  render: h => h(App)
})
