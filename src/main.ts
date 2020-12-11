import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import 'element-plus/lib/theme-chalk/index.css';
import installElementPlus from './plugins/element';

const app = createApp(App);
installElementPlus(app);
// app.config.globalProperties.$message;
//app.config.globalProperties.$message = ElMessage;
// app.provide('$message', ElMessage)
app.use(store);
app.use(router);
app.mount('#app');
