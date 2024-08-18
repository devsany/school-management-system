import Link from "next/link";
import React, { useEffect, useState } from "react";

const StudentData = () => {
  const [student, setStudent] = useState([]);
  const [girls, setGirls] = useState("");
  const [numberOfBoys, setNumberOfBoys] = useState("");

  const [classNur, setClassNur] = useState("");
  const [classNur_M, setClassNur_M] = useState("");
  const [classNur_F, setClassNur_F] = useState("");

  const [classKG, setClassKG] = useState("");
  const [classKG_M, setClassKG_M] = useState("");
  const [classKG_F, setClassKG_F] = useState("");

  const [classPREP, setClassPREP] = useState("");
  const [classPREP_M, setClassPREP_M] = useState("");
  const [classPREP_F, setClassPREP_F] = useState("");

  const [class1, setClass1] = useState("");
  const [class1_M, setClass1_M] = useState("");
  const [class1_F, setClass1_F] = useState("");

  const [class2, setClass2] = useState("");
  const [class2_M, setClass2_M] = useState("");
  const [class2_F, setClass2_F] = useState("");

  const [class3, setClass3] = useState("");
  const [class3_M, setClass3_M] = useState("");
  const [class3_F, setClass3_F] = useState("");

  const [class4, setClass4] = useState("");
  const [class4_M, setClass4_M] = useState("");
  const [class4_F, setClass4_F] = useState("");

  const [class5A, setClass5A] = useState("");
  const [class5A_M, setClass5A_M] = useState("");
  const [class5A_F, setClass5A_F] = useState("");

  const [class5B, setClass5B] = useState("");
  const [class5B_M, setClass5B_M] = useState("");
  const [class5B_F, setClass5B_F] = useState("");

  const [class6A, setClass6A] = useState("");
  const [class6A_M, setClass6A_M] = useState("");
  const [class6A_F, setClass6A_F] = useState("");

  const [class6B, setClass6B] = useState("");
  const [class6B_M, setClass6B_M] = useState("");
  const [class6B_F, setClass6B_F] = useState("");

  const [class7A, setClass7A] = useState("");
  const [class7A_M, setClass7A_M] = useState("");
  const [class7A_F, setClass7A_F] = useState("");

  const [class7B, setClass7B] = useState("");
  const [class7B_M, setClass7B_M] = useState("");
  const [class7B_F, setClass7B_F] = useState("");

  const [class8A, setClass8A] = useState("");
  const [class8A_M, setClass8A_M] = useState("");
  const [class8A_F, setClass8A_F] = useState("");

  const [class8B, setClass8B] = useState("");
  const [class8B_M, setClass8B_M] = useState("");
  const [class8B_F, setClass8B_F] = useState("");

  const [class8C, setClass8C] = useState("");
  const [class8C_M, setClass8C_M] = useState("");
  const [class8C_F, setClass8C_F] = useState("");

  const [class9A, setClass9A] = useState("");
  const [class9A_M, setClass9A_M] = useState("");
  const [class9A_F, setClass9A_F] = useState("");

  const [class9B, setClass9B] = useState("");
  const [class9B_M, setClass9B_M] = useState("");
  const [class9B_F, setClass9B_F] = useState("");

  const [class9C, setClass9C] = useState("");
  const [class9C_M, setClass9C_M] = useState("");
  const [class9C_F, setClass9C_F] = useState("");

  const [class10A, setClass10A] = useState("");
  const [class10A_M, setClass10A_M] = useState("");
  const [class10A_F, setClass10A_F] = useState("");

  const [class10B, setClass10B] = useState("");
  const [class10B_M, setClass10B_M] = useState("");
  const [class10B_F, setClass10B_F] = useState("");

  const studentdata = async () => {
    const response = await fetch("api/hello");
    const data = await response.json();
    setStudent(data);
    const classNUR = data.filter((stu) => stu.CLASS === "NURSERY");
    const classNUR_M = data.filter(
      (stu) => stu.CLASS === "NURSERY" && stu.GENDER === "MALE"
    );
    const classNUR_F = data.filter(
      (stu) => stu.CLASS === "NURSERY" && stu.GENDER === "FEMALE"
    );

    const classKG = data.filter((stu) => stu.CLASS === "KG");
    const classKG_M = data.filter(
      (stu) => stu.CLASS === "KG" && stu.GENDER === "MALE"
    );
    const classKG_F = data.filter(
      (stu) => stu.CLASS === "KG" && stu.GENDER === "FEMALE"
    );
    const classPREP = data.filter((stu) => stu.CLASS === "PREP");
    const classPREP_M = data.filter(
      (stu) => stu.CLASS === "PREP" && stu.GENDER === "MALE"
    );
    const classPREP_F = data.filter(
      (stu) => stu.CLASS === "PREP" && stu.GENDER === "FEMALE"
    );
    const class1 = data.filter((stu) => stu.CLASS === 1);
    const class1_M = data.filter(
      (stu) => stu.CLASS === 1 && stu.GENDER === "MALE"
    );
    const class1_F = data.filter(
      (stu) => stu.CLASS === 1 && stu.GENDER === "FEMALE"
    );
    const class2 = data.filter((stu) => stu.CLASS === 2);
    const class2_M = data.filter(
      (stu) => stu.CLASS === 2 && stu.GENDER === "MALE"
    );
    const class2_F = data.filter(
      (stu) => stu.CLASS === 2 && stu.GENDER === "FEMALE"
    );

    const class3 = data.filter((stu) => stu.CLASS === 3);
    const class3_M = data.filter(
      (stu) => stu.CLASS === 3 && stu.GENDER === "MALE"
    );
    const class3_F = data.filter(
      (stu) => stu.CLASS === 3 && stu.GENDER === "FEMALE"
    );

    const class4 = data.filter((stu) => stu.CLASS === 4);
    const class4_M = data.filter(
      (stu) => stu.CLASS === 4 && stu.GENDER === "MALE"
    );
    const class4_F = data.filter(
      (stu) => stu.CLASS === 4 && stu.GENDER === "FEMALE"
    );

    const class5A = data.filter(
      (stu) => stu.CLASS === 5 && stu.SECTION === "A"
    );
    const class5A_M = data.filter(
      (stu) => stu.CLASS === 5 && stu.SECTION === "A" && stu.GENDER === "MALE"
    );
    const class5A_F = data.filter(
      (stu) => stu.CLASS === 5 && stu.SECTION === "A" && stu.GENDER === "FEMALE"
    );

    const class5B = data.filter(
      (stu) => stu.CLASS === 5 && stu.SECTION === "B"
    );
    const class5B_M = data.filter(
      (stu) => stu.CLASS === 5 && stu.SECTION === "B" && stu.GENDER === "MALE"
    );
    const class5B_F = data.filter(
      (stu) => stu.CLASS === 5 && stu.SECTION === "B" && stu.GENDER === "FEMALE"
    );

    const class6A = data.filter(
      (stu) => stu.CLASS === 6 && stu.SECTION === "A"
    );
    const class6A_M = data.filter(
      (stu) => stu.CLASS === 6 && stu.SECTION === "A" && stu.GENDER === "MALE"
    );
    const class6A_F = data.filter(
      (stu) => stu.CLASS === 6 && stu.SECTION === "A" && stu.GENDER === "FEMALE"
    );

    const class6B = data.filter(
      (stu) => stu.CLASS === 6 && stu.SECTION === "B"
    );
    const class6B_M = data.filter(
      (stu) => stu.CLASS === 6 && stu.SECTION === "B" && stu.GENDER === "MALE"
    );
    const class6B_F = data.filter(
      (stu) => stu.CLASS === 6 && stu.SECTION === "B" && stu.GENDER === "FEMALE"
    );

    const class7A = data.filter(
      (stu) => stu.CLASS === 7 && stu.SECTION === "A"
    );
    const class7A_M = data.filter(
      (stu) => stu.CLASS === 7 && stu.SECTION === "A" && stu.GENDER === "MALE"
    );
    const class7A_F = data.filter(
      (stu) => stu.CLASS === 7 && stu.SECTION === "A" && stu.GENDER === "FEMALE"
    );

    const class7B = data.filter(
      (stu) => stu.CLASS === 7 && stu.SECTION === "B"
    );
    const class7B_M = data.filter(
      (stu) => stu.CLASS === 7 && stu.SECTION === "B" && stu.GENDER === "MALE"
    );
    const class7B_F = data.filter(
      (stu) => stu.CLASS === 7 && stu.SECTION === "B" && stu.GENDER === "FEMALE"
    );

    const class8A = data.filter(
      (stu) => stu.CLASS === 8 && stu.SECTION === "A"
    );
    const class8A_M = data.filter(
      (stu) => stu.CLASS === 8 && stu.SECTION === "A" && stu.GENDER === "MALE"
    );
    const class8A_F = data.filter(
      (stu) => stu.CLASS === 8 && stu.SECTION === "A" && stu.GENDER === "FEMALE"
    );

    const class8B = data.filter(
      (stu) => stu.CLASS === 8 && stu.SECTION === "B"
    );
    const class8B_M = data.filter(
      (stu) => stu.CLASS === 8 && stu.SECTION === "B" && stu.GENDER === "MALE"
    );
    const class8B_F = data.filter(
      (stu) => stu.CLASS === 8 && stu.SECTION === "B" && stu.GENDER === "FEMALE"
    );

    const class8C = data.filter(
      (stu) => stu.CLASS === 8 && stu.SECTION === "C"
    );
    const class8C_M = data.filter(
      (stu) => stu.CLASS === 8 && stu.SECTION === "C" && stu.GENDER === "MALE"
    );
    const class8C_F = data.filter(
      (stu) => stu.CLASS === 8 && stu.SECTION === "C" && stu.GENDER === "FEMALE"
    );

    const class9A = data.filter(
      (stu) => stu.CLASS === 9 && stu.SECTION === "A"
    );
    const class9A_M = data.filter(
      (stu) => stu.CLASS === 9 && stu.SECTION === "A" && stu.GENDER === "MALE"
    );
    const class9A_F = data.filter(
      (stu) => stu.CLASS === 9 && stu.SECTION === "A" && stu.GENDER === "FEMALE"
    );

    const class9B = data.filter(
      (stu) => stu.CLASS === 9 && stu.SECTION === "B"
    );
    const class9B_M = data.filter(
      (stu) => stu.CLASS === 9 && stu.SECTION === "B" && stu.GENDER === "MALE"
    );
    const class9B_F = data.filter(
      (stu) => stu.CLASS === 9 && stu.SECTION === "B" && stu.GENDER === "FEMALE"
    );

    const class9C = data.filter(
      (stu) => stu.CLASS === 9 && stu.SECTION === "C"
    );
    const class9C_M = data.filter(
      (stu) => stu.CLASS === 9 && stu.SECTION === "C" && stu.GENDER === "MALE"
    );
    const class9C_F = data.filter(
      (stu) => stu.CLASS === 9 && stu.SECTION === "C" && stu.GENDER === "FEMALE"
    );

    const class10A = data.filter(
      (stu) => stu.CLASS === 10 && stu.SECTION === "A"
    );
    const class10A_M = data.filter(
      (stu) => stu.CLASS === 10 && stu.SECTION === "A" && stu.GENDER === "MALE"
    );
    const class10A_F = data.filter(
      (stu) =>
        stu.CLASS === 10 && stu.SECTION === "A" && stu.GENDER === "FEMALE"
    );

    const class10B = data.filter(
      (stu) => stu.CLASS === 10 && stu.SECTION === "B"
    );
    const class10B_M = data.filter(
      (stu) => stu.CLASS === 10 && stu.SECTION === "B" && stu.GENDER === "MALE"
    );
    const class10B_F = data.filter(
      (stu) =>
        stu.CLASS === 10 && stu.SECTION === "B" && stu.GENDER === "FEMALE"
    );
    const numberOfGirls = data.filter((stu) => stu.GENDER === "FEMALE");
    const numberofBoy = data.filter((stu) => stu.GENDER === "MALE");
    setNumberOfBoys(numberofBoy);

    setGirls(numberOfGirls.length);

    setClassNur(classNUR.length);
    setClassNur_M(classNUR_M.length);
    setClassNur_F(classNUR_F.length);

    setClassKG(classKG.length);
    setClassKG_M(classKG_M.length);
    setClassKG_F(classKG_F.length);

    setClassPREP(classPREP.length);
    setClassPREP_M(classPREP_M.length);
    setClassPREP_F(classPREP_F.length);

    setClass1(class1.length);
    setClass1_M(class1_M.length);
    setClass1_F(class1_F.length);

    setClass2(class2.length);
    setClass2_M(class2_M.length);
    setClass2_F(class2_F.length);

    setClass3(class3.length);
    setClass3_M(class3_M.length);
    setClass3_F(class3_F.length);

    setClass4(class4.length);
    setClass4_M(class4_M.length);
    setClass4_F(class4_F.length);

    setClass5A(class5A.length);
    setClass5A_M(class5A_M.length);
    setClass5A_F(class5A_F.length);

    setClass5B(class5B.length);
    setClass5B_M(class5B_M.length);
    setClass5B_F(class5B_F.length);

    setClass6A(class6A.length);
    setClass6A_M(class6A_M.length);
    setClass6A_F(class6A_F.length);

    setClass6B(class6B.length);
    setClass6B_M(class6B_M.length);
    setClass6B_F(class6B_F.length);

    setClass7A(class7A.length);
    setClass7A_M(class7A_M.length);
    setClass7A_F(class7A_F.length);

    setClass7B(class7B.length);
    setClass7B_M(class7B_M.length);
    setClass7B_F(class7B_F.length);

    setClass8A(class8A.length);
    setClass8A_M(class8A_M.length);
    setClass8A_F(class8A_F.length);

    setClass8B(class8B.length);
    setClass8B_M(class8B_M.length);
    setClass8B_F(class8B_F.length);

    setClass8C(class8C.length);
    setClass8C_M(class8C_M.length);
    setClass8C_F(class8C_F.length);

    setClass9A(class9A.length);
    setClass9A_M(class9A_M.length);
    setClass9A_F(class9A_F.length);

    setClass9B(class9B.length);
    setClass9B_M(class9B_M.length);
    setClass9B_F(class9B_F.length);

    setClass9C(class9C.length);
    setClass9C_M(class9C_M.length);
    setClass9C_F(class9C_F.length);

    setClass10A(class10A.length);
    setClass10A_M(class10A_M.length);
    setClass10A_F(class10A_F.length);

    setClass10B(class10B.length);
    setClass10B_M(class10B_M.length);
    setClass10B_F(class10B_F.length);

    console.log("nur", classNUR.length);
    console.log(classKG.length);
    console.log(classPREP.length);
    console.log(class3.length);
    console.log(class4.length);
    console.log("class 5A", class5A.length);
    console.log("class 5B", class5B.length);
    console.log("class 6A", class6A.length);
    console.log("class 6B", class6B.length);
    console.log("class 7A", class7A.length);
    console.log("class 7B", class7B.length);
    console.log("class 8A", class8A.length);
    console.log("class 8B", class8B.length);
    console.log("class 8C", class8C.length);
    console.log("class 9A", class9A.length);
    console.log("class 9B", class9B.length);
    console.log("class 9C", class9C.length);
    console.log("class 10A", class10A.length);
    console.log("class 10B", class10B.length);
  };

  useEffect(() => {
    studentdata();
  }, []);
  return (
    <div>
      <table id="customers">
        <thead>
          <tr>
            <th>S No.</th>
            <th>Class/SECTION</th>
            <th>Number of Students</th>
            <th>Male</th>
            <th>Female</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>NUR</td>
            <td>{classNur}</td>
            <td>{classNur_M}</td>
            <td>{classNur_F}</td>
            <td>
              <Link href="/student/addstudent">
                <button className="btn_submit">Add Student</button>
              </Link>

              <Link href="/student/classNUR">
                <button className="btn_submit">View Student</button>
              </Link>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>KG</td>
            <td>{classKG}</td>
            <td>{classKG_M}</td>
            <td>{classKG_F}</td>
            <td>
              <Link href="/student/addstudent">
                <button className="btn_submit">Add Student</button>
              </Link>

              <Link href="/student/classKG">
                <button className="btn_submit">View Student</button>
              </Link>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>PREP</td>
            <td>{classPREP}</td>
            <td>{classPREP_M}</td>
            <td>{classPREP_F}</td>
            <td>
              {" "}
              <Link href="/student/addstudent">
                <button className="btn_submit">Add Student</button>
              </Link>
              <Link href="/student/classPREP">
                <button className="btn_submit">View Student</button>
              </Link>
            </td>
          </tr>
          <tr>
            <td>4</td>
            <td>Class 1</td>
            <td>{class1}</td>
            <td>{class1_M}</td>
            <td>{class1_F}</td>
            <td>
              {" "}
              <Link href="/student/addstudent">
                <button className="btn_submit">Add Student</button>
              </Link>
              <Link href="/student/class1">
                <button className="btn_submit">View Student</button>
              </Link>
            </td>
          </tr>
          <tr>
            <td>5</td>
            <td> Class 2</td>
            <td>{class2}</td>
            <td>{class2_M}</td>
            <td>{class2_F}</td>
            <td>
              {" "}
              <Link href="/student/addstudent">
                <button className="btn_submit">Add Student</button>
              </Link>
              <Link href="/student/class2">
                <button className="btn_submit">View Student</button>
              </Link>
            </td>
          </tr>
          <tr>
            <td>6</td>
            <td> Class 3</td>
            <td>{class3}</td>
            <td>{class3_M}</td>
            <td>{class3_F}</td>
            <td>
              {" "}
              <Link href="/student/addstudent">
                <button className="btn_submit">Add Student</button>
              </Link>
              <Link href="/student/class3">
                <button className="btn_submit">View Student</button>
              </Link>
            </td>
          </tr>
          <tr>
            <td>7</td>
            <td>Class 4</td>
            <td>{class4}</td>
            <td>{class4_M}</td>
            <td>{class4_F}</td>
            <td>
              {" "}
              <Link href="/student/addstudent">
                <button className="btn_submit">Add Student</button>
              </Link>
              <Link href="/student/class4">
                <button className="btn_submit">View Student</button>
              </Link>
            </td>
          </tr>
          <tr>
            <td>8</td>
            <td>Class 5 A</td>
            <td>{class5A}</td>
            <td>{class5A_M}</td>
            <td>{class5A_F}</td>
            <td>
              {" "}
              <Link href="/student/addstudent">
                <button className="btn_submit">Add Student</button>
              </Link>
              <Link href="/student/class5A">
                <button className="btn_submit">View Student</button>
              </Link>
            </td>
          </tr>
          <tr>
            <td>9</td>
            <td>Class 5 B</td>
            <td>{class5B}</td>
            <td>{class5B_M}</td>
            <td>{class5B_F}</td>
            <td>
              {" "}
              <Link href="/student/addstudent">
                <button className="btn_submit">Add Student</button>
              </Link>
              <Link href="/student/class5B">
                <button className="btn_submit">View Student</button>
              </Link>
            </td>
          </tr>
          <tr>
            <td>10</td>
            <td>Class 6 A</td>
            <td>{class6A}</td>
            <td>{class6A_M}</td>
            <td>{class6A_F}</td>
            <td>
              {" "}
              <Link href="/student/addstudent">
                <button className="btn_submit">Add Student</button>
              </Link>
              <Link href="/student/class6A">
                <button className="btn_submit">View Student</button>
              </Link>
            </td>
          </tr>
          <tr>
            <td>9</td>
            <td>Class 6 B</td>
            <td>{class6B}</td>
            <td>{class6B_M}</td>
            <td>{class6B_F}</td>
          </tr>
          <tr>
            <td>10</td>
            <td>Class 7 A</td>
            <td>{class7A}</td>
            <td>{class7A_M}</td>
            <td>{class7A_F}</td>
          </tr>
          <tr>
            <td>11</td>
            <td>Class 7 B</td>
            <td>{class7B}</td>
            <td>{class7B_M}</td>
            <td>{class7B_F}</td>
          </tr>
          <tr>
            <td>12</td>
            <td>Class 8 A</td>
            <td>{class8A}</td>
            <td>{class8A_M}</td>
            <td>{class8A_F}</td>
          </tr>
          <tr>
            <td>13</td>
            <td>Class 8 B</td>
            <td>{class8B}</td>
            <td>{class8B_M}</td>
            <td>{class8B_F}</td>
          </tr>
          <tr>
            <td>14</td>
            <td>Class 8 C</td>
            <td>{class8C}</td>
            <td>{class8C_M}</td>
            <td>{class8C_F}</td>
          </tr>
          <tr>
            <td>15</td>
            <td>Class 9 A</td>
            <td>{class9A}</td>
            <td>{class9A_M}</td>
            <td>{class9A_F}</td>
          </tr>
          <tr>
            <td>16</td>
            <td>Class 9 B</td>
            <td>{class9B}</td>
            <td>{class9B_M}</td>
            <td>{class9B_F}</td>
          </tr>
          <tr>
            <td>17</td>
            <td>Class 9 C</td>
            <td>{class9C}</td>
            <td>{class9C_M}</td>
            <td>{class9C_F}</td>
          </tr>
          <tr>
            <td>18</td>
            <td>Class 10 A</td>
            <td>{class10A}</td>
            <td>{class10A_M}</td>
            <td>{class10A_F}</td>
          </tr>
          <tr>
            <td>19</td>
            <td>Class 10 B</td>
            <td>{class10B}</td>
            <td>{class10B_M}</td>
            <td>{class10B_F}</td>
          </tr>
        </tbody>
      </table>
      <hr />
    </div>
  );
};

export default StudentData;
