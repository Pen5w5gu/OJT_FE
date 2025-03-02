import React from 'react';

const JobOpportunities: React.FC = () => {
    return (
        <div className="container p-5">
            <div className="col-md-12 pt-3">
                <div className="row col-md-8">
                    <div className="col-md-2 mt-1">
                        <strong>Filter:</strong>
                    </div>
                    <div className="col-md-2 mt-2">
                        <select id="major-multiple-checkboxes" name="selectedMajor" multiple={true} style={{ display: 'none' }}>
                            <option value="6">Korean Language</option>
                            <option value="5">Japanese Language</option>
                            <option value="4">English Language</option>
                            <option value="3">Business Administration</option>
                            <option value="2">Digital Art & Design</option>
                            <option value="1">Information Technology</option>
                        </select>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default JobOpportunities;