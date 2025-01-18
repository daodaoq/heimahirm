import layout from '@/layout/index.vue'
export default {
  path: '/role',
  component: layout,
  children: [{
    path: '',
    name: 'role',
    component: () => import('@/views/role/index.vue'),
    meta: {
      title: '角色',
      icon: 'setting'
    }
  }]
}
