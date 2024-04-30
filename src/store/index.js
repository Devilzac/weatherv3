import { createStore } from 'vuex'

export default createStore({
  state: {
    locations:[

    ]
  },
  getters: {
  },
  mutations: {
    saveWeatherFromLocation: ( state , dato)=>{
      const foundItem = state.locations.find(item => item.id === dato.id);

      if (!foundItem) {
          const { id, data  } = dato
          state.locations.push({
            id,
            data
          })
          console.log("ID does not exist in the array");
          return
      } 
      
      console.log("ID already exists in the array");
    }
  },
  actions: {
  },
  modules: {
  }
})
