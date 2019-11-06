const test = {
  state: {
    test: 0
  },
  mutations: {
    setTest (state) {
      state.test++
    }
  },
  actions: {
    setTest (store) {
      store.commit('setTest')
    }
  },
  getters: {
    getTest: state => {
      return state.test
    }
  }
}

export default test
