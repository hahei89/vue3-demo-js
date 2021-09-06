import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// 引入element-plus插件
import ElemnentPlusPlugin from './plugins/element-plugin.js'

const app = createApp(App)

app.use(ElemnentPlusPlugin).use(router).mount('#app')
