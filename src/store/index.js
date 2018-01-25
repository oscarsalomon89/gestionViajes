import Vue from 'vue'
import Vuex from 'vuex'
import client from './modules/client'
import reserva from './modules/reserva'
import evento from './modules/evento'
 
Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
      client,
      reserva,
      evento
    }
})