import Vue from 'vue'
import Router from 'vue-router'
//页面顶部公共部分
import Page from '@/components/Page/Page'
import Home from '@/components/Home/Home'
import Login_Register from '@/components/Login_Register/Login_Register'
import Reset_Password from '@/components/Reset_Password/Reset_Password'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Page,
      redirect:"/home",
      children:[{
          path: 'home',
          name: 'Home',
          component: Home
        },
        {
          path: 'login_register',
          name: 'Login_Register',
          component: Login_Register
        },
        {
          path: 'reset_password',
          name: 'Reset_Password',
          component: Reset_Password
        }
      ]
    },
    
  ]
})
