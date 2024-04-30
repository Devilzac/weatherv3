import { createStore } from 'vuex'

export default createStore({
  state: {
    locations:[]
  },
  getters: {
  },
  mutations: {
    saveWeatherLocation: (state, dato)=>{
      const { id, data } = dato
      console.table(id, data)
    }
  },
  actions: {
  },
  modules: {
  }
})
