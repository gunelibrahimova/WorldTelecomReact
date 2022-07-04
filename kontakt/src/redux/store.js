import { applyMiddleware, combineReducers, createStore } from "@reduxjs/toolkit";
import { productReducer } from "./Reducers/ProductReducer";

const {default: thunk} = require("redux-thunk")

const reducer = combineReducers({
    products: productReducer
})



const initialState ={
    products: []
}

const middleware = [thunk]

const store = createStore(
    reducer,
    initialState,
    applyMiddleware(...middleware)
)


export default store;