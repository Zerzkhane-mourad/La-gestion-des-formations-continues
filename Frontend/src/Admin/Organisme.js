import React, { useEffect, useState } from 'react'
import { API_URL } from '../config'
import axios from 'axios'
import { ToastContainer, toast } from "react-toastify";

function Organisme() {

    const closeModal = () => {
        return 'modal'
    }

    const [data, setdataOrganisme] = useState([]);
    const fetchOrganisme = () => {
        axios.get(`${API_URL}/organisme/organismes`)
            .then((response) => {
                setdataOrganisme(response.data)
            })
    }

    useEffect(() => {
        fetchOrganisme()
    }, [])

    const [organisme, setOrganisme] = useState([])
    const handleChange = (e) => {
        setOrganisme({ ...organisme, [e.target.id]: e.target.value })

    }


    const addOrganisme = (e) => {

        e.preventDefault();
        axios.post(`${API_URL}/organisme/createorganisme`, organisme)
            .then(() => {
                toast.success('Creteded succefully !')
                fetchOrganisme()
            })
            .catch(error => {
                if (error.response) {
                    toast.warning(error.response.data.error, 'Please chek Form !')
                }
            })

    }

    const [showDataorganisme, setShowDataorganisme] = useState([])
    const handleChangeEdite = (e) => {
        setShowDataorganisme({ ...showDataorganisme, [e.target.name]: e.target.value })
    }

    const editeDataOrganisme = (e) => {
        e.preventDefault()
        axios.put(`${API_URL}/organisme/${showDataorganisme._id}`, showDataorganisme)
            .then(response => {
                toast.success('Updated succefully !')
                fetchOrganisme()
            })
            .catch(error => {
                if (error.response) {
                    toast.warning(error.response.data.error, 'Please chek Form !')
                }
            })
    }

    const deleteOrganisme = (id) => {

        console.log(id)

        axios.delete(`${API_URL}/organisme/${id}`)
            .then((response) => {
                toast.success('Deleted succefully !')
                fetchOrganisme()
            })
            .catch(error => {
                if (error.response) {
                    toast.warning(error.response.data.error, 'Please chek Form !')
                }          
            })
    }




    return (

        <div className="container-fuildcol">
            <div className="d-flex flex-row justify-content-between align-items-center  pt-2">
                <div className="mx-4">
                    <h3><strong>Liste des Organismes</strong></h3>
                </div>
                <div className="d-flex flex-row ">
                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Creér nouveau Organisme
                    </button>
                </div>
            </div>
            <div className="tab table-responsive me-4 ml-1 md-5 pt-2 mt-2">
                <table className="table">
                    <thead className=" bgh">
                        <tr>
                            <th>Organisme</th>
                            <th>City</th>
                            <th>Address</th>
                            <th>Phone</th>
                            <th>Action</th>
                        </tr>

                    </thead>
                    <tbody>
                        {data.map((organisme, index) => (

                            <tr key={index} className="align-middle">
                                <td>{organisme.name}</td>
                                <td>{organisme.city}</td>
                                <td>{organisme.address}</td>
                                <td>{organisme.phone}</td>
                                <td className="d-flex flex-row ">
                                    <button data-bs-toggle="modal" data-bs-target="#exampleModal2" onClick={() => setShowDataorganisme(organisme)} className="btn btn-sm btn-warning me-3"><i className="fa fa-edit"></i></button>
                                    <button className="btn btn-sm btn-danger" onClick={() => deleteOrganisme(organisme._id)}><i className="fa fa-trash"></i></button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Organisme</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                        </div>
                        <div className="modal-body">
                            <form className="needs-validation">
                                <div className="mb-2">
                                    <div className="w-100">
                                        <label className="fonts"><b>Organisme</b></label>
                                    </div>
                                    <input onChange={handleChange} id="name" type="text" className="form-control rounded-0 border-dark" name="name" />
                                </div>

                                <div className="mb-2">
                                    <div className="w-100">
                                        <label className="fonts"><b>Ville</b></label>
                                    </div>
                                    <input onChange={handleChange} id="city" type="text" className="form-control rounded-0 border-dark" name="city" />
                                </div>

                                <div className="mb-2">
                                    <div className="w-100">
                                        <label className="fonts"><b>Phone</b></label>
                                    </div>
                                    <input onChange={handleChange} id="phone" type="text" className="form-control rounded-0 border-dark" name="phone" />
                                </div>

                                <div className="mb-2">
                                    <div className="w-100">
                                        <label className="fonts"><b>Address</b></label>
                                    </div>
                                    <input onChange={handleChange} id="address" type="text" className="form-control rounded-0 border-dark" name="address" />
                                </div>

                                <div className="d-flex align-items-center fonts pb-3 mt-4">

                                    <button type="submit" value="Submit" data-bs-dismiss={closeModal} onClick={addOrganisme} className=" w-100 bg-black text-light b  py-2 px-4 rounded-0   ms-auto fonts  border-0 "  >
                                        <b>CREER Organisme</b>
                                    </button>
                                </div>
                                {/* {JSON.stringify(organisme)} */}
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Organisme</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                        </div>
                        <div className="modal-body">
                            <form className="needs-validation">
                                <div className="mb-2">
                                    <div className="w-100">
                                        <label className="fonts"><b>Organisme</b></label>
                                    </div>
                                    <input onChange={handleChangeEdite} id="name" type="text" className="form-control rounded-0 border-dark" value={showDataorganisme.name} name="name" />
                                </div>

                                <div className="mb-2">
                                    <div className="w-100">
                                        <label className="fonts"><b>Ville</b></label>
                                    </div>
                                    <input onChange={handleChangeEdite} id="city" type="text" className="form-control rounded-0 border-dark" value={showDataorganisme.city} name="city" />
                                </div>

                                <div className="mb-2">
                                    <div className="w-100">
                                        <label className="fonts"><b>Phone</b></label>
                                    </div>
                                    <input onChange={handleChangeEdite} id="phone" type="text" className="form-control rounded-0 border-dark" value={showDataorganisme.phone} name="phone" />
                                </div>

                                <div className="mb-2">
                                    <div className="w-100">
                                        <label className="fonts"><b>Address</b></label>
                                    </div>
                                    <input onChange={handleChangeEdite} id="address" type="text" className="form-control rounded-0 border-dark" value={showDataorganisme.address} name="address" />
                                </div>

                                <div className="d-flex align-items-center fonts pb-3 mt-4">

                                    <button type="submit" onClick={editeDataOrganisme} className=" w-100 bg-black text-light b  py-2 px-4 rounded-0   ms-auto fonts  border-0 "  >
                                        <b>Modifier Organisme</b>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    )
}

export default Organisme