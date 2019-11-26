export default{
  state:{
    todo:0
  },
  actions:{
    add({commit},{payload}){
      commit('save',payload)
    }
  },
  reducers:{
    save(state,payload){
      return{
        ...state,
        todo:payload
      }
    }
  }
}