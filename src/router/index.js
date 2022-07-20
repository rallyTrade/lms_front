import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('../components/Login.vue')
  },
  {
    path: '/forgotpassword',
    name: 'ForgetPassword',
    component: () => import('../components/forms/ForgetPassword.vue')
  },
  {
    path: '/newpassword',
    name: 'NewPassword',
    component: () => import('../components/forms/NewPassword.vue')
  },
  {
    path: '/admin',
    name: 'AdminDashboard',
    component: () => import('../components/AdminDashboard.vue')
  },
  {
    path: '/staff',
    name: 'StaffAccount',
    component: () => import('../components/StaffAccount.vue'),
  },
  {
    path: '/new-video',
    name: 'LessonVideo',
    component: () => import('../components/LessonVideo.vue')
  },
  {
    path: '/delete-staff',
    name: 'DeleteAccount',
    component: () => import('../components/DeleteAccount.vue'),
  },
  {
    path: '/',
    component: () => import('../layout'),
    children: [
      {
        path: "",
        name: "courses",
        component: () => import('../components/secondary/Courses.vue')
      },
    ]
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
