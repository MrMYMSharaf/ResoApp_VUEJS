import { createRouter, createWebHistory } from 'vue-router'
import { createApp } from 'vue'
import App from './App.vue'
import AboutPage from './components/AboutePage.vue'
import HomePage from './components/HomePage.vue'
import ResturentList from './components/ResturentListPage.vue'
import ContactPage from './components/ContactPage.vue'
import { MotionPlugin } from '@vueuse/motion'

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/about',
    name: 'AboutPage',
    component: AboutPage
  },{
    path: '/ResturentList',
    name: 'ResturentList',
    component: ResturentList
  }
  ,{
    path: '/contact',
    name: 'ContactPage',
    component: ContactPage
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

const app = createApp(App)
app.use(router)
app.use(MotionPlugin)
app.mount('#app')
