const account = {
  state: {
    info: {}
  },
  mutations: {
    setInfo (state, info) {
      state.info = info
    }
  },
  actions: {
    setInfo (store) {
      store.commit('setInfo')
    }
  },
  getters: {
    getInfo: state => {
      return state.info
    }
  }
}

export default account
