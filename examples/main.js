import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 导入组件库
import XrUI from './../packages'
// 注册组件库
XrUI.install(Vue)
// console.log(xx)
// install(Vue)
// console.log(Vue)
console.log(XrUI.install.installed)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
