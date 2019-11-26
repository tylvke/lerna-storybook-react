import { createStore, applyMiddleware,combineReducers } from "redux";
import { connect as reduxConnect } from "react-redux";

const modules = {}

function createModel(data){
  return function(state=data,{type,payload,reducers}){
    return reducers && reducers[type] ? reducers[type](state,payload) : state;
  }
}

function handleModels(models){
    for(const key in models){
        const model = models[key];
        const actions={};
        const reducers={}
        for(const key1 in model.actions){
          actions[`${key}/${key1}`]=model.actions[key1];
        }
        for(const key2 in model.reducers){
          reducers[`${key}/${key2}`]=model.reducers[key2];
        }
        model.actions=actions;
        model.reducers=reducers;
        modules[key]=createModel(model.state);
      }
}



function reduxPromise(models) {
  return ({ dispatch }) => next => action => {
    const modelKey = action.type.split("/")[0];
    const model = models[modelKey];
    const commit = function(type,payload){
        dispatch({
            type:`${modelKey}/${type}`,
            payload,
            reducers:model.reducers,
        })
    }
    if(model.actions[action.type]){
        return model.actions[action.type]({commit},action);
    } else{
        action.reducers=model.reducers;
        return next(action);
    }
  };
}
function useStore(models){
    handleModels(models);
    const reducer = combineReducers({
    ...modules,
    })
    return createStore(reducer, applyMiddleware(reduxPromise(models)));
}

export function connect(func) {
  return function(Component) {
    function mapStateToProps(state) {
      const states = func(state);
      return {
        ...states
      };
    }

    function mapDispatchToProps(dispatch) {
      return {
        dispatch
      };
    }
    return reduxConnect(mapStateToProps, mapDispatchToProps)(Component);
  };
};

export default useStore;
