import React, { useEffect, useState } from 'react';
import { Account } from '../../../types/DataTypes';
import AuthService from '../../../services/AuthService';
import { getStudentInStorage } from '../../../services/StudentServices';

const Profile = () => {
    const [loading, setLoading] = useState<boolean>(true);
    const [accountData, setAccountData] = useState<Account | null>();
    const [studentData, setStudentData] = useState<any>(null);
    const [cvData, setCvData] = useState<string>("");

    const getCvFileName = (url: string) => {
        if (!url) return '';
        const parts = url.split('/');
        return parts[parts.length - 1];
    };

    const fetchProfileData = async () => {
        try {
            setLoading(true);
            const userData = await AuthService.getUserInfo();
            setAccountData(userData);
            const studentData = await getStudentInStorage();
            console.log({ studentData })
            setStudentData(studentData);
            setCvData(getCvFileName(studentData?.cvImage));
            return;
        } catch {
            console.error("Failed to fetch profile data.");
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchProfileData();
    }, []);

    return (
        <div id="profile" className="container rounded mt-5 mb-5">
            <div className="row">
                <div className="col-md-3 border-right">
                    <div className="d-flex flex-column align-items-center text-center p-3 py-5">
                        <input
                            type="file"
                            name="studentImage"
                            id="imageInput"
                            accept="image/*"
                            style={{ display: "none" }}
                        />
                        <div
                            className="d-flex justify-content-center align-items-center rounded-circle"
                            style={{ width: "150px", height: "150px", overflow: "hidden" }}
                        >
                            <img
                                id="selectedImage"
                                alt=""
                                className="img-fluid"
                                src="/StudentImages/StudentImages"
                                style={{ cursor: "pointer" }}
                            />
                        </div>
                        <input
                            type="text"
                            className="form-control"
                            name="ImageUrl"
                            value={""}
                            hidden
                        />
                        <small id="imageInputText" className="m-2">Change your profile picture here</small>
                        <span className="font-weight-bold mt-1">{accountData?.fullname}</span>
                        <span className="text-black-50">Status: {studentData?.applyStatus}</span>
                    </div>
                </div>
                <div className="col-md-9 border-right">
                    <div className="p-3 py-2 profile-section" id="profileSection">
                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <h4 className="text-right">Profile Settings</h4>
                        </div>
                        <div className="row mt-3">
                            <div className="col-md-6 mt-2">
                                <label className="labels">Full Name<span className="required-color">  <code>*</code></span></label>
                                <input type="text" className="form-control" name="FullName" id="fullNameInput" value={accountData?.fullname} readOnly />
                            </div>
                            <div className="col-md-6 mt-2">
                                <label className="labels">Student Code<span className="required-color">  <code>*</code></span></label>
                                <input type="text" className="form-control" name="FullName" id="fullNameInput" value={studentData?.studentCode} readOnly />
                            </div>
                            <div className="col-md-6 mt-2">
                                <div className="form-group">
                                    <label>Specialization<span className="required-color"> </span></label>
                                    <input type="text" name="SpecializationName" readOnly className="form-control" value={studentData?.major} />
                                </div>
                            </div>
                            <div className="col-md-6 mt-2">
                                <div className="form-group">
                                    <label>CV<span className="required-color"> <code>*</code></span></label>
                                    <div className="d-flex gap-3 align-items-center">
                                        <div className="form-control d-flex justify-content-between align-items-center">
                                            <span className="text-truncate">
                                                {cvData ? getCvFileName(studentData.cvImage) : 'No file chosen'}
                                            </span>
                                            <label htmlFor="cvFile" className="btn btn-sm btn-outline-secondary mb-0">
                                                Choose File
                                            </label>
                                        </div>
                                        <input
                                            type="file"
                                            id="cvFile"
                                            accept="image/*"
                                            className="d-none"
                                        />
                                        {studentData?.cvImage && (
                                            <a
                                                href={studentData.cvImage}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="btn btn-outline-primary"
                                            >
                                                View CV
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 mt-2">
                                <label className="labels">Email<span className="required-color">  <code>*</code></span></label>
                                <input type="text" className="form-control" name="Email" value={accountData?.email} readOnly />
                            </div>
                            <div className="col-md-6 mt-2">
                                <label className="labels">Address<span className="required-color">  <code>*</code></span></label>
                                <input type="text" className="form-control" name="Address" value={studentData?.address} readOnly />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;