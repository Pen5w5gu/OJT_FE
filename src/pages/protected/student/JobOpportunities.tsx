import React, { useEffect, useState } from 'react';
import { Company, Internship, Major } from '../../../types/DataTypes';
import { fetchMajors } from '../../../services/MajorServices';
import { fetchAllCompanies } from '../../../services/CompanyServices';
import { fetchAllInternships } from '../../../services/InternshipServices';
import avatarCompany from "../../../assets/images/avatarCompany/67c66a67e42a81741056615.webp"

const JobOpportunities: React.FC = () => {
    const [majorData, setMajorData] = useState<Major[]>([]);
    const [companyData, setCompanyData] = useState<Company[]>([]);
    const [internshipData, setInternshipData] = useState<Internship[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [selectedMajors, setSelectedMajors] = useState<string[]>([]);
    const [selectedCompanies, setSelectedCompanies] = useState<string[]>([]);
    const [error, setError] = useState<string | null>(null);

    const [page, setPage] = useState<number>(1);
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [MajorId, setMajorId] = useState<number | null>(null);
    const [CompanyId, setCompanyId] = useState<number | null>(null);

    const fetchMajorList = async () => {
        try {
            setLoading(true);
            const majorList = await fetchMajors();
            if (Array.isArray(majorList)) {
                setMajorData(majorList);
            } else {
                throw new Error("Invalid data format: expected an array.");
            }
        } catch {
            setError("Failed to fetch major list.");
        } finally {
            setLoading(false);
        }
    };

    const fetchCompanyList = async () => {
        try {
            setLoading(true);
            const companyList = await fetchAllCompanies();
            if (Array.isArray(companyList)) {
                setCompanyData(companyList);
            } else {
                throw new Error("Invalid data format: expected an array.");
            }
        } catch {
            setError("Failed to fetch company list.");
        } finally {
            setLoading(false)
        }
    };

    const fetchAllInternshipList = async () => {
        try {
            setLoading(true)
            const internshipList = await fetchAllInternships(
                page,
                9,
                searchTerm,
                MajorId,
                CompanyId
            );
            if (Array.isArray(internshipList)) {
                setInternshipData(internshipList)
            } else {
                throw new Error("Invalid data format: expected an array.");
            }
        } catch {
            setError("Failed to fetch internship list.");
        } finally {
            setLoading(false)
        }
    };

    useEffect(() => {
        fetchMajorList();
        fetchCompanyList();
        fetchAllInternshipList();
    }, []);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>, type: 'major' | 'company') => {
        const { value, checked } = event.target;
        if (type === 'major') {
            if (value === "all") {
                if (checked) {
                    setSelectedMajors(majorData.map(major => major.majorName));
                } else {
                    setSelectedMajors([]);
                }
            } else {
                if (checked) {
                    setSelectedMajors([...selectedMajors, value]);
                } else {
                    setSelectedMajors(selectedMajors.filter(major => major !== value));
                }
            }
        } else if (type === 'company') {
            if (value === "all") {
                if (checked) {
                    setSelectedCompanies(companyData.map(company => company.companyName));
                } else {
                    setSelectedCompanies([]);
                }
            } else {
                if (checked) {
                    setSelectedCompanies([...selectedCompanies, value]);
                } else {
                    setSelectedCompanies(selectedCompanies.filter(company => company !== value));
                }
            }
        }
    };

    return (
        <>
            <div className="container-fluid bg-light">
                <div className="container vh-100 p-5 ">
                    <div className="row">
                        {/* Filter Section */}
                        <div className="col-md-6 mx-auto">
                            <div className="d-flex align-items-center mb-3">
                                <strong className="mr-2">Filter:</strong>
                                <div className="btn-group mr-2 ml-5">
                                    <button type="button" className="btn btn-outline-secondary dropdown-toggle" data-toggle="dropdown">
                                        Major
                                    </button>
                                    <div id="filerDropdown" className="dropdown-menu p-3" style={{ width: '250px' }}>
                                        <input id="searchDropdown" placeholder="Search" className="mb-2" />
                                        <div>
                                            <label className="d-block">
                                                <input type="checkbox" onChange={(e) => handleChange(e, 'major')} value="" checked={selectedMajors.length === majorData.length && majorData.length > 0} /> <strong>Select all</strong>
                                            </label>
                                            {majorData.map(major => (
                                                <label key={major.majorId} className="d-block">
                                                    <input type="checkbox" onChange={(e) => handleChange(e, 'major')} value={major.majorName} checked={selectedMajors.includes(major.majorName)} /> {major.majorName}
                                                </label>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="btn-group mr-2 ml-5">
                                    <button type="button" className="btn btn-outline-secondary dropdown-toggle" data-toggle="dropdown">
                                        Company
                                    </button>
                                    <div id="filerDropdown" className="dropdown-menu p-3" style={{ width: '250px' }}>
                                        <input id="searchDropdown" placeholder="Search" className="mb-2" />
                                        <div>
                                            <label className="d-block">
                                                <input type="checkbox" onChange={(e) => handleChange(e, 'company')} value="all" checked={selectedCompanies.length === companyData.length && companyData.length > 0} /> <strong>Select all</strong>
                                            </label>
                                            {companyData.map(company => (
                                                <label key={company.companyId} className="d-block">
                                                    <input type="checkbox" onChange={(e) => handleChange(e, 'company')} value={company.companyName} checked={selectedCompanies.includes(company.companyName)} /> {company.companyName}
                                                </label>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Search Bar */}
                        <div className="col-md-4">
                            <div className="input-group">
                                <input placeholder="Search job" value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)} className="form-control" />
                                <button onClick={() => fetchAllInternshipList()} className="btn btn-primary ml-1 border-1 rounded rounded-1">
                                    <i className="fa ti-search"></i>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Job List */}
                    <div className='row'>
                        {internshipData.map(internship => (
                            <div className="col-md-4 col-sm-6 feature-job job-ta">
                                <div className="feature-job-item">
                                    <div className="box-body d-flex">
                                        <a href="">
                                            <div className="box-company-logo">
                                                <div className="avatar">
                                                    <img src={avatarCompany} alt="Avatar Company" />
                                                </div>
                                            </div>
                                        </a>
                                        <div className="col-title cvo-flex-grow">
                                            <h3>
                                                <a className="title">
                                                    <strong className="job_title">
                                                        {internship.position}
                                                    </strong>
                                                </a>
                                            </h3>
                                            <a className="text-silver company text_ellipsis company_name">
                                                <span>{internship.companyName} </span>
                                            </a>
                                        </div>

                                    </div>
                                    <div className="box-footer ">
                                        <div className="d-flex">
                                            <div className="col-job-info salary">
                                                <span className="text_ellipsis">
                                                    {internship.salary} triệu
                                                </span>
                                            </div>
                                            <div className="col-job-info location">
                                                <span className="text_ellipsis">
                                                    Hà Nội
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='feature-job-page'>
                        <div className='content'>
                            <span className='btn-feature-jobs-pre btn-slick-arrow'>
                                <i className='ti-angle-left'></i>
                            </span>
                            <div className='feature-job-page_text'>
                                <p className='slick-pagination'>
                                    <span className='hight-light'>5</span> / 101 trang
                                </p>
                            </div>
                            <span className="btn-feature-jobs-next btn-slick-arrow">
                                <i className="ti-angle-right"></i>
                            </span>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default JobOpportunities;