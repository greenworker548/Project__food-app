import { COUNT_PAGINATION_NEXT, COUNT_PAGINATION_PREV } from "../actionTypes/settingsActionTypes"
import { DefaultStateSettings } from "../types"

const defaultStateSettings: DefaultStateSettings = {
    paginationCount: 1
}

const settingsReducers = (state = defaultStateSettings, action: any) => {
    switch (action.type) {
        case COUNT_PAGINATION_NEXT:
            return {paginationCount: state.paginationCount + 1}
        
        case COUNT_PAGINATION_PREV:
            return {paginationCount: state.paginationCount - 1}

        default:
            return state
    }
}

export default settingsReducers