import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.filter('snippet', val=>{
  if( typeof (val) !== 'string' || val.length >150 ) return 'not good '
  else return val;
})
new Vue({
  render: h => h(App),
}).$mount('#app')
