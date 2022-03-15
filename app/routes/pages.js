export default [
  {
    path: '/page',
    component: () => import('../layouts/Authenticated.vue'),
    children: [
      {
        path: '/home',
        component: () => import('../pages/auth/Login.vue'),
        meta: {
          title: 'Home',
        }
      }
    ]
  }
]
