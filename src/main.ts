import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUser, faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Tambahkan icon ke library
library.add(faUser, faCoffee)
createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
