import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { API_URL } from '../config'
import { ToastContainer, toast } from "react-toastify";


function Formation() {

    const [data, setData] = useState([])
    const fetchFormation = () => {
        axios.get(`${API_URL}/formation/formations`)
            .then((response) => {
                setData(response.data)
            })
    }

    useEffect(() => {
        fetchFormation()
    }, [])

    const [formation, setFormation] = useState([])
    const handleChange = (e) => {
        setFormation({ ...formation, [e.target.id]: e.target.value })

    }

    const [employe, setEmploye] = useState([])
    const fetchEmploye = () => {
        axios.get(`${API_URL}/user/users`)
            .then((response) => {
                setEmploye(response.data)
            })
    }

    useEffect(() => {
        fetchEmploye()
    }, [])

    const [imageFormation, setImageFormation] = useState([])

    const addFormation = (e) => {

        e.preventDefault()

        const Formationdata = new FormData()

        Formationdata.append('name', formation.name)
        Formationdata.append('employe_assigned', formation.employe_assigned)
        Formationdata.append('start_date', formation.start_date)
        Formationdata.append('end_date', formation.end_date)
        Formationdata.append('images', imageFormation)
        axios.post(`${API_URL}/formation/createformation`, Formationdata)
            .then(() => {
                toast.success('Created succefully !')
                fetchFormation()
            })
            .catch(error => {
                if (error.response) {
                    toast.warning(error.response.data.error, 'Please chek Form !')
                }
            })
    }

    const [showDataFormation, setShowDataFormation] = useState([])
    const onChangeEdite = (e) => {
        setShowDataFormation({ ...showDataFormation, [e.target.name]: e.target.value })
    }

    const [editeimageFormation, setEditeImageFormation] = useState([])

    const editeDataFormation = (e) => {

        e.preventDefault()

        const DataediteFormation = new FormData()
        DataediteFormation.append('name', showDataFormation.name)
        DataediteFormation.append('employe_assigned', showDataFormation.employe_assigned)
        DataediteFormation.append('start_date', showDataFormation.start_date)
        DataediteFormation.append('end_date', showDataFormation.end_date)
        DataediteFormation.append('images', editeimageFormation)

        axios.put(`${API_URL}/formation/${showDataFormation._id}`, DataediteFormation)
            .then(response => {
                toast.success('Updated succefully !')
                console.log(response)
                fetchFormation()
            })
            .catch(error => {
                if (error.response) {
                    toast.warning(error.response.data.error, 'Please chek Form !')
                }
            })
    }

    const deleteFormation = (id) => {

        axios.delete(`${API_URL}/formation/${id}`)
        .then(() => {
            toast.success('Deleted succefully !')
            fetchFormation()
        })
        .catch(error => {
            if (error.response) {
                toast.warning(error.response.data.error, 'Please chek Form !')
            }
        })
    }


    return (

        <div className="container-fuild">
            <div className="d-flex flex-row justify-content-between align-items-center  pt-2 ">
                <div className="mx-4">
                    <h3><strong>Liste des Formations</strong></h3>
                </div>
                <div className="d-flex flex-row ">
                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Creér nouveau formation
                    </button>
                </div>
            </div>
            <div className="tab table-responsive me-4 ml-1 md-5 pt-2 mt-2 row overflow-auto">
                <table className="table">
                    <thead className=" bgh">
                        <tr>
                            <th >Image</th>
                            <th>Formation</th>
                            <th>Formateur</th>
                            <th>Date de debut</th>
                            <th>Date de fin</th>
                            <th>Action</th>

                        </tr>

                    </thead>
                    <tbody>
                        {data.map((formation) => (
                            <tr>
                                <td className="align-middle"><img src={`http://localhost:4000/${formation.images}`} alt="" style={{ width: "45px", Height: "45px" }} /></td>
                                <td className="align-middle">{formation.name}</td>
                                <td className="align-middle">{formation.employe_assigned[0].username}</td>
                                <td className="align-middle">{formation.start_date}</td>
                                <td className="align-middle">{formation.end_date}</td>
                                <td className=" align-middle">
                                    <button className="btn btn-sm btn-warning me-3" data-bs-toggle="modal" data-bs-target="#exampleModal2" onClick={() => setShowDataFormation(formation)}><i className="fa fa-edit"></i></button>
                                    <button className="btn btn-sm btn-danger" onClick={()=>{deleteFormation(formation._id)}}><i className="fa fa-trash"></i></button>
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
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Formation</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                        </div>
                        <div className="modal-body">
                            <form className="needs-validation">
                                <div className="mb-2">
                                    <div className="w-100">
                                        <label className="fonts"><b>Formation</b></label>
                                    </div>
                                    <input onChange={handleChange} id="name" type="text" className="form-control rounded-0 border-dark" name="name" />
                                </div>

                                <div className="mb-2">
                                    <div className="w-100">
                                        <label className="fonts"><b>Date de debut</b></label>
                                    </div>
                                    <input onChange={handleChange} id="start_date" type="date" className="form-control rounded-0 border-dark" name="start_date" />
                                </div>

                                <div className="mb-2">
                                    <div className="w-100">
                                        <label className="fonts"><b>Date de fin</b></label>
                                    </div>
                                    <input onChange={handleChange} id="end_date" type="date" className="form-control rounded-0 border-dark" name="end_date" />
                                </div>

                                <div className="mb-2">
                                    <div className="w-100">
                                        <label className="fonts"><b>Formateur</b></label>
                                    </div>
                                    <select onChange={handleChange} className='form-select' id="employe_assigned" name="employe_assigned">
                                        {employe.map((employes) => (
                                            <option className='form-control' value={employes._id}>{employes.username}</option>
                                        ))}
                                    </select>
                                </div>

                                <div className="mb-2">
                                    <div className="w-100">
                                        <label className="fonts"><b>Image</b></label>
                                    </div>
                                    <input onChange={(e) => { setImageFormation(e.target.files[0]) }} class="form-control" type="file" id="images" name="images"></input>
                                </div>

                                <div className="d-flex align-items-center fonts pb-3 mt-4">

                                    <button type="submit" onClick={addFormation} value="Submit" className=" w-100 bg-black text-light b  py-2 px-4 rounded-0   ms-auto fonts  border-0 "  >
                                        <b>CREER FORMATION</b>
                                    </button>
                                </div>


                                {JSON.stringify(formation)}
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Formation</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                        </div>
                        <div className="modal-body">
                            <form className="needs-validation">
                                <div className="mb-2">
                                    <div className="w-100">
                                        <label className="fonts"><b>Formation</b></label>
                                    </div>
                                    <input onChange={onChangeEdite} id="name" type="text" className="form-control rounded-0 border-dark" name="name" value={showDataFormation.name} />
                                </div>

                                <div className="mb-2">
                                    <div className="w-100">
                                        <label className="fonts"><b>Date de debut</b></label>
                                    </div>
                                    <input onChange={onChangeEdite} id="start_date" type="date" className="form-control rounded-0 border-dark" name="start_date" value={showDataFormation.start_date} />
                                </div>

                                <div className="mb-2">
                                    <div className="w-100">
                                        <label className="fonts"><b>Date de fin</b></label>
                                    </div>
                                    <input onChange={onChangeEdite} id="end_date" type="date" className="form-control rounded-0 border-dark" name="end_date" value={showDataFormation.end_date} />
                                </div>

                                <div className="mb-2">
                                    <div className="w-100">
                                        <label className="fonts"><b>Formateur</b></label>
                                    </div>
                                    <select onChange={onChangeEdite} className='form-select' id="employe_assigned" name="employe_assigned">
                                        {employe.map((employes) => (
                                            <option className='form-control' value={employes._id}>{employes.username}</option>
                                        ))}
                                    </select>
                                </div>

                                <div className="mb-2">
                                    <div className="w-100">
                                        <label className="fonts"><b>Image</b></label>
                                    </div>
                                    <input class="form-control" onChange={(e) => { setEditeImageFormation(e.target.files[0]) }} type="file" id="images" name="images"></input>
                                </div>

                                <div className="d-flex align-items-center fonts pb-3 mt-4">

                                    <button type="submit" value="Submit" onClick={editeDataFormation} className=" w-100 bg-black text-light b  py-2 px-4 rounded-0   ms-auto fonts  border-0 "  >
                                        <b>Modifier FORMATION</b>
                                    </button>
                                </div>
                                {/* 
                                {JSON.stringify(formation)} */}
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <ToastContainer />
        </div>

    )
}

export default Formation