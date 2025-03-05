const InternshipProposals: React.FC = () => {
    return (
        <div className="col-lg-12 grid-margin stretch-card">
            <div className="card">
                <div className="card-body">
                    <h4 className="card-title">Bordered table</h4>
                    <a className="btn btn-dark">
                        <i className="ti-plus mr-1"></i>
                        Add New OJT Proposal
                    </a>
                    <a className="btn btn-primary ml-2">
                        <i className="ti-download mr-1"></i>
                        Tải file hướng dẫn
                    </a>
                    <div className="table-responsive pt-3">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>
                                        ID
                                    </th>
                                    <th>
                                        Job Position
                                    </th>
                                    <th>
                                        Company
                                    </th>
                                    <th>
                                        Status
                                    </th>
                                    <th>
                                        Information
                                    </th>
                                    <th>
                                        Process Note
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        1
                                    </td>
                                    <td>
                                        Herman Beck
                                    </td>
                                    <td>
                                        <div className="progress">
                                            <div className="progress-bar bg-success" role="progressbar" style={{ width: '25%' }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}></div>
                                        </div>
                                    </td>
                                    <td>
                                        $ 77.99
                                    </td>
                                    <td>
                                        May 15, 2015
                                    </td>
                                    <td>

                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        2
                                    </td>
                                    <td>
                                        Messsy Adam
                                    </td>
                                    <td>
                                        <div className="progress">
                                            <div className="progress-bar bg-danger" role="progressbar" style={{ width: '75%' }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100}></div>
                                        </div>
                                    </td>
                                    <td>
                                        $245.30
                                    </td>
                                    <td>
                                        July 1, 2015
                                    </td>
                                    <td>

                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        3
                                    </td>
                                    <td>
                                        John Richards
                                    </td>
                                    <td>
                                        <div className="progress">
                                            <div className="progress-bar bg-warning" role="progressbar" style={{ width: '90%' }} aria-valuenow={90} aria-valuemin={0} aria-valuemax={100}></div>
                                        </div>
                                    </td>
                                    <td>
                                        $138.00
                                    </td>
                                    <td>
                                        Apr 12, 2015
                                    </td>
                                    <td>

                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        4
                                    </td>
                                    <td>
                                        Peter Meggik
                                    </td>
                                    <td>
                                        <div className="progress">
                                            <div className="progress-bar bg-primary" role="progressbar" style={{ width: '50%' }} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100}></div>
                                        </div>
                                    </td>
                                    <td>
                                        $ 77.99
                                    </td>
                                    <td>
                                        May 15, 2015
                                    </td>
                                    <td></td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InternshipProposals;