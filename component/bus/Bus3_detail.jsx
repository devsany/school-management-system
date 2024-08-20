import Link from "next/link";
import React, { useEffect, useState } from "react";

const Bus3_detail = () => {
  const [apiData, setApiData] = useState([]);
  const [apiDatam, setApiDatam] = useState([]);
  const [number, setNumber] = useState("");
  const [boys, setBoys] = useState("");
  const [name, setName] = useState([]);
  const [adm, setADM] = useState([]);

  const studentdata = async () => {
    const response = await fetch("/api/hello");
    const Data = await response.json();
    const BUS3 = Data.filter((stu) => stu.BUS_NUMBER === 3);
    const filteredStudents = BUS3.filter((student) =>
      student.NAME_OF_STUDENT.toLowerCase().includes(name)
    );

    const b = Data.filter(
      (stu) => stu.BUS_NUMBER === 3 && stu.GENDER === "MALE"
    );

    setApiData(filteredStudents);
    setNumber(BUS3.length);
    setBoys(b.length);
  };

  useEffect(() => {
    studentdata();
  }, [name]);
  return (
    <div>
      <div>
        <Link href="/student/all-student-data-transport">
          <button className="btn_submit">Transport details</button>
        </Link>
        <Link href="addstudent">
          <button className="btn_submit">Take Admission</button>
        </Link>
      </div>
      <div style={{ margin: "10px" }}>
        <h3>Bus No. :- 3</h3>
        <h3>Boys :- {boys}</h3>
        <h3>Girs :- {number - boys}</h3>
        <h3>Total student :- {number}</h3>
      </div>
      <div className="flex">
        <div style={{ margin: "10px" }}>
          <label htmlFor="name">
            <strong>Search by Name:</strong>
          </label>{" "}
          <br />
          <input
            style={{ backgroundColor: "oldlace", paddingLeft: "5px" }}
            type="text"
            id="name"
            name="name"
            placeholder="Enter Student name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />{" "}
        </div>
        <div style={{ margin: "10px" }}></div>
      </div>
      <table id="customers">
        <thead>
          <tr>
            <th>Roll No.</th>
            <th>Admission No.</th>
            <th>Student detail</th>
            <th>Father Name</th>
            <th>Mother Name</th>
            <th>Mobile No.</th>
            <th>Bus No.</th>
          </tr>
        </thead>
        <tbody>
          {apiDatam &&
            apiData &&
            apiData.map((student, i) => {
              return (
                <>
                  <tr>
                    <td>{student.ROLL}</td>
                    <td>{student.ADMISSION}</td>
                    <td style={{ textAlign: "left" }}>
                      <strong>Student Name: </strong>
                      {student.NAME_OF_STUDENT} <br />
                      <strong> Class: </strong>
                      {student.CLASS} <br />
                      <strong>Section: </strong>
                      {student.SECTION} <br />
                      <strong>DOB: </strong>
                      {student.DOB}
                      <br />
                      <strong>Gender: </strong>
                      {student.GENDER}
                      <br />
                      <strong>Catogery: </strong>
                      {student.CATOGERY} <br />
                      <strong>Blood Group: </strong>
                      {student.BLOOD_GROUP}
                      <br />
                      <strong>CWCN: </strong>
                      {student.CWCN}
                      <br />
                      <strong>TRANS: </strong>
                      {student.TRANS}
                      <br />
                      <strong>School House: </strong>
                      {student.SCHOOL_HOUSE}
                    </td>
                    <td>{student.FATHER_NAME}</td>
                    <td>{student.MOTHER_NAME}</td>
                    <td style={{ textAlign: "left", fontSize: "12px" }}>
                      <strong>Mobile number: </strong>
                      {`${student.MOBILE}`}
                      <br />
                      <strong> Address: </strong>
                      {student.ADDRESS}
                    </td>
                    <td>{student.BUS_NUMBER}</td>
                  </tr>
                </>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default Bus3_detail;
