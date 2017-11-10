// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import store from '@/store/store';
import axios from "axios";
import $ from 'jquery';
import cryptoEncoding from '@/utils/cryptoEncoding';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false

Vue.use(ElementUI)

//允许跨域cookie操作
axios.defaults.withCredentials = true;
//拦截器
axios.interceptors.request.use((config)=> {    

  // 这里的config包含每次请求的内容
  //添加时间戳
  var timestamp = cryptoEncoding(new Date().getTime().toString())
  config.headers.common["timestamp"] = timestamp
  console.log(config)
  return config;
}, (err)=> {
  return Promise.reject(err);
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
