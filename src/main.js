import './assets/css/core-styles.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

//vuetify
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import FontAwesomeIcon from "./font-awesome-icons.js";

const vuetify = createVuetify({
    components,
    directives,
  });

const app = createApp(App);


app.use(router)
app.use(vuetify)
app.component("FontAwesomeIcon", FontAwesomeIcon)
app.mount('#app')
