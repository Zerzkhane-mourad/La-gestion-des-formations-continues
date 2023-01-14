import React from 'react'
import AddFormation from './AddFormation'



function Formation() {
    return (

        <div className="container-fuildcol">
            <div className="d-flex flex-row justify-content-between align-items-center  pt-2">
                <div className="mx-4">
                    <h3><strong>Liste des Formations</strong></h3>
                </div>
                <div className="d-flex flex-row ">
                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Creér nouveau formation
                    </button>
                </div>
            </div>
            <div className="tab table-responsive me-4 ml-1 md-5 pt-2 mt-2">
                <table className="table">
                    <thead className=" bgh">
                        <tr>
                            <th>Image</th>
                            <th>Formation</th>
                            <th>Formateur</th>
                            <th>Date de debut</th>
                            <th>Date de fin</th>
                            <th>Action</th>
                        </tr>

                    </thead>
                    <tbody>

                        <tr>

                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td className="d-flex flex-row ">
                                <form method="POST" className="" action="">
                                    <input type="hidden" name="id" value="" />
                                    <button className="btn btn-sm btn-warning me-3"><i className="fa fa-edit"></i></button>
                                </form>
                                <form method="post" className="" action="">
                                    <input type="hidden" name="id" value="" />
                                    <button className="btn btn-sm btn-danger"><i className="fa fa-trash"></i></button>
                                </form>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Formation</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <AddFormation />
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default Formation