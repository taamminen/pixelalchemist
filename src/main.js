import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js'

let app = createApp(App)

app.config.globalProperties.nigredo = 0
app.config.globalProperties.albedo = 0
app.config.globalProperties.rubedo = 0


app.config.globalProperties.symbols = {
    
}

app.use(router).mount('#app')
