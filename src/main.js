import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'; // 默认主题
import '../theme/element-#2D5FE7/index.css' // 使用自定义主题
/* 注册全局指令 */
import directive from './utils/directive';
Vue.use(directive)
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'
Vue.use(VueAwesomeSwiper, /* { default options with global component } */)
Vue.config.productionTip = false;
Vue.use(ElementUI);
// 批量引入组件
import components from './components'
Vue.use(components)

// 引入全局样式
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
