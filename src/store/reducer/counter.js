const promise = function(payload){
  return new Promise((resolve)=>{
    setTimeout(()=>{
      resolve(123+payload);
    },2000)
  })
}

export default{
  state:{
    count:0
  },
  actions:{
    async increment({commit},{payload}){
      const res = await promise(payload);
      commit('save',res)
    }
  },
  reducers:{
    save(state,payload){
      return{
        ...state,
        count:payload
      }
    }
  }
}