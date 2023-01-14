import React, { useState } from 'react';
import { API_URL } from '../../config';
import axios from 'axios';
import toastr from 'toastr';
import "toastr/build/toastr.css"

function AddFormation() {
    
    const [formation, setFormation] = useState({
        name: '',
        start_date:'',
        end_date:''
    })

    const handleChange = (e) => {

        setFormation({ ...formation, [e.target.id]: e.target.value })

    }

    const addFormation = e => {

        e.preventDefault();
        
        axios.post(`${API_URL}/formation/createformation`, formation)
            .then(() => {
                console.log(formation)
                // toastr.success('Creteded succefully !', {
                //     positionClass: "toastr-bottom",
                // })
            })
            .catch(error => {

                console.log(error)
                // if (error.response) {
                //     toastr.warning(error.response.data.error, 'Please chek Form !', {
                //         positionClass: "toastr-bottom-left",
                //     })
                // }

            })

    }


    return (

        <form onSubmit={addFormation} method="POST" className="needs-validation">
            <div className=" mb-2 font-weight-bold">
                <label className="fonts font-weight-bold" ><b>Formation</b></label>
                <input onChange={handleChange} id="name" type="text" className="form-control rounded-0 border-dark" name="name" />

            </div>

            {/* <div className="mb-2">
                <div className="w-100">
                    <label className="fonts"><b>Formateur</b></label>
                </div>
                <input onChange={handleChange} id="employe_assigned" type="text" className="form-control rounded-0 border-dark" name="employe_assigned" />

            </div> */}

            <div className="mb-2">
                <div className="w-100">
                    <label className="fonts"><b>Debut de formation</b></label>
                </div>
                <input onChange={handleChange} id="start_date" type="date" className="form-control rounded-0 border-dark" name="start_date" />

            </div>

            <div className="mb-2">
                <div className="w-100">
                    <label className="fonts"><b>Fin de Formation</b></label>
                </div>
                <input onChange={handleChange} id="end_date" type="date" className="form-control rounded-0 border-dark" name="end_date" />
            </div>



            <div className="d-flex align-items-center fonts pb-3 mt-4">

                <button type="submit" value="Submit" className=" w-100 bg-black text-light b  py-2 px-4 rounded-0   ms-auto fonts  border-0 "  >
                    <b>CREER FORMATION</b>
                </button>
            </div>
            {JSON.stringify(formation)}
        </form>

    )
}

export default AddFormation