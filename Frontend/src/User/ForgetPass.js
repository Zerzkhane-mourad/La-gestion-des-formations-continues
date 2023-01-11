import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { API_URL } from '../config';
import toastr from 'toastr';


const ForgetPass = (props) => {

    const navigate = useNavigate()

    const [user, setUser] = useState({
        email: ''
    })

    const handleChange = (e) => {
        setUser({ ...user, [e.target.id]: e.target.value })
    }

    const onSubmit = (e) => {

        e.preventDefault();
        axios.post(`${API_URL}/forgetpassword`, user)
            .then((res) => {
                toastr.success("We've sent you an email with a link to update your password.", {
                    positionClass: "toastr-bottom-left",
                })
                localStorage.setItem('jwt_FORG', JSON.stringify(res))
                navigate('/signin')

            })
            .catch((error) => {
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
                            <h3>Reset Your Password</h3>
                            <p>We will send you an email to reset your<br /> Password</p>
                        </div>
                        <div className="card-body px-5 ">
                            <form onSubmit={onSubmit} className="needs-validation">
                                <div className="mb-3 font-weight-bold ">
                                    <label className="mb-2 fonts font-weight-bold" for="email"><b>Email</b></label>
                                    <input onChange={handleChange} id="email" type="email" className="form-control rounded-0 border-dark" name="email" />
                                </div>

                                <div className="d-flex align-items-center fonts pb-3">
                                    <button type="submit"
                                        className=" w-100 bg-black text-light b  py-2 px-4 rounded-0   ms-auto fonts  border-0 ">
                                        <b>Submit</b>
                                    </button>
                                    {/* { JSON.stringify(user) } */}
                                </div>
                                <div>
                                    <Link className="text-decoration-none text-secondary" to="/signin">Cancel </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default ForgetPass