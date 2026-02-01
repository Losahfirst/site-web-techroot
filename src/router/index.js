import { createRouter, createWebHistory } from 'vue-router'

// Pages
import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import Projects from '../pages/Projects.vue'
import Contact from '../pages/Contact.vue'
import Careers from '../pages/Careers.vue'

// Pôles
import PoleHardware from '../pages/poles/Hardware.vue'
import PoleSoftware from '../pages/poles/Software.vue'
import PoleDrones from '../pages/poles/Drones.vue'
import PoleEvents from '../pages/poles/Events.vue'
import PoleRecherche from '../pages/poles/Recherche.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: { title: 'TechRoot Group - Innovation Technologique Africaine' }
    },
    {
        path: '/a-propos',
        name: 'About',
        component: About,
        meta: { title: 'À Propos - TechRoot Group' }
    },
    {
        path: '/projets',
        name: 'Projects',
        component: Projects,
        meta: { title: 'Nos Projets - TechRoot Group' }
    },
    {
        path: '/contact',
        name: 'Contact',
        component: Contact,
        meta: { title: 'Contact - TechRoot Group' }
    },
    {
        path: '/carrieres',
        name: 'Careers',
        component: Careers,
        meta: { title: 'Carrières - TechRoot Group' }
    },
    {
        path: '/poles/hardware',
        name: 'PoleHardware',
        component: PoleHardware,
        meta: { title: 'Pôle Hardware & IoT - TechRoot Group' }
    },
    {
        path: '/poles/software',
        name: 'PoleSoftware',
        component: PoleSoftware,
        meta: { title: 'Pôle Software - TechRoot Group' }
    },
    {
        path: '/poles/drones',
        name: 'PoleDrones',
        component: PoleDrones,
        meta: { title: 'Pôle Drones - TechRoot Group' }
    },
    {
        path: '/poles/events',
        name: 'PoleEvents',
        component: PoleEvents,
        meta: { title: 'Pôle Events - TechRoot Group' }
    },
    {
        path: '/poles/recherche',
        name: 'PoleRecherche',
        component: PoleRecherche,
        meta: { title: 'Recherche & R&D - TechRoot Group' }
    },
    {
        path: '/:pathMatch(.*)*',
        redirect: '/'
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) return savedPosition
        if (to.hash) return { el: to.hash, behavior: 'smooth' }
        return { top: 0, behavior: 'smooth' }
    }
})

router.beforeEach((to, from, next) => {
    document.title = to.meta.title || 'TechRoot Group'
    next()
})

export default router
