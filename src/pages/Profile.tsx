import React, { useState } from 'react';

interface ProfileData {
    StudentId: number;
    AccountId: number;
    CompanyId: number | null;
    SpecializationId: number;
    IsEligible: boolean;
    Status: string;
    ImageUrl: string;
    FullName: string;
    StudentNumber: string;
    Phone: string;
    Dob: string;
    SpecializationName: string;
    Email: string;
    Address: string;
    JobPosition: string;
    CompanyName: string;
    ContactPersonName: string;
    ContactPersonEmail: string;
    ContactPersonPhone: string;
}

const Profile: React.FC = () => {
    const [profileData] = useState<ProfileData>({
        StudentId: 705,
        AccountId: 705,
        CompanyId: null,
        SpecializationId: 1,
        IsEligible: true,
        Status: "In Progress OJT",
        ImageUrl: "C:\\inetpub\\wwwroot\\OJTMS_Client\\v3\\wwwroot\\StudentImages",
        FullName: "Trung Ngu",
        StudentNumber: "HE111111",
        Phone: "123456789",
        Dob: "2003-05-05",
        SpecializationName: "Software Engineering",
        Email: "trungngu@fpt.edu.vn",
        Address: "Nam Tu Liem - Ha Noi - VIet Nam",
        JobPosition: "Intern BE C#",
        CompanyName: "",
        ContactPersonName: "Cao Minh Hậu",
        ContactPersonEmail: "caominhhau89@gmail.com",
        ContactPersonPhone: "968938898"
    });

    return (
        <div className="container rounded mt-5 mb-5">
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
                            value={profileData.ImageUrl}
                            hidden
                        />
                        <small id="imageInputText" className="m-2">Change your profile picture here</small>
                        <span className="font-weight-bold mt-1">{profileData.FullName}</span>
                        <span className="text-black-50">Eligiblity: {profileData.IsEligible.toString()}</span>
                        <span className="text-black-50">Status: {profileData.Status}</span>
                    </div>
                </div>
                <div className="col-md-9 border-right">
                    <div className="p-3 py-2 profile-section" id="profileSection">
                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <h4 className="text-right">Profile Settings</h4>
                        </div>
                        <input type="number" className="form-control" name="StudentId" value={profileData.StudentId} hidden />
                        <input type="number" className="form-control" name="AccountId" value={profileData.AccountId} hidden />
                        <input type="number" className="form-control" name="CompanyId" hidden />
                        <input type="number" className="form-control" name="SpecializationId" value={profileData.SpecializationId} hidden />
                        <input type="checkbox" className="form-control" name="IsEligible" checked={profileData.IsEligible} hidden readOnly />
                        <input type="text" className="form-control" name="Status" value={profileData.Status} hidden />
                        <div className="row mt-3">
                            <div className="col-md-6 mt-2">
                                <label className="labels">Full Name<span className="required-color"> *</span></label>
                                <input type="text" className="form-control" name="FullName" id="fullNameInput" value={profileData.FullName} readOnly />
                            </div>
                            <div className="col-md-6 mt-2">
                                <label className="labels">Student Number<span className="required-color"> *</span></label>
                                <input type="text" className="form-control" name="StudentNumber" value={profileData.StudentNumber} maxLength={8} readOnly />
                            </div>
                            <div className="col-md-6 mt-2">
                                <label className="labels">Phone Number<span className="required-color"> *</span></label>
                                <input type="text" className="form-control" name="Phone" value={profileData.Phone} required />
                            </div>
                            <div className="col-md-6 mt-2">
                                <label className="labels">DOB<span className="required-color"> *</span></label>
                                <input type="date" className="form-control" name="Dob" value={profileData.Dob} max="2025-03-02" required />
                            </div>
                            <div className="col-md-12 mt-2">
                                <div className="form-group">
                                    <label>Specialization<span className="required-color"> *</span></label>
                                    <input type="text" name="SpecializationName" readOnly className="form-control" value={profileData.SpecializationName} />
                                </div>
                            </div>
                            <div className="col-md-12 mt-2">
                                <label className="labels">Email<span className="required-color"> *</span></label>
                                <input type="text" className="form-control" name="Email" value={profileData.Email} readOnly />
                            </div>
                            <div className="col-md-12 mt-2">
                                <label className="labels">Address<span className="required-color"> *</span></label>
                                <input type="text" className="form-control" name="Address" value={profileData.Address} required />
                            </div>
                            <div className="col-md-12 mt-2">
                                <label className="labels">Job Position</label>
                                <input type="text" className="form-control" name="JobPosition" value={profileData.JobPosition} readOnly />
                            </div>
                            <div className="col-md-12 mt-2">
                                <label className="labels">Company</label>
                                <input type="text" className="form-control" name="CompanyName" value={profileData.CompanyName} readOnly />
                            </div>
                            <div className="col-md-12 mt-2">
                                <label className="labels">CompanyEn</label>
                                <input type="text" className="form-control" name="CompanyName" value={profileData.CompanyName} readOnly />
                            </div>
                            <div className="col-md-12 mt-2">
                                <label className="labels">Contact Person's Name</label>
                                <input type="text" className="form-control" name="ContactPersonName" value={profileData.ContactPersonName} readOnly />
                            </div>
                            <div className="col-md-12 mt-2">
                                <label className="labels">Contact Person's Email</label>
                                <input type="text" className="form-control" name="ContactPersonEmail" value={profileData.ContactPersonEmail} readOnly />
                            </div>
                            <div className="col-md-12 mt-2">
                                <label className="labels">Contact Person's Phone</label>
                                <input type="text" className="form-control" name="ContactPersonPhone" value={profileData.ContactPersonPhone} readOnly />
                            </div>
                        </div>
                        <div className="mt-5 text-center">
                            <button className="btn btn-primary profile-button" type="submit">
                                Save Profile
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;