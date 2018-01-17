import clients from '../../api/clients'

// initial state
const state = {
  all: [],
  userSelected: [],
  addStatus: null,
  addFailure: null
}

// getters
const getters = {
  allClients: state => state.all,
  addStatus: state => state.addStatus,
  userSelected: state => state.userSelected,
  addFailure: state => state.addFailure,
}

// actions
const actions = {
  getAllClients ({ commit }) {
    clients.getClients(clients => {
      commit('obtenerClientes', { clients })
    })
  },

  addClient ({ commit }, data) {
    clients.addClient(
      data,
      msg => { commit('mensajeExito', { msg })},
      msgs => {commit('mensajeFalla', {msgs})}
    )
  },

  selectClient ({ commit }, client) {    
     commit('seleccionCliente', { client })
  },

  updateClient ({ commit }, data) {
    clients.updateClient(
      data,
      msg => { commit('mensajeExito', { msg })},
      msgs => {commit('mensajeFalla', {msgs})}
    )
  },

  deleteClient ({ commit }, data) {
    clients.deleteClient(data)
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
    seleccionCliente (state, { client }) {
        state.userSelected = client
        state.addStatus = null
    },

    obtenerClientes (state, { clients }) {
        state.all = clients
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