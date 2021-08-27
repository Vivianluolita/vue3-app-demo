
import { createApp } from 'vue'
import App from './App.vue'
import router from './route'
import './styles/index.css'
import 'vant/lib/index.css'; // 全局引入样式
import { Button} from 'vant'
// vant按需加载
let app = createApp(App)
app.use(router)
app.use(Button)
// app.provide('interact', interact)


app.mount('#app')