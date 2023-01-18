import { DefaultStateShop } from "../types";


const defaultStateShop: DefaultStateShop = {
    data: []
}


const shopReducer = (state = defaultStateShop, action: any) => {
    switch (action.type) {
        case "GET_SHOP_FROM_API":
            return {...state, data: action.payload}
    
        default:
            return state
    }
}

export default shopReducer