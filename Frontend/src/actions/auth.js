import { REGISTER_SUCCESS, REGISTER_FAIL, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from "./type";
import { API_URL } from "../config";
import axios from 'axios';
import toastr from 'toastr';
import "toastr/build/toastr.css"



export const signup = (user) =>(dispatch) => {
  axios.post(`${API_URL}/user/createuser`, user)
  .then(() => {
      toastr.success('Creteded succefully !')
      dispatch({
        type: REGISTER_SUCCESS,
      });
    })
    .catch(error => {
      if (error.response) {
        toastr.warning(error.response.data.error, 'Please chek Form !')
        dispatch({
          type: REGISTER_FAIL,
        });
      }
    })
}

export const login = (user) => (dispatch) => {
  
  axios.post(`${API_URL}/user/signin`, user)

    .then((res) => {

      toastr.success('Login succefully !')
      localStorage.setItem('jwt_info', JSON.stringify(res.data))
   

      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data.user,
      });
   

    })
    .catch(error => {

      if (error.response) {
        toastr.warning(error.response.data.error, 'Please chek Form !')
        dispatch({
          type: LOGIN_FAIL,
        });
      }

    })


}




export const logout = () => dispatch => {
  axios.get(`${API_URL}/user/signout`)
  .then(() => {
      toastr.success('Logout succefully !')
      localStorage.removeItem('jwt_info')

      dispatch({
        type: LOGOUT,
      });
  })


};
