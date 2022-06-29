import {types} from "../type";



const initialState = {
    users: []
}

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.USERS:
            return {
                ...state,
                users: [...action.payload]
            }
        default:
            return state
    }
}