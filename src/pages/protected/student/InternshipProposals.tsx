import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchCompanyById } from "../../../services/CompanyServices";
import { Company, Internship } from "../../../types/DataTypes";
import { fetchAllInternships } from "../../../services/InternshipServices";

const avatarCompany = "/src/assets/images/samples/300x300/1.jpg"; // Cập nhật đường dẫn nếu cần thiết
const CompanyDetail: React.FC = () => {
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const [CompanyData, setCompanyData] = useState<Company>();
    const [internshipList, setInternshipList] = useState<Internship[]>([]);
    const [pageJob, setPageJob] = useState<number>(1);
    const [totalPageJob, setTotalPageJob] = useState<number>(0);

    const [jobSearch, setJobSearch] = useState<string>("");

    const { id } = useParams<{ id: string }>();
    const fetchCompanyDetail = async () => {
        try {
            setLoading(true);
            if (id) {
                const data = await fetchCompanyById(id)
                if (data) {
                    setCompanyData(data);
                } else {
                    console.error("Fetched data is null");
                }
            } else {
                console.error("ID is undefined");
            }
        } catch (error) {
            setError("Failed to fetch company details");
        } finally {
            setLoading(false);
        }
    }

    const fetchJobByCompany = async (id: string) => {
        try {
            setLoading(true);
            const jobs = await fetchAllInternships(
                pageJob,
                5,
                jobSearch,
                null,
                parseInt(id)
            )
            setInternshipList(jobs.items);
            setTotalPageJob(jobs.totalPages);
        } catch {
            setError("Failed to fetch internship list.");
        } finally {
            setLoading(false);
        }
    }
    const prevPage = async () => {
        if (pageJob > 1) {
            await setPageJob(pageJob - 1)
        }
    }
    const nextPage = async () => {
        if (pageJob < totalPageJob) {
            await setPageJob(pageJob + 1)
        }
    }

    useEffect(() => {
        if (id) {
            fetchCompanyDetail();
            fetchJobByCompany(id);
        } else {
            console.error("ID is undefined");
        }
    }, [id, pageJob]);

    return (
        <div id="InternshipProposal" className="container-fluid bg-light">
            <div className="container p-5">

                <div className="body-partner-detail">
                    <div className="job-detail__body">
                        <div className="job-detail__body-left">
                            <div id="job-detail__box--left job-detail__info" className="job-detail__box--left job-detail__info">
                                {/* {CompanyData ? (
                                    <> */}
                                <div className="job-detail__info--title">
                                    <h1 className="bold job-detail__info--title">Job Position</h1>
                                </div>
                                <div className="row">
                                    <div className="summary-item col-md-6 mb-2 mt-4">
                                        <b>
                                            <i className=""></i>
                                            Company Name:&nbsp;
                                        </b>
                                        XYZ Analytics
                                    </div>
                                    <div className="summary-item col-md-6 mb-2 mt-4">
                                        <b>
                                            <i className=""></i>
                                            Status:&nbsp;
                                        </b>
                                        <span >
                                            Done
                                        </span>
                                    </div>
                                    <div className="summary-item col-md-6 mb-2 mt-4">
                                        <b>
                                            <i className=""></i>
                                            Tax Number:&nbsp;
                                        </b>
                                        <span>
                                            <code>
                                                0109129844
                                            </code>
                                        </span>
                                    </div>
                                    <div className="summary-item col-md-6 mb-2 mt-4">
                                        <b>
                                            <i className=""></i>
                                            Address:&nbsp;
                                        </b>
                                        <span>
                                            Level 13-17, Leadvisors Tower, 643 Đ. Phạm Văn Đồng, Street, Nam Từ Liêm, Hà Nội
                                        </span>
                                    </div>

                                </div>
                                {/* </>
                                ) : (
                                    <div>NOT FOUND</div>
                                )} */}
                            </div>
                            <div id="job-detail__box--left job-detail__info" className="job-detail__box--left job-detail__info">
                                <div className="d-flex justify-content-between align-items-center job-detail__information-detail--title-container">
                                    <h2 className="job-detail__information-detail--title">Infomation</h2>
                                </div>
                                <div className="box-body">
                                    <div className="job-list-default">

                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="right col-md-3 ">
                            <div className="image company-logo">
                                <img src={avatarCompany} className="" alt="hcl-logo" />
                            </div>
                        </div>
                    </div>
                </div>


            </div>

        </div >
    )

}

export default CompanyDetail