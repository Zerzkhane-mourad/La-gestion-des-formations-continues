import React, { useState } from 'react';
import { API_URL } from '../../config';
import axios from 'axios';
import toastr from 'toastr';
import "toastr/build/toastr.css"





const AddLivreur = () => {

    const [user, setUser] = useState({
        username: '',
        email: '',
        password: ''
    })

    const handleChange = (e) => {

        setUser({ ...user, [e.target.id]: e.target.value })

    }

    const addlivreur = e => {

        e.preventDefault();

        axios.post(`${API_URL}/addlivreur`, user, {
        })

            .then(() => {
                toastr.success('Creteded succefully !', {
                    positionClass: "toastr-bottom",
                })
            })
            .catch(error => {
                if (error.response) {
                    toastr.warning(error.response.data.error, 'Please chek Form !', {
                        positionClass: "toastr-bottom-left",
                    })
                }

            })

    }


    return (

        <form onSubmit={addlivreur} className="needs-validation">
            <div className=" mb-3 font-weight-bold">
                <label className="mb-2 fonts font-weight-bold" ><b>Username</b></label>
                <input onChange={handleChange} id="username" type="text" className="form-control rounded-0 border-dark" name="username" />

            </div>

            <div className="mb-3">
                <div className="mb-2 w-100">
                    <label className="fonts"><b>Email</b></label>
                </div>
                <input onChange={handleChange} id="email" type="email" className="form-control rounded-0 border-dark" name="email" />

            </div>

            <div className="mb-3">
                <div className="mb-2 w-100">
                    <label className="fonts"><b>Password</b></label>
                </div>
                <input onChange={handleChange} id="password" type="password" className="form-control rounded-0 border-dark" name="password" />

            </div>

            <div className="mb-3">
                <div className="mb-2 w-100">
                    <label className="fonts"><b>CONFIRM Password</b></label>
                </div>
                <input type="password" className="form-control rounded-0 border-dark" name="password" />

            </div>

            <div className="d-flex align-items-center fonts pb-3">

                <button type="submit" value="Submit" className=" w-100 bg-black text-light b  py-2 px-4 rounded-0   ms-auto fonts  border-0 "  >
                    <b>CREER UN COMPTE</b>
                </button>
            </div>
            {/* {JSON.stringify(user)} */}
        </form>

    )

}

export default AddLivreur