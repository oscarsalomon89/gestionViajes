import reservas from '../../api/reservas'
import clients from '../../api/clients'

// initial state
const state = {
  all: [],
  reservaSelected: [],
  addStatus: null,
  addFailure: null
}

// getters
const getters = {
  allReservas: state => state.all,
  reservaSelected: state => state.reservaSelected
}

// actions
const actions = {
  getAllReservas ({ commit }) {
    reservas.getReservas(reservas => {
      commit('obtenerReservas', { reservas })
    })
  },

  addReserva ({ commit }, data) {
    reservas.addReserva(
      data,
      msg => { commit('mensajeExito', { msg })},
      msgs => {commit('mensajeFalla', {msgs})}
    )
  },

  selectReserva ({ commit }, client) {    
     commit('seleccionReservas', { client })
  },

  buscarCliente ({ commit }, data) {
    clients.getClientByDni(
      data,
      client => {commit('seleccionClienteReserva', { client })
    })
  },

  updateReserva ({ commit }, data) {
    reservas.updateReserva(
      data,
      msg => { commit('mensajeExito', { msg })},
      msgs => {commit('mensajeFalla', {msgs})}
    )
  },

  deleteReserva ({ commit }, data) {
    reservas.deleteReserva(data)
  },
  
  mensajeExito ({ commit }, msg) {
    commit('mensajeExito', { msg })
},
  mensajeFalla ({ commit }, msgs) {
        commit('mensajeFalla', { msgs })
    }
}

// mutations
const mutations = {
    seleccionReservas (state, { client }) {
        state.reservaSelected = client
    },

    seleccionClienteReserva (state, { client }) {
      state.reservaSelected = client
  },

    obtenerReservas (state, { reservas }) {
        state.all = reservas
    }
}

export default {
  state,
  getters,
  actions,
  mutations
}