import axios from 'axios'
import store from '@/store'
import { Message } from 'element-ui'
import router from '@/router'

const service = axios.create({
  // baseURL: process.env.VUE_APP_BASE_API,
  baseURL: '/api',
  timeout: 100000
})

// 请求拦截器
// 两个回调函数，成功走第一个，失败走第二个
service.interceptors.request.use((config) => {
  // 注入token
  // store.getters.token => 请求头里面
  if (store.getters.token) {
    config.headers.Authorization = `Bearer ${store.getters.token}`
  }
  return config
}, (error) => {
  // 失败执行的promise
  return Promise.reject(error)
})

// 响应拦截器
service.interceptors.response.use((response) => {
  const { data, message, success } = response.data // 默认json格式
  if (success) {
    return data
  } else {
    Message({ type: 'error', message })
    return Promise.reject(new Error(message))
  }
}, async(error) => {
  if (error.response.status === 401) {
    Message({ type: 'warning', message: 'token超时了' })
    // 说明token超时了
    await store.dispatch('user/logout') // 调用action 退出登录
    //  主动跳到登录页
    router.push('/login') // 跳转到登录页
    return Promise.reject(error)
  }
  // error.message
  Message.error(error.message)
  return Promise.reject(error)
})
export default service
