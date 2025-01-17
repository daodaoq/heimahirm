import { getToken, removeToken, setToken } from '@/utils/auth'
import { login, getUserInfo } from '@/api/user'

const state = {
  // 从缓存中读取初始值
  token: getToken(),
  userInfo: {} // 用于存储用户信息
}

const mutations = {
  setToken(state, token) {
    state.token = token
    // 同步到缓存
    setToken(token)
  },
  removeToken(state) {
    // 删除 Vuex 中的 token
    state.token = null
    removeToken()
  },
  setUserInfo(state, userInfo) {
    state.userInfo = userInfo // 将用户信息存储到 state 中
  },
  clearUserInfo(state) {
    state.userInfo = {} // 清空用户信息
  }
}

const actions = {
  // 登录并保存 token
  async login(context, data) {
    try {
      const token = await login(data) // 调用登录接口获取 token
      context.commit('setToken', token) // 保存 token
    } catch (error) {
      console.error('登录失败:', error)
      throw error
    }
  },
  // 获取用户信息
  async getUserInfo(context) {
    try {
      const result = await getUserInfo() // 调用接口获取用户信息
      context.commit('setUserInfo', result) // 保存用户信息到 Vuex
    } catch (error) {
      console.error('获取用户信息失败:', error)
      throw error
    }
  },
  // 退出登录
  async logout(context) {
    try {
      context.commit('removeToken') // 清空 token
      context.commit('clearUserInfo') // 清空用户信息
    } catch (error) {
      console.error('退出登录失败:', error)
      throw error
    }
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
