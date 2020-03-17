import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

export default new Router({
    routes:[
        {path:'/',name:'home',component:()=>import ('./components/home.vue')},
        {path:'/login',name:'login',component:()=>import ('./components/login.vue')}
    ]
})

