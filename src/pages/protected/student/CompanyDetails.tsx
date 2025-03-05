const avatarCompany = "/src/assets/images/samples/300x300/1.jpg"; // Cập nhật đường dẫn nếu cần thiết
const CompanyDetails: React.FC = () => {
    return (
        <div className="container p-5">
            <div className="body-partner-detail">
                <h2>CÔNG TY TNHH HCL TECHNOLOGIES VIỆT NAM</h2>
                <div className="row main">
                    <div className="left col-md-9">
                        <div id="summary-bg" className="summary bg-light">
                            <div className="row">
                                <div className="summary-item col-md-6 mb-2 mt-4">
                                    <b>
                                        <i className=""></i>
                                        Tax Number:&nbsp;
                                    </b>
                                    0109129844
                                </div>
                                <div className="summary-item col-md-6 mb-2 mt-4">
                                    <b>
                                        <i className=""></i>
                                        Website:&nbsp;
                                    </b>
                                    <span>
                                        <a href="https://www.hcltech.com/?fbclid=IwY2xjawH7OnRleHRuA2FlbQIxMAABHQb9H2-OydGHLYfZjndFV467xBS1jIDukdNA3rZBsk0Pf-zgLHuLsNgIZg_aem_11NuykpZ_ms-Bn0m8r3NDg" target="_blank" style={{ color: 'cornflowerblue' }}>https://www.hcltech.com/?fbclid=IwY2xjawH7OnRleHRuA2FlbQIxMAABHQb9H2-OydGHLYfZjndFV467xBS1jIDukdNA3rZBsk0Pf-zgLHuLsNgIZg_aem_11NuykpZ_ms-Bn0m8r3NDg</a>
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
                                <div className="summary-item col-md-6 mb-2 mt-4">
                                    <b>
                                        <i className=""></i>
                                        Đánh giá mức độ hài lòng của sinh viên về doanh nghiệp:&nbsp;
                                    </b>
                                    <span>
                                        <code>
                                            Chưa có đánh giá từ sinh viên
                                        </code>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="right col-md-3 mt-4">
                        <div className="image">
                            <img src={avatarCompany} className="" width={200} alt="hcl-logo" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CompanyDetails