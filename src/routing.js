import Home from './components/Home.vue'
import SearchPage from './components/SearchPage.vue'
import DetailPage from './components/DetailPage.vue'
import { createRouter, createWebHistory } from 'vue-router'
const routes = [
    { path: '/search', component: SearchPage, name: 'search' },
    // { path: '/search/:id/*', component: SearchPage, name: 'search' },
    { path: '/anime/:id', component: DetailPage, name: 'detail' },
    { path: '/', component: Home, name: 'home' },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})
export { router }