import { REGISTER_SUCCESS, REGISTER_FAIL, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from "./type";
import Auth from '../services/Auth.js';



export const signup = (user) => {
    
    return Auth.Signup(user).then(
        (response) => {
            return{
                type: REGISTER_SUCCESS,

            }

                .catch(error => {
                    if (error.response) {
                        return{
                            type: REGISTER_FAIL,
                        }
                    }
                })
        })
}

export const login = (user) => {
     Auth.Login(user).then(
      (data) => {
        return{
          type: LOGIN_SUCCESS,
          payload: data ,
        };
  
      },
      (error) => {
        return{
          type: LOGIN_FAIL,
        };
  
      }
    );
  }
        


export const signout = () => {
    Auth.Signout();
  
    return{
      type: LOGOUT,
    };
};
