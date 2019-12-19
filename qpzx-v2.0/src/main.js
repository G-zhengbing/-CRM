import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'
import echarts from 'echarts'
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
import './uilt/http/index'

Vue.use(ViewUI)

Vue.prototype.$echarts = echarts

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})
