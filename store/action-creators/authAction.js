import { AuthApi } from "../../App/api/AuthApi"

export const SIGN_IN_SUCCESS = "SIGN_IN_SUCCESS"
export const SIGN_OUT = "SIGN_OUT"
export const SIGN_IN_FAILURE = "SIGN_IN_FAILURE"
export const SIGN_IN_SET_LOADING = "SIGN_IN_SET_LOADING"

export const signIn = (email, password) => {
    return async (dispatch) => {
        dispatch({ type: SIGN_IN_SET_LOADING, payload: true })
        const token = await AuthApi.signIn(email, password)
        if (token) {
            console.log(token)
            dispatch({ type: SIGN_IN_SUCCESS, payload: token })
        }
        else {
            console.error("INVALID DATA")
            dispatch({ type: SIGN_IN_FAILURE, payload: "INVALID DATA" })
        }
    }
}

export const signOut = () => {
    return async (dispatch) => {

    }
}