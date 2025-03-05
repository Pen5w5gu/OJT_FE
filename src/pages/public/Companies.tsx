const Companies: React.FC = () => {
    return (
        <div className="container p-5">
            <div className="col-md-12 pt-3 input-group">
                <input type="text" name="companyNameSearch" id="companyNameSearch" className="form-control border border-1 rounded rounded-1" placeholder="Search Company"></input>
                <span className="input-group-btn">
                    <button className="btn btn-primary ml-1 border-1 rounded rounded-1">
                        <i className="fa ti-search"></i>
                    </button>
                </span>
            </div>
            <div id="showAllCompaniesBlock" className="container my-3 ">
                <div className="col-md-12 text-center">
                    <button id="showAllCompaniesButton" type="button" className="btn btn-primary showAllCompaniesButton rounded rounded-1">Show All Companies</button>
                </div>
            </div>
        </div>
    )
}

export default Companies