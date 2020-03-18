import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

export default new Router({
  routes: [
    { path: '/', name: 'home', component: () => import('./components/home.vue') },
    { path: '/login', name: 'login', component: () => import('./components/login.vue') },
    {
      path: '/archive', name: 'archive', component: () => import('./components/archive/archive.vue'),
      children: [
        {
          path: 'new',
          name: 'new',
          component: () => import('./components/archive/new/new.vue'),
          children:[
            {
              path: 'type',
              name: 'type',
              component: () => import('./components/archive/new/type.vue'),
            },
            {
              path: 'item',
              name: 'item',
              component: () => import('./components/archive/new/item.vue'),
            },
          ]
        },
        {
          path: 'search',
          name: 'search',
          component: () => import('./components/archive/search.vue')
        }]
    }
  ]
})

