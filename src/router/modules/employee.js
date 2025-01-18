import layout from '@/layout/index.vue'
export default {
  path: '/employee',
  component: layout,
  children: [{
    path: '',
    name: 'employee',
    component: () => import('@/views/employee/index.vue'),
    meta: {
      title: '员工',
      icon: 'people'
    }
  }]
}
