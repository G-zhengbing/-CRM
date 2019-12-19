import Axios from "axios"
import Vue from 'vue'
import storeage from '../storage'

Vue.prototype.$axios = Axios
// 超时时间
// Axios.defaults.timeout = 5000
// http请求拦截器
Axios.interceptors.request.use(config => {
  return config
}, error => {
  alert("网络不给力,请稍后再试")
  return Promise.reject(error)
})
//   http响应拦截器
Axios.interceptors.response.use(data => {
  return data
}, error => {
  let nbsp = " "
  let arr = error.toString().split(nbsp)
  arr.find(i => {
    if (i == "403") {
      alert("当前的用户信息已过期，请重新登陆！")
      window.location.href = "/"
      storeage.clear();
    }
  })
  return Promise.reject(error)
})