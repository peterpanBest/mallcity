import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/login',
      name: 'login',
      component: (resolve) => {
        require(["@/components/page/Login"],resolve);
      }
    },
    {
      path: '/index',
      name: 'index',
      component: (resolve) => {
        require(["@/components/page/Index"],resolve);
      },
      children: [
        {
          path: 'tm',
          name: 'tm',
          component: (resolve) => {
            require(["@/components/page/TabPage/TmPage"],resolve);
          }
        },
        {
          path: 'ms',
          name: 'ms',
          component: (resolve) => {
            require(["@/components/page/TabPage/MsPage"],resolve);
          }
        },
        {
          path: 'my',
          name: 'my',
          component: (resolve) => {
            require(["@/components/page/TabPage/MyPage"],resolve);
          }
        },
        {
          path: 'qs',
          name: 'qs',
          component: (resolve) => {
            require(["@/components/page/TabPage/QsPage"],resolve);
          }
        },
        {
          path: 'fs',
          name: 'fs',
          component: (resolve) => {
            require(["@/components/page/TabPage/FsPage"],resolve);
          }
        },
        {
          path: 'xb',
          name: 'xb',
          component: (resolve) => {
            require(["@/components/page/TabPage/XbPage"],resolve);
          }
        }
      ]
    },
    {
      path: '/myaccount',
      name: 'myaccount',
      component: (resolve) => {
        require(["@/components/page/MyAccount"],resolve);
      }
    },
    {
      path: '/cart',
      name: 'cart',
      component: (resolve) => {
        require(["@/components/page/CartPage"],resolve);
      }
    },
    {
      path: '/order',
      name: 'order',
      component: (resolve) => {
        require(["@/components/page/OrderPage"],resolve);
      }
    },
    {
      path: '/product',
      name: 'product',
      component: (resolve) => {
        require(["@/components/product/DetailPage"],resolve);
      },
      children: [
        {
          path: 'detail',
          name: 'detail',
          component: (resolve) => {
            require(["@/components/product/DetailPage"],resolve);
          },
          path: 'good',
          name: 'good',
          component: (resolve) => {
            require(["@/components/product/GoodPage"],resolve);
          }
        }
      ]
    }
  ]
})
