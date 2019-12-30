import Vue from 'vue'
import Vuex from 'vuex'
import test from './test'
import account from './account'
// import mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    test,
    account
  }
})
// mutations,
