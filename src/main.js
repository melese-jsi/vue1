import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueTelegram from 'vue-tg'

createApp(App).use(router).use(VueTelegram).mount('#app')
