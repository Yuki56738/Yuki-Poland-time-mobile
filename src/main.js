import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import axios from 'axios' //追記
import VueAxios from 'vue-axios' //追記


createApp(App).use(store, VueAxios, axios).mount('#app')
