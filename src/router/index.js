import { createRouter, createWebHashHistory } from 'vue-router'
import FrontLayout from '@/views/front/FrontLayout.vue'
import FrontHomeView from '@/views/front/HomeView.vue'
import NotFoundView from '@/views/NotFound.vue'
import { useUserStore } from '@/stores/user'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: FrontLayout,
      children: [
        {
          path: '',
          name: 'home',
          component: FrontHomeView,
          meta: {
            title: 'Mimir',
            login: false,
            admin: false
          }
        },
        {
          path: 'news',
          name: 'news',
          component: () => import('@/views/front/NewsView.vue'),
          meta: {
            title: 'Mimir | 最新消息',
            login: false,
            admin: false
          }
        },
        {
          path: 'team',
          name: 'team',
          component: () => import('@/views/front/TeamView.vue'),
          meta: {
            title: 'Mimir | 設計團隊',
            login: false,
            admin: false
          }
        },
        {
          path: 'books',
          name: 'books',
          component: () => import('@/views/front/BooksView.vue'),
          meta: {
            title: 'Mimir | 價目表',
            login: false,
            admin: false
          }
        },
        {
          path: 'store',
          name: 'store',
          component: () => import('@/views/front/StoreView.vue'),
          meta: {
            title: 'Mimir | 線上商店',
            login: false,
            admin: false
          }
        },
        {
          path: 'cart',
          name: 'cart',
          component: () => import('@/views/front/CartView.vue'),
          meta: {
            title: 'Mimir | 購物車',
            login: false,
            admin: false
          }
        },
        {
          path: 'register',
          name: 'register',
          component: () => import('@/views/front/RegisterView.vue'),
          meta: {
            title: 'Mimir | 註冊',
            login: false,
            admin: false
          }
        },
        {
          path: 'login',
          name: 'login',
          component: () => import('@/views/front/LoginView.vue'),
          meta: {
            title: 'Mimir | 登入',
            login: false,
            admin: false
          }
        },
        {
          path: 'member',
          name: 'member',
          component: () => import('@/views/front/member/MemberView.vue'),
          meta: {
            title: 'Mimir | 會員專區',
            login: true,
            admin: false
          }
        },
        {
          path: 'order',
          name: 'order',
          component: () => import('@/views/front/member/OrderView.vue'),
          meta: {
            title: 'Mimir | 訂單',
            login: true,
            admin: false
          }
        }
      ]
    },
    {
      path: '/admin',
      component: () => import('@/views/admin/AdminLayout.vue'),
      children: [
        {
          path: '',
          name: 'admin-home',
          component: () => import('@/views/admin/HomeView.vue'),
          meta: {
            title: 'Mimir | 管理後台',
            login: true,
            admin: true
          }
        },
        {
          path: 'users',
          name: 'admin-users',
          component: () => import('@/views/admin/UsersView.vue'),
          meta: {
            title: 'Mimir | 會員管理',
            login: true,
            admin: true
          }
        },
        {
          path: 'news',
          name: 'admin-news',
          component: () => import('@/views/admin/NewsView.vue'),
          meta: {
            title: 'Mimir | 消息管理',
            login: true,
            admin: true
          }
        },
        {
          path: 'products',
          name: 'admin-products',
          component: () => import('@/views/admin/ProductsView.vue'),
          meta: {
            title: 'Mimir | 商品管理',
            login: true,
            admin: true
          }
        },
        {
          path: 'orders',
          name: 'admin-orders',
          component: () => import('@/views/admin/OrdersView.vue'),
          meta: {
            title: 'Mimir | 訂單管理',
            login: true,
            admin: true
          }
        },
        {
          path: 'services',
          name: 'admin-services',
          component: () => import('@/views/admin/ServicesView.vue'),
          meta: {
            title: 'Mimir | 服務管理',
            login: true,
            admin: true
          }
        },
        {
          path: 'designers',
          name: 'admin-designers',
          component: () => import('@/views/admin/TeamView.vue'),
          meta: {
            title: 'Mimir | 團隊管理',
            login: true,
            admin: true
          }
        }
      ]
    },
    {
      path: '/404',
      name: '404',
      component: NotFoundView,
      meta: {
        title: 'Mimir | 404',
        login: false,
        admin: false
      }
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'all',
      redirect: '/404'
    }
  ]
})

router.afterEach((to, from) => {
  document.title = to.meta.title
})

router.beforeEach((to, from, next) => {
  const user = useUserStore()
  if (user.isLogin && (to.path === '/register' || to.path === '/login')) {
    // console.log(1, user.isLogin)
    next('/')
  } else if (to.meta.login && !user.isLogin) {
    // console.log(2, user.isLogin)
    next('/login')
  } else if (to.meta.login && !user.isAdmin && to.path !== '/member') {
    // console.log(3, user.isLogin, user.isAdmin, to.meta.login)
    next('/')
  } else {
    // console.log(4, user.isLogin, user.isAdmin, to.meta.login)
    next()
  }
})

export default router
