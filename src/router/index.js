import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/views/HomePage'
import About from '@/views/About'
import Blog from '@/views/Blog'
import Article from '@/views/Article'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'homepage',
      component: HomePage
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/blog',
      name: 'blog',
      component: Blog
    },
    {
      path: '/blog/:id',
      component: Article
    },
    {
      path: '/Portfolio'

    },
    {
      path: '/Contact'

    }
  ]
})
