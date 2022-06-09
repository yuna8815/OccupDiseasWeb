import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Auth',
    component: require("@/layout/LoginLayout.vue").default,
    redirect: "/auth/login",
    children: [
      {
        path: "/auth/login",
        name: "Login",
        component: () => import ("@/views/Auth/Login.vue")
      },
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router