import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { register } from 'swiper/element/bundle';
//@ts-ignore
import Vue3VideoPlayer from '@cloudgeek/vue3-video-player';
import '@cloudgeek/vue3-video-player/dist/vue3-video-player.css';

// register Swiper custom elements
register();

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Vue3VideoPlayer)

app.mount('#app')
