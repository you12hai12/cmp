import Vue from 'vue'
import App from './App.vue'
import User from './components/User.vue'
import echarts from 'echarts'
import moment from 'moment'
import 'moment/locale/zh-cn'
moment.locale('zh-cn')

Vue.prototype.$echarts = echarts;

new Vue({
  el: '#app',
  render: h => h(App)
})
