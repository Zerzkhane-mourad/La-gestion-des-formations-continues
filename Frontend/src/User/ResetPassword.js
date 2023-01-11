import axios from 'axios';
import React, { useState } from 'react';
import { API_URL } from '../config';
import toastr from 'toastr';
import { useNavigate } from 'react-router-dom';

const ResetPassword = () => {


    const navigate = useNavigate()
    
    const isRestpassw = () => {

        const jwt = localStorage.getItem('jwt_FORG')

        if (jwt) {

            return JSON.parse(jwt)
        }

        return false
    }
    const { data } = isRestpassw()
    const token = data.token


    const [user, SetUser] = useState({
        password: ''
    })

    const handleChange = (e) => {

        SetUser({ ...user, [e.target.id]: e.target.value })
    }

    const onSubmit = (e) => {

        e.preventDefault();

        axios.post(`${API_URL}/resetpassword/${token}`, user)
            .then((res) => {
                toastr.success("We've sent you an email with a link to update your password.", {
                    positionClass: "toastr-bottom-left",
                })
                navigate('/signin')

            })
            .catch((error) => {
                console.log(error)
                if (error.response) {
                    toastr.warning(error.response.data.error, 'Please chek Form !', {
                        positionClass: "toastr-bottom-left",
                    })
                }
            })
    }


    return (

        <div className="container h-100 mt-5">
            <div className="row justify-content-sm-center h-100">
                <div className="col-xxl-4 col-xl-5 col-lg-5 col-md-7 col-sm-9">
                    <div className="card shadow-lg border-0">
                        <div className="ms-5  mt-3  fonts">
                            <h3>Reset Acount Password</h3>
                            <p>Enter new Password for<br /></p>
                        </div>
                        <div className="card-body px-5 ">
                            <form onSubmit={onSubmit} className="needs-validation">
                                <div className="mb-3 font-weight-bold ">
                                    <label className="mb-2 fonts font-weight-bold" for="email"><b>Password</b></label>
                                    <input onChange={handleChange} id="password" type="password" className="form-control rounded-0 border-dark" name="email" />
                                </div>
                                <div className="mb-3 font-weight-bold ">
                                    <label className="mb-2 fonts font-weight-bold" for="email"><b>ConfirmPassword</b></label>
                                    <input id="confirmpassword" type="password" className="form-control rounded-0 border-dark" name="email" />
                                </div>

                                <div className="d-flex align-items-center fonts pb-3">
                                    <button type="submit"
                                        className=" w-100 bg-black text-light b  py-2 px-4 rounded-0   ms-auto fonts  border-0 ">
                                        <b>Submit</b>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default ResetPassword