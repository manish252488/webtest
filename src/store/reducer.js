import { combineReducers } from "redux"
import { SET_TABLE_DATA } from "./constant"

const initstate = {
    tabledata: []
}

function rootReducer(state = initstate, action) {
    switch (action.type) {
        case SET_TABLE_DATA:
            return { ...state, tabledata: action.payload };
        default:
            return state
    }
}

export const createReducer = reducers => {
    return combineReducers({ root: rootReducer, ...reducers })
}