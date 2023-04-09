import { createApp } from 'vue'
import App from './App.vue'
import './css/index.css'
import './css/custom.css'

/* font awesome */
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faInstagram, faMedium, faTwitter, faSpotify, faSoundcloud, faGithub, faUnsplash } from '@fortawesome/free-brands-svg-icons'
library.add(faUserSecret, faLinkedin, faInstagram, faMedium, faTwitter, faSpotify, faSoundcloud, faGithub, faUnsplash)

/* typing animation */
import VueWriter from "vue-writer";

createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(VueWriter).mount('#app')