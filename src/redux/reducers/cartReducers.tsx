import { DefaultStateCart } from "../types";
import { ADD_CARD_TO_CART, DELETE_ALL_CART, DELETE_ITEM_CART } from "../actionTypes/cartActionTypes";

const defaultStateCart: any = []

const cartReducers = (state = defaultStateCart, action: any) => {
    switch (action.type) {
        case ADD_CARD_TO_CART:
            return [...state, action.payload]

        case DELETE_ALL_CART:
            return []

        case DELETE_ITEM_CART:
            const position = state.find((item: any) => item.id == action.payload)
            const index = state.indexOf(position)
            state.splice(index, 1)
            return [...state]
    
        default:
            return state
    }
}

export default cartReducers