import Link from "next/link";
import React, { useEffect, useState } from "react";
const SchoolDetails = () => {
  const [schoolDetail, setSchoolDetail] = useState({});
  useEffect(() => {
    const data = localStorage.getItem("schoolDetail");
    if (!data) {
      alert("Data not found");
    } else {
      const mainData = JSON.parse(data);
      console.log(mainData);
      setSchoolDetail(mainData);
    }
  }, []);
  return (
    <div className="schoolMain">
      <Link href="/schoolmodulesandfacalitiesdetail">
        <button className="btn_submit">Back</button>
      </Link>{" "}
      <h2>School Major Detail</h2>
      <div>
        <table id="customers">
          <thead>
            <tr>
              <th>ID </th>
              <th>Parameter </th>
              <th>Detail </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1.0.1</td>
              <td>School Name:</td>
              <td> {schoolDetail.schoolName}</td>
            </tr>
            <tr>
              <td>1.0.2</td>
              <td> School Address:</td>
              <td>{schoolDetail.schoolAddress}</td>
            </tr>

            <tr>
              <td>1.0.3</td>
              <td>Contact:</td>
              <td>{schoolDetail.contact}</td>
            </tr>
            <tr>
              <td>1.0.4</td>
              <td> School Type:</td>
              <td>{schoolDetail.schoolType}</td>
            </tr>
            <tr>
              <td>1.0.5</td>
              <td>Accreditation Detail:</td>
              <td>{schoolDetail.accreditationDetail}</td>
            </tr>
            <tr>
              <td>1.0.6</td>
              <td> Administrative Information:</td>
              <td>{schoolDetail.AdministrativeInformation}</td>
            </tr>
            <tr>
              <td>1.0.7</td>
              <td> Gread Level:</td>
              <td>{schoolDetail.gread_level}</td>
            </tr>

            <tr>
              <td>1.0.8</td>
              <td> Enrollment Number:</td>
              <td> {schoolDetail.enrollment_number}</td>
            </tr>
            <tr>
              <td>1.0.9</td>
              <td>Facilities:</td>
              <td>{schoolDetail.Facilities}</td>
            </tr>
            <tr>
              <td>1.0.10</td>
              <td>Policies:</td>
              <td>{schoolDetail.Policies}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SchoolDetails;
