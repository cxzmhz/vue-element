import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import store from "./store/index"
import router from "./router/index"
import directive from "./js/directive"
import "./style/common.less"

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(directive)


new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
