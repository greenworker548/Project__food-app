import { DefaultStatePosts } from "../types";


const defaultStatePosts: DefaultStatePosts = {
    data: []
}


const postReducer = (state = defaultStatePosts, action: any) => {
    switch (action.type) {
        case "GET_POST_FROM_API":
            return {...state, data: action.payload}
    
        default:
            return state
    }
}

export default postReducer