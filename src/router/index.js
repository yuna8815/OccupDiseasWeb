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
      {
        path: "/auth/signup",
        name: "Signup",
        component: () => import ("@/views/Auth/Signup.vue")
      },
    ]
  },
  {
    path: '/form',
    name: 'Form',
    component: require("@/layout/DefaultLayout.vue").default,
    children: [
      {
        path: '/form/inbox',
        name: 'Inbox',
        component: () => import('@/views/Form/InboxList.vue')
      },
      {
        path: '/form/outbox',
        name: 'Outbox',
        component: () => import('@/views/Form/OutboxList.vue')
      },
      {
        path: '/form/request',
        name: 'RequestForm',
        component: () => import('@/views/Form/RequestForm.vue')
      }
    ]
  },
  {
    path: '/settings',
    name: 'Settings',
    component: require("@/layout/DefaultLayout.vue").default,
    children: [
      {
        path: '/settings/center-list',
        name: 'CenterList',
        component: () => import('@/views/Settings/CenterList.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router