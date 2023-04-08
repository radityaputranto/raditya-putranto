import { createApp } from 'vue'
import App from './App.vue'
import './css/index.css'

/* font awesome */
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faInstagram, faMedium, faTwitter, faSpotify, faSoundcloud } from '@fortawesome/free-brands-svg-icons'
library.add(faUserSecret, faLinkedin, faInstagram, faMedium, faTwitter, faSpotify, faSoundcloud)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')