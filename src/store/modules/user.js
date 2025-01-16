import { getToken, removeToken, setToken } from '@/utils/auth'

const state = {
  // 从缓存中读取初始值
  token: getToken()
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
  }
}

const actions = {
  // context上下文，传入参数
  async login(context, data) {
    console.log(data)
    // todo: 调用登录接口
    // const token = await login(data)
    // 返回一个token 123456
    context.commit('setToken', 123456)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
