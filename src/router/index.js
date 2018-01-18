import Vue from 'vue'
import Router from 'vue-router'

import Home from '../components/Home.vue'
import Transportes from '../components/Transportes.vue'
import Reservas from '../components/reservas/Index.vue'
import Login from '../components/Login.vue'
import Eventos from '../components/Eventos.vue'
import Clientes from '../components/Clientes.vue'

Vue.use(Router)

var routerApp = new Router({
  mode: 'history',
  routes: [
    { path: '*', redirect: '/inicio' },
    {
      path: '/inicio',
      name: 'Home',
      component: Home
    },
    {
      path: '/clientes',
      name: 'Clientes',
      component: Clientes
    },
    {
      path: '/reservas',
      name: 'Reservas',
      component: Reservas
    },
    {
      path: '/eventos',
      name: 'Eventos',
      component: Eventos
    },
    {
      path: '/transportes',
      name: 'Transportes',
      component: Transportes
    }
  ]
});

export default routerApp;