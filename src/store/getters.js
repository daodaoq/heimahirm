const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  token: state => state.user.token,
  avatar: state => state.user.staffPhoto || '',
  name: state => state.user.username || '宋君奎',
  userId: state => state.user.userInfo.userId
}
export default getters
