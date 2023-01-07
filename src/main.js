import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

/*
   Fontawesome css
*/

import '../node_modules/@fortawesome/fontawesome-free/css/all.css'

/*
   Bootstarp Css and Js
*/

import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'

/*
  Global Style Sheet
*/

import './style.css'


createApp(App).use(router).mount('#app')
