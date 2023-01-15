import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from "../actions/type";

const user = JSON.parse(localStorage.getItem('jwt_info'))

let myState = user ? {isLogin: true, user} : {isLogin: false, user:null} 

const authReducer  = (state = myState, action) => {

    switch(action.type){

        case LOGIN_SUCCESS: {
            return {
                ...state,
                isLogin: true,
                user: action.payload 
            }
        }
        case LOGIN_FAIL: {
            return {
                ...state,
                isLogin: false,
                user: null
            }
        }

        case LOGOUT: {
            return {
                ...state,
                isLogin: false,
                user: null
            }
        }
            
        default:{
            return state
        }
    }

}


export default authReducer;