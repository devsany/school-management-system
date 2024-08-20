import Link from "next/link";
import React from "react";

const index = () => {
  return (
    <div>
      <Link href="/">
        <button
          style={{ marginBottom: "10px", border: "none" }}
          className="btn_submit"
        >
          Back To Module
        </button>
      </Link>
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          fontSize: "18px",
          fontWeight: "600",
          color: "#252525",
        }}
      >
        <Link href="/schoolmodulesandfacalitiesdetail/school_detail_data_2024">
          <div
            className="bg-cyan-400 cursor-pointer"
            style={{ padding: "60px", margin: "10px" }}
          >
            School Details
          </div>
        </Link>
        <Link href="/schoolmodulesandfacalitiesdetail/daseboard">
          <div
            className="bg-cyan-900 text-yellow-50 cursor-pointer"
            style={{ padding: "60px", margin: "10px" }}
          >
            Daseboard
          </div>
        </Link>
        <Link href="/schoolmodulesandfacalitiesdetail/help">
          <div
            className="bg-green-200 cursor-pointer"
            style={{ padding: "60px", margin: "10px" }}
          >
            Help Box
          </div>
        </Link>
      </div>
    </div>
  );
};

export default index;
