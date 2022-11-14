import Vue from 'vue'
import VueRouter from 'vue-router'
import IndexView from '../views/IndexView.vue'
import AptCostView from '../views/AptCostView.vue'
import SignUpView from '../views/SignUpView.vue'
import LoginView from '../views/LoginView.vue'
import MyPageView from '../views/MyPageView.vue'
import UpdateView from '../views/UpdateView.vue'
import PasswordView from '../views/PasswordView.vue'
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
    path: '/signup',
    name: 'signup',
    component: SignUpView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/mypage',
    name: 'mypage',
    component: MyPageView
  },
  {
    path: '/update',
    name: 'update',
    component: UpdateView
  },
  {
    path: '/password',
    name: 'password',
    component: PasswordView
  },
  {
    path: '/aptdetailform',
    name: 'aptdetailform',
    component: AptDetailFormView
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
