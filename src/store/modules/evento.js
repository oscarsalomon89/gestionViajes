import eventos from '../../api/eventos'

// initial state
const state = {
  all: [],
  eventoSelected: []
}

// getters
const getters = {
  allEventos: state => state.all,
  eventoSelected: state => state.eventoSelected
}

// actions
const actions = {
  getAllEventos ({ commit }) {
    eventos.getEventos(eventos => {
      commit('obtenerEventos', { eventos })
    })
  },

  addEvento ({ commit }, data) {
    eventos.addEvento(
      data,
      msg => { commit('mensajeExito', { msg })},
      msgs => {commit('mensajeFalla', {msgs})}
    )
  },

  selectEvento ({ commit }, client) {    
     commit('seleccionEventos', { client })
  },

  updateEvento ({ commit }, data) {
    eventos.updateEvento(
      data,
      msg => { commit('mensajeExito', { msg })},
      msgs => {commit('mensajeFalla', {msgs})}
    )
  },

  deleteEvento ({ commit }, data) {
    eventos.deleteEvento(data)
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
    seleccionEventos (state, { client }) {
        state.reservaSelected = client
    },

    obtenerEventos (state, { eventos }) {
        state.all = eventos
    }
}

export default {
  state,
  getters,
  actions,
  mutations
}