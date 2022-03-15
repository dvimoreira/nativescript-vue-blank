const Vue = require('nativescript-vue')
const VueRouter = require('vue-router')
Vue.use(VueRouter)

// ROUTES
import authRoutes from './routes/auth'
import pageRoutes from './routes/pages'

let routesArray = [
  ...authRoutes,
  ...pageRoutes
]

const router = new VueRouter({
  pageRouting: true,
  routes: routesArray
})

export default router
