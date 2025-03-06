import React, { useEffect, useState } from "react";
import { Internship } from "../../../types/DataTypes";
import { Button } from "react-bootstrap";
import { fetchInternships } from "../../../services/InternshipServices";

const InternshipList: React.FC = () => {
  const [internshipData, setInternshipData] = useState<Internship[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchAllData = async () => {
    try {
      setLoading(true);
      const data = await fetchInternships();
      console.log("Fetched internships:", data); // Debugging
      if (Array.isArray(data)) {
        setInternshipData(data);
      } else {
        throw new Error("Invalid data format: expected an array.");
      }
    } catch (err) {
      setError("Failed to fetch internships.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllData();
  }, []);

  return (
    <div className="row">
      <div className="col-lg-12 grid-margin stretch-card">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">Internship List</h4>
            {loading ? (
              <p>Loading internships...</p>
            ) : error ? (
              <p className="text-danger">{error}</p>
            ) : (
              <>
                {Array.isArray(internshipData) && internshipData.length > 0 ? (
                  <div className="table-responsive pt-3">
                    <table className="table table-bordered">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Position</th>
                          <th>Company ID</th>
                          <th>Major ID</th>
                          <th>Requirement</th>
                          <th>Salary</th>
                          <th>Benefits</th>
                          <th>Description</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {internshipData.map((internship, index) => (
                          <tr key={internship.internshipId}>
                            <td>{index + 1}</td>
                            <td>{internship.position}</td>
                            <td>{internship.companyName}</td>
                            <td>{internship.majorName}</td>
                            <td>{internship.requirment}</td>
                            <td>{internship.salary}</td>
                            <td>{internship.benefits}</td>
                            <td>{internship.description}</td>
                            <td>
                              <Button
                                type="button"
                                className="btn btn-inverse-info btn-icon"
                                style={{ marginRight: "0.5rem" }}
                              >
                                <i className="ti-pencil-alt"></i>
                              </Button>
                              <button
                                type="button"
                                className="btn btn-inverse-danger btn-icon"
                              >
                                <i className="ti-trash"></i>
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <p className="text-warning">No internships available.</p>
                )}
              </>
            )}

            {/* Pagination Placeholder */}
            <div style={{ display: "flex", justifyContent: "end" }}>
              <div
                className="btn-group"
                role="group"
                aria-label="Pagination"
                style={{ marginTop: "1rem" }}
              >
                <button type="button" className="btn btn-outline-secondary">
                  1
                </button>
                <button type="button" className="btn btn-outline-secondary">
                  2
                </button>
                <button type="button" className="btn btn-outline-secondary">
                  3
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InternshipList;
