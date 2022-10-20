import { createApp } from 'vue'
import router from './routes'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(router)

app.use(router)
app.mount('#app')