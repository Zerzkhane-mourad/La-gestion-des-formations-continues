import { API_URL } from "../config";
import axios from 'axios';
import toastr from 'toastr';
import "toastr/build/toastr.css"

const Login = (user) => {

    axios.post(`${API_URL}/user/signin`, user)

    .then((res) => {

        toastr.success('Login succefully !')

        localStorage.setItem('jwt_info', JSON.stringify(res.data))
       

    })
    .catch(error => {
        if (error.response) {
            toastr.warning(error.response.data.error, 'Please chek Form !')
        }
    })
}

const Signup = (user) =>{
    
    axios.post(`${API_URL}/user/createuser` , user , {
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

    axios.get(`${API_URL}/user/signout`)
        .then(() => {
            toastr.success('Logout succefully !')

            localStorage.removeItem('jwt_info')
        })
}

export default { Login , Signup, Signout }