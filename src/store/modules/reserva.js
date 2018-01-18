import reservas from '../../api/reservas'

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
  addStatus: state => state.addStatus,
  reservaSelected: state => state.reservaSelected,
  addFailure: state => state.addFailure,
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
        state.addStatus = null
    },

    obtenerReservas (state, { reservas }) {
        state.all = reservas
    },

  mensajeExito (state, { msg }) {
    state.addStatus = msg
  },

  mensajeFalla (state, { msgs }) {
    // rollback to the cart saved before sending the request
    state.addFailure = msgs
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}