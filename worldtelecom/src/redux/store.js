import { applyMiddleware, combineReducers, createStore } from "@reduxjs/toolkit";
import { CartReducer } from "./Reducers/CartReducer";
import { addCheckOutReducer } from "./Reducers/CheckOutReducer";
import { productReducer } from "./Reducers/ProductReducer";
import { UserReducer } from "./Reducers/UserReducer";

const {default: thunk} = require("redux-thunk")

const reducer = combineReducers({
    products: productReducer,
    user: UserReducer,
    cart: CartReducer,
    checkout: addCheckOutReducer
})


const cartItemFromLocalStorage = localStorage.getItem("cartItems")
 ? JSON.parse(localStorage.getItem("cartItems")):[]

const userInfoFromLocalStorage = localStorage.getItem("userInfo")
? JSON.parse(localStorage.getItem("userInfo")) : []

const initialState ={
    products: [],
    user: {userInfo: userInfoFromLocalStorage},
    cart:{cartItems:cartItemFromLocalStorage},
    checkout: {checkOut: []},


}

const middleware = [thunk]

const store = createStore(
    reducer,
    initialState,
    applyMiddleware(...middleware)
)


export default store;