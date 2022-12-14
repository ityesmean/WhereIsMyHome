import Vue from 'vue'
import VueRouter from 'vue-router'
import IndexView from '../views/IndexView.vue'
import AptCostView from '../views/AptCostView.vue'
import AppMember from '../views/AppMember.vue'
import AppBoard from '../views/AppBoard.vue'

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
    path: '/board',
    name: 'board',
    component: AppBoard,
    children: [
      {
        path: "boardnotice",
        name: 'boardnotice',
        component: () => import("@/components/board/BoardNotice"),
      },
      {
        path: "noticewrite",
        name: 'noticewrite',
        component: () => import("@/components/board/NoticeWrite"),
      },
      {
        path: "boardlist",
        name: 'boardlist',
        component: () => import("@/components/board/BoardList"),
      },
      {
        path: "boardwrite",
        name: 'boardwrite',
        component: () => import("@/components/board/BoardWrite"),
      },
      {
        path: "noticeview/:articleno",
        name: 'noticeview',
        component: () => import("@/components/board/NoticeView"),
      },
      {
        path: "boardview/:articleno",
        name: 'boardview',
        component: () => import("@/components/board/BoardView"),
      },
      {
        path: "noticemodify",
        name: 'noticemodify',
        component: () => import("@/components/board/NoticeModify"),
      },
      {
        path: "boardmodify",
        name: 'boardmodify',
        component: () => import("@/components/board/BoardModify"),
      },
      {
        path: "boarddelete",
        name: 'boarddelete',
        component: () => import("@/components/board/BoardDelete"),
      },
      {
        path: "noticedelete",
        name: 'noticedelete',
        component: () => import("@/components/board/NoticeDelete"),
      },
    ],
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
