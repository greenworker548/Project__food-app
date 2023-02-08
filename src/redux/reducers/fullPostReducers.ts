import { GET_FULL_POST } from "../actionTypes/actionTypes";
import { DefaultStateFullPosts } from "../types";

const defaultStateFullPosts: DefaultStateFullPosts = {
    data: []
}

const fullPostReducers = (state = defaultStateFullPosts, action: any) => {
    switch (action.type) {
        case GET_FULL_POST:
            return {...state, data: action.payload}

        default:
            return state
    }
}

export default fullPostReducers