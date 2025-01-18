import layout from '@/layout/index.vue'
export default {
  path: '/permission',
  component: layout,
  children: [{
    path: '',
    name: 'permission',
    component: () => import('@/views/permission/index.vue'),
    meta: {
      title: '权限',
      icon: 'lock'
    }
  }]
}
