import React, { useEffect } from "react";

const StudentData = () => {
  const studentdata = async () => {
    const response = await fetch("api/hello");
    const data = await response.json();
    console.log(data);
    const class_nur = data.filter((item) => {
      item.CLASS === "NURSERY";
    });
    console.log(class_nur);
  };
  useEffect(() => {
    studentdata();
  }, []);
  return <div></div>;
};

export default StudentData;
