import Vue from 'vue'
import VueRouter from 'vue-router'
import IndexView from '../views/IndexView.vue'
import AptCostView from '../views/AptCostView.vue'
import AppMember from '../views/AppMember.vue'
import AptDetailFormView from '../views/AptDetailFormView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: IndexView
  },
  {
    path: '/aptcost',
    name: 'aptcost',
    component: AptCostView
  },
  {
    path: '/aptdetailform',
    name: 'aptdetailform',
    component: AptDetailFormView
  },
  {
    path: "/member",
    name: 'member',
    component: AppMember,
    children:[
      {
        path: "login",
        name: 'login',
        component: () => import("@/components/member/LoginVue"),
      },
      {
        path: "signup",
        name: 'signup',
        component: () => import("@/components/member/SignUpVue"),
      },
      {
        path: "mypage",
        name: 'mypage',
        component: () => import("@/components/member/MyPageVue"),
      },
      {
        path: "update",
        name: 'update',
        component: () => import("@/components/member/UpdateVue"),
      },
      {
        path: "password",
        name: 'password',
        component: () => import("@/components/member/PasswordVue"),
      },
    ],
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
