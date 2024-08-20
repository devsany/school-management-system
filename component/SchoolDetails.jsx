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
  return <div>contact number:{schoolDetail.contact}</div>;
};

export default SchoolDetails;
