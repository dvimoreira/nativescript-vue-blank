export default [
  {
    path: '/',
    component: () => import('../layouts/Unauthenticated.vue'),
    children: [
      {
        path: '',
        component: () => import('../pages/auth/Login.vue'),
        meta: {
          title: 'Login',
        }
      }
    ]
  }
]
