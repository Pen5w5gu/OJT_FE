import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Internship } from "../../../types/DataTypes";
import { fetchInternshipById } from "../../../services/InternshipServices";
import ImageUploader from "../../../components/layout/ImageUploaderComponent";

const defaultAvatar = "/src/assets/images/samples/300x300/1.jpg";

const ProposalCreate: React.FC = () => {
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const { id } = useParams<{ id: string }>();
    const [internshipData, setInternshipData] = useState<Internship>();

    // State cho form
    const [formData, setFormData] = useState({
        jobPosition: "",
        taskDescription: "",
        companyName: "",
        address: "",
        location: "",
        employeeSize: "",
        taxNumber: "",
        websiteURL: "",
        hrMail: "",
        hrName: ""
    });

    // State cho ảnh
    const [companyLogo, setCompanyLogo] = useState<File | null>(null);
    const [companyLogoPreview, setCompanyLogoPreview] = useState(defaultAvatar);
    const [evidenceImage, setEvidenceImage] = useState<File | null>(null);
    const [evidenceImagePreview, setEvidenceImagePreview] = useState<string>("");

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [id]: value
        }));
    };

    const handleCompanyLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file && file.type.startsWith('image/')) {
            setCompanyLogo(file);
            const reader = new FileReader();
            reader.onload = () => {
                setCompanyLogoPreview(reader.result as string);
            };
            reader.readAsDataURL(file);
        } else {
            alert('Please select an image file');
        }
    };

    const handleEvidenceImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file && file.type.startsWith('image/')) {
            setEvidenceImage(file);

            const reader = new FileReader();
            reader.onload = () => {
                setEvidenceImagePreview(reader.result as string);
            };
            reader.readAsDataURL(file);
        } else {
            alert('Please select an image file');
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!companyLogo || !evidenceImage) {
            alert('Please provide all required images');
            return;
        }

        const submitData = new FormData();

        // Thêm thông tin form
        Object.entries(formData).forEach(([key, value]) => {
            submitData.append(key, value);
        });

        // Thêm ảnh
        submitData.append('companyLogo', companyLogo);
        submitData.append('evidence', evidenceImage);

        try {
            console.log('Form submitted:', submitData);
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('Failed to create proposal');
        }
    };

    const fetchInternshipDetail = async () => {
        try {
            setLoading(true);
            if (id) {
                const data = await fetchInternshipById(id);
                if (data) {
                    setInternshipData(data);
                }
            }
        } catch (error) {
            setError("Failed to fetch internship detail.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchInternshipDetail();
    }, [id]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div id="ProposalCreate" className="container-fluid bg-light">
            <div className="container p-5">
                <form onSubmit={handleSubmit}>
                    <div className="body-partner-detail">
                        <div className="job-detail__body" style={{ display: 'flex', gap: '2rem' }}>
                            <div className="job-detail__body-left" style={{ flex: 1 }}>
                                <div className="job-detail__box--left job-detail__info">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <h2>Create OJT Proposal</h2>
                                    </div>
                                    <div className="d-flex">
                                        <div className="input-group gap-10 d-flex flex-column">
                                            <strong>Note: Student must provide evidences of your company</strong>
                                            {evidenceImagePreview && (
                                                <img
                                                    src={evidenceImagePreview}
                                                    alt="Evidence"
                                                    style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                                                />
                                            )}
                                            <div className="d-flex gap-3 align-items-center">
                                                <input
                                                    type="file"
                                                    accept="image/*"
                                                    onChange={handleEvidenceImageChange}
                                                    className="form-control"
                                                />
                                            </div>

                                        </div>
                                    </div>
                                </div>


                                <div className="job-detail__box--left job-detail__info">
                                    <div className="job-detail__information-container">
                                        <div className="job-description">
                                            {/* Form inputs */}
                                            {Object.entries(formData).map(([key, value]) => (
                                                <div key={key} className="job-description__item">
                                                    <p>{key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}</p>
                                                    <input
                                                        className="form-control"
                                                        placeholder={`Enter ${key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}`}
                                                        type="text"
                                                        id={key}
                                                        value={value}
                                                        onChange={handleInputChange}
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="right col-md-3">
                                <div className="image company-logo d-flex flex-column">
                                    <ImageUploader
                                        defaultImage={defaultAvatar}
                                        onImageChange={handleCompanyLogoChange}
                                        className="company-logo"
                                    />
                                </div>
                                <div className="job-detail__box--right job-detail__company sticky">
                                    <div className="job-detail__company--link">
                                        <button className="btn">Save</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ProposalCreate;