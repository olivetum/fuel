import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import '../node_modules/bulma/css/bulma.css'
import { library} from "@fortawesome/fontawesome-svg-core";

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


const app = createApp(App)

app.use(router)

app.mount('#app')
