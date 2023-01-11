import { API_URL } from "../config";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import toastr from 'toastr';
import "toastr/build/toastr.css"

const Login = (user) => {

    axios.post(`${API_URL}/signin`, user)

    .then((res) => {

        toastr.success('Login succefully !')

        localStorage.setItem('jwt_info', JSON.stringify(res.data))
        return res.data;

    })
    .catch(error => {
        if (error.response) {
            toastr.warning(error.response.data.error, 'Please chek Form !')
        }
    })
}

const Signup = (user) =>{
    
    axios.post(`${API_URL}/signup` , user , {
    })

    .then(()=> {
        toastr.success('Creteded succefully !',{
        })
    })
    .catch(error =>{
        if(error.response){
            toastr.warning(error.response.data.error, 'Please chek Form !',{
            })
        }
        
    })

}

const Signout = () => {

    axios.get(`${API_URL}/signout`)
        .then(() => {
            toastr.success('Logout succefully !')

            localStorage.removeItem('jwt_info')
        })
        .catch()
}

export default { Login , Signup, Signout }