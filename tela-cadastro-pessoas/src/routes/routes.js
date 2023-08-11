import {createRouter, createWebHistory} from 'vue-router'

//importar todos os componentes/telas da aplicaçao

import Home from '../views/Home/Home.vue'
import About from '../views/About/About.vue'
import TalentNew from '../views/Talent/TalentNew.vue'

//criar o roteamento da aplicação

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/sobre',
            name: 'About',
            component: About
        },
        {
            path: '/talentos/novo',
            name: 'NewTalent',
            component: TalentNew
        },
        
    ]
})

//exportar o router
export default router