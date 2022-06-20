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
        path: '/form/request/:id',
        name: 'RequestForm',
        component: () => import('@/views/Form/RequestForm.vue')
      },
      {
        path: '/form/assessment/:id',
        name: 'AssessmentForm',
        component: () => import('@/views/Form/AssessmentForm.vue')
      },
      {
        path: '/form/monitoring/:id',
        name: 'MonitoringForm',
        component: () => import('@/views/Form/MonitoringForm.vue')
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
      },
      {
        path: '/settings/center-form/:id',
        name: 'CenterForm',
        component: () => import('@/views/Settings/CenterForm.vue')
      },
      {
        path: '/settings/hospital-list',
        name: 'HospitalList',
        component: () => import('@/views/Settings/HospitalList.vue')
      },
      {
        path: '/settings/hospital-form/:id',
        name: 'HospitalForm',
        component: () => import('@/views/Settings/HospitalForm.vue')
      },
      {
        path: '/settings/user-list',
        name: 'UserList',
        component: () => import('@/views/Settings/UserList.vue')
      },
      {
        path: '/settings/user-Form/:id',
        name: 'UserForm',
        component: () => import('@/views/Settings/UserForm.vue')
      },
    ]
  },
  {
    path: '/account',
    name: 'Account',
    component: require("@/layout/DefaultLayout.vue").default,
    children: [
      {
        path: '',
        name: 'MyAccount',
        component: () => import('@/views/Account/MyAccount.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router