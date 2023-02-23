import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { register } from 'swiper/element/bundle';
import App from './App.vue'
import router from './router'
import { i18n } from '@/i18n'
//@ts-ignore
import Vue3VideoPlayer from '@cloudgeek/vue3-video-player';
import '@cloudgeek/vue3-video-player/dist/vue3-video-player.css';

// register Swiper custom elements
register();

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Vue3VideoPlayer)
app.use(i18n)

// Global variables
app.provide('URL_PATH', 'https://strapi.claes-work.de')

app.mount('#app')
