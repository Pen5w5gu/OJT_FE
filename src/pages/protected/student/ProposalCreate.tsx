import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Internship } from "../../../types/DataTypes";
import { fetchInternshipById } from "../../../services/InternshipServices";

const avatarCompany = "/src/assets/images/samples/300x300/1.jpg"; // Cập nhật đường dẫn nếu cần thiết
const InternshipDetail: React.FC = () => {
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const { id } = useParams<{ id: string }>();
    const [internshipData, setInternshipData] = useState<Internship>();
    const fetchInternshipDetail = async () => {
        try {
            setLoading(true);
            if (id) {
                const data = await fetchInternshipById(id);
                if (data) {
                    setInternshipData(data);
                } else {
                    console.error("Fetched data is null");
                }
            } else {
                console.error("ID is undefined");
            }
        } catch (error) {
            setError("Failed to fetch internship detail.");
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchInternshipDetail();
    }, [id])
    return (
        <div className="container-fluid bg-light">
            <div className="container p-5">
                <div className="body-partner-detail">
                    <div className="job-detail__body">
                        <div className="job-detail__body-left">
                            <div id="job-detail__box--left job-detail__info" className="job-detail__box--left job-detail__info">
                                <div className="d-flex justify-content-between align-items-center job-detail__information-detail--title-container">
                                    <h2 className="job-detail__information-detail--title">Create OJT Proposal</h2>
                                </div>
                                <div className="">
                                    <div className="input-group gap-10">
                                        <strong>Note: Student must provide evidences of your company (Tối thiểu gồm 1 hình ảnh thư trúng tuyển và 4 hình ảnh văn phòng)</strong>
                                        <input type="file" id="attachImageInput" className=""></input>
                                    </div>
                                </div>
                            </div>
                            <div id="job-detail__box--left job-detail__info" className="job-detail__box--left job-detail__info">
                                <div className="job-detail__information-container">
                                    <div className="job-detail__information-detail--content">
                                        <div className="job-description">
                                            <div className="job-description__item">
                                                <p>Job Position</p>
                                                <input className="form-control" placeholder="Enter Job Position" type="text" id="jobPosition" />
                                            </div>
                                            <div className="job-description__item">
                                                <p>Assigned Tasks</p>
                                                <input className="form-control" type="text" id="taskDescription" />
                                            </div>
                                            <div className="job-description__item">
                                                <p>Company Name</p>
                                                <input className="form-control" type="text" id="companyName" />
                                            </div>
                                            <div className="job-description__item">
                                                <p>Address</p>
                                                <input className="form-control" type="text" id="address" />
                                            </div>
                                            <div className="job-description__item">
                                                <p>Location</p>
                                                <input className="form-control" type="text" id="address" />
                                            </div>
                                            <div className="job-description__item">
                                                <p>Company Logo</p>
                                                <input className="form-control" type="text" id="companyLogo" />
                                            </div>
                                            <div className="job-description__item">
                                                <p>Employee Size</p>
                                                <input className="form-control" type="text" id="employeeSize" />
                                            </div>
                                            <div className="job-description__item">
                                                <p>TaxNumber</p>
                                                <input className="form-control" type="text" id="taxNumber" />
                                            </div>
                                            <div className="job-description__item">
                                                <p>Website</p>
                                                <input className="form-control" type="text" id="websiteURL" />
                                            </div>
                                            <div className="job-description__item">
                                                <p>HR Mail</p>
                                                <input className="form-control" type="text" id="websiteURL" />
                                            </div>
                                            <div className="job-description__item">
                                                <p>HR Name</p>
                                                <input className="form-control" type="text" id="hrName" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="job-detail__body-right">
                            <div className="job-detail__box--right job-detail__company sticky">
                                <div className="job-detail__company--link">
                                    <button className="btn">Save</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="body-partner-detail">

                    <div className="row main">
                        <div className="left col-md-9">

                        </div>
                    </div>
                </div>
            </div>

        </div >
    )
}

export default InternshipDetail