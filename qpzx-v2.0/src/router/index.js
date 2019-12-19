import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/login/Login'
import Forget from '../components/login/Forget'
import Succeed from '../components/login/Succeed'
import Main from '../components/cms/Main'

Vue.use(Router)

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const router = new Router({
  routes: [{
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/forget',
      component: Forget
    },
    {
      path: '/succeed',
      component: Succeed
    },
    {
      path:'/main',
      component:Main,
      children:[]
    }
  ]
})

export default router
