import { SIGN_IN_FAILURE, SIGN_IN_SET_LOADING, SIGN_IN_SUCCESS, SIGN_OUT } from "../action-creators/authAction"

const initialState = {
    loading: false,
    error: null,
    token: null
}

export const authReducer = (state = initialState, action) => {
    console.log(action)
    switch (action) {
        case SIGN_IN_SUCCESS:
            return { ...state, loading: false, error: null, token: action.payload }
        case SIGN_IN_FAILURE:
            return { ...state, loading: false, error: action.payload, token: null }
        case SIGN_OUT:
            return { ...state, loading: false, error: null, token: null }
        case SIGN_IN_SET_LOADING: {
            return { ...state, loading: action.payload }
        }
        default:
            return state
    }
}