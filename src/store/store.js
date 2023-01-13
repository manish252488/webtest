import { applyMiddleware, compose, createStore } from "redux";
import {createReducer} from './reducer';
import thunk from "redux-thunk";

const getFromLocal = () => {
    try {
        let serializeState =localStorage.getItem('state');
        if(serializeState !== null) {
            return JSON.parse(serializeState)
        } else {
            return {}
        }
    }catch(err) {
        return {}
    }
}
const saveToLocal = (state) => {
    try {
        let serializeState = JSON.stringify(state);
        localStorage.setItem('state', serializeState)
    }catch(err) {
       console.log('error saving state')
    }
}
const currentState = getFromLocal();
const enhancer = compose(applyMiddleware(thunk));
const store = createStore(createReducer(), currentState, enhancer);
store.subscribe(() => saveToLocal(store.getState()))
export default store;