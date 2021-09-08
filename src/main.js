import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/icon.css'

// 引入element-plus插件
import ElemnentPlusPlugin from './plugins/element-plugin.js'

const app = createApp(App)

app.use(ElemnentPlusPlugin).use(store).use(router).mount('#app')
