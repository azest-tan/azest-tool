import  {createRouter,createWebHistory} from 'vue-router'

const routes = [
    {
        path:'/',
        component: ()=>import('../pages/index.vue')
    },
    {
        path:'/page2/:userid/username/:uname',
        component: ()=>import('../pages/page2.vue')
    },
    {
        path:'/page3',
        component: ()=>import('../pages/index.vue')
    },
    {
        path:'/layout1',
        component: ()=>import('../layouts/layout1.vue')
    },
]

const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router;