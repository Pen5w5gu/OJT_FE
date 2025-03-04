import React from 'react';
import Footer from '../../../components/layout/StudentComponets/FooterComponent';


const JobOpportunities: React.FC = () => {
    return (
        <>
            <div className="container p-5 mt-3">
                <div className="row">
                    {/* Filter Section */}
                    <div className="col-md-8">
                        <div className="d-flex align-items-center mb-3">
                            <strong className="mr-2">Filter:</strong>
                            <div className="btn-group mr-2 ml-5">
                                <button type="button" className="btn btn-outline-secondary dropdown-toggle" data-toggle="dropdown">
                                    Major
                                </button>
                                <div id="filerDropdown" className="dropdown-menu p-3" style={{ width: '250px' }}>
                                    <input placeholder="Search" className="mb-2" />
                                    <div>
                                        <label className="d-block"><input type="checkbox" checked /> <strong>Select all</strong></label>
                                        <label className="d-block"><input type="checkbox" checked /> Korean Language</label>
                                        <label className="d-block"><input type="checkbox" checked /> Japanese Language</label>
                                        <label className="d-block"><input type="checkbox" checked /> English Language</label>
                                        <label className="d-block"><input type="checkbox" checked /> Business Administration</label>
                                        <label className="d-block"><input type="checkbox" checked /> Digital Art & Design</label>
                                    </div>
                                </div>
                            </div>
                            <div className="btn-group mr-2 ml-5">
                                <button type="button" className="btn btn-outline-secondary dropdown-toggle" data-toggle="dropdown">
                                    Company
                                </button>
                                <div id="filerDropdown" className="dropdown-menu p-3" style={{ width: '250px' }}>
                                    <input placeholder="Search" className="mb-2" />
                                    <div>
                                        <label className="d-block"><input type="checkbox" checked /> <strong>Select all</strong></label>
                                        <label className="d-block"><input type="checkbox" checked /> CÔNG TY TNHH LÊ VÀ ANH EM</label>
                                        <label className="d-block"><input type="checkbox" checked /> Công ty TNHH Công Nghệ SmartNetadadad</label>
                                        <label className="d-block"><input type="checkbox" checked /> Công ty CPPT Việt Cafe</label>
                                        <label className="d-block"><input type="checkbox" checked /> CÔNG TY TNHH TOKENIZE VIETNAM</label>
                                        <label className="d-block"><input type="checkbox" checked /> Digital Art & Design</label>
                                    </div>
                                </div>
                            </div>
                            <div className="btn-group mr2  ml-5">
                                <button type="button" className="btn btn-outline-secondary dropdown-toggle" data-toggle="dropdown">
                                    Location
                                </button>
                                <div id="filerDropdown" className="dropdown-menu p-3" style={{ width: '250px' }}>
                                    <input placeholder="Search" className="mb-2" />
                                    <div>
                                        <label className="d-block"><input type="checkbox" checked /> <strong>Select all</strong></label>
                                        <label className="d-block"><input type="checkbox" checked /> Korean Language</label>
                                        <label className="d-block"><input type="checkbox" checked /> Japanese Language</label>
                                        <label className="d-block"><input type="checkbox" checked /> English Language</label>
                                        <label className="d-block"><input type="checkbox" checked /> Business Administration</label>
                                        <label className="d-block"><input type="checkbox" checked /> Digital Art & Design</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p>Results: 0</p>
                        <p>Page 1 of 0</p>
                    </div>
                    {/* Search Bar */}
                    <div className="col-md-4">
                        <div className="input-group">
                            <input placeholder="Search job" className="form-control" />
                            <button className="btn btn-primary ml-1 border-1 rounded rounded-1">
                                <i className="fa ti-search"></i>
                            </button>
                        </div>
                    </div>
                </div>


            </div>

        </>
    );
}

export default JobOpportunities;
