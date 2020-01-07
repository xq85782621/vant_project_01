import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
        path: '/home',
        name: 'home',
        component: () =>
            import ('../views/Home.vue'),
        redirect: '/home/index',
        children: [
            // 主页
            {
                path: 'index',
                name: 'index',
                component: () =>
                    import ('../views/index/Index.vue'),
            },
            // 我的
            {
                path: 'mine',
                name: 'mine',
                component: () =>
                    import ('../views/mine/Mine.vue'),
            },
        ]
    },
    {
        path: '/about',
        name: 'about',
        component: () =>
            import ('../views/About.vue')
    }
]

const router = new VueRouter({
    routes
})

export default router