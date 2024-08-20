import Link from "next/link";
import React, { useEffect, useState } from "react";

const HeplMainPage = () => {
  const [helpData, setHelpData] = useState([]);
  const apiData = async () => {
    const response = await fetch("/api/help/help");
    const data = await response.json();
    console.log(data);
    setHelpData(data);
  };
  useEffect(() => {
    apiData();
  }, []);
  return (
    <div>
      <h2>SDMS Help Center</h2>
      <Link href="/schoolmodulesandfacalitiesdetail">
        <button className="btn_submit">Back</button>
      </Link>{" "}
      <br />
      <span
        style={{
          padding: "5px",
          marginBottom: "10px",
          fontSize: "18px",
          textDecoration: "dotted",
        }}
        className="btn_submit"
      >
        <strong>
          <i>1.0.0</i>
        </strong>{" "}
        School Modules:
      </span>
      <div>
        <table id="customers">
          <thead>
            <tr>
              <th>POINT ID.</th>
              <th>Point</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {helpData &&
              helpData.map((item, id) => {
                return (
                  <>
                    <tr key={id}>
                      <td>{item.id}</td>
                      <td style={{ textAlign: "left" }}>{item.point}</td>
                      <td style={{ textAlign: "left" }}>{item.description}</td>
                    </tr>
                  </>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HeplMainPage;
