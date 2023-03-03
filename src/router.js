import { createRouter, createWebHashHistory } from "vue-router";
import RosePage from './pages/RosePage.vue'
import Sending from './pages/Sending.vue'
import All from './pages/All.vue'
import Care from './pages/Care.vue'
import New from './pages/New.vue'
import Pay from './pages/Pay.vue'
import Contacts from './pages/Contacts.vue'

export default createRouter({
    history: createWebHashHistory(),
    routes: [{
        path: '/',
        component: RosePage
    },
    {
        path: '/send',
        component: Sending
    },
    {
        path: '/all',
        component: All
    },
    {
        path: '/new',
        component: New
    },
    {
        path: '/pay',
        component: Pay
    },
    {
        path: '/care',
        component: Care
    },
    {
        path: '/contacts',
        component: Contacts
    }
]
})