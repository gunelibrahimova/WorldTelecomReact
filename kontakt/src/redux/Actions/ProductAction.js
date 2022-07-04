import { BASE_URL } from "../../api/config"
import { GET_PRODUCTS } from "../Constants/ProductConstant"

export const getProductAction = () => async (dispach, getState) => {
    if (!Object.keys(getState().products.products).length) {
    const data = await (await fetch(`${BASE_URL}Product/productList`)).json()

    dispach({
        type: GET_PRODUCTS,
        payload: data
    })
}
}