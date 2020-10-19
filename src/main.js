import { createApp } from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue';//全局引用antd
import 'ant-design-vue/dist/antd.css';
// import { Button } from 'ant-design-vue';
/* 
  import { Button, message } from 'ant-design-vue'
  按需引用 => app.use(Button,message)
:FIXME: 或者:
  app.use(Button);
  app.config.globalProperties.$message = message;
*/
// createApp(App).mount('#app')
const app = createApp(App)
app.config.globalProperties.foo = 'bar'//vue3.X 配置全局属性的写法

/* 
  2.X配置全局属性的写法
  Vue.prototype.$http = () => {}

  3.X配置全局属性的写法
  const app = Vue.createApp({})
  app.config.globalProperties.$http = () => {}
*/
app.config.productionTip = false;
app.use(Antd);
app.mount('#app')
