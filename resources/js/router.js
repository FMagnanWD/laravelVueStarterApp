import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);
/*
    Import des composants
 */
import Home from './components/home.vue'; 
import AgenciesMigrationsIndex from './components/agencies/migrations/index.vue'; 

// 2. Définition des routes
// Chaque route doit être mappée à un composant
const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/agencies/migrations/index',
        name: 'agencies-migrations',
        component: AgenciesMigrationsIndex
    }
]

export default new VueRouter({
    history: true,
    mode: 'history',
    routes
})