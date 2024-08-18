import { ErrorMessage, Field, Form, Formik } from "formik";
import Link from "next/link";
import React from "react";

const initialValue = {
  address: "",
  addmission_no: "",
  class: "",
  dob: "",
  father_name: "",
  mobile: "",
  mother_name: "",
  name_of_student: "",
  roll: "",
  section: "",
};
const onSubmit = (values) => {
  console.log(values);
};
const validate = (values) => {
  const error = {};
  if (!values.name_of_student) {
    error.name_of_student = "require";
  }
  if (!values.address) {
    error.address = "require";
  }
  if (!values.addmission_no) {
    error.addmission_no = "require";
  }
  if (!values.class) {
    error.class = "require";
  }
  if (!values.dob) {
    error.dob = "require";
  }
  if (!values.father_name) {
    error.father_name = "require";
  }
  if (!values.mobile) {
    error.mobile = "require";
  }
  if (!values.mother_name) {
    error.mother_name = "require";
  }

  if (!values.roll) {
    error.roll = "require";
  }
  if (!values.section) {
    error.section = "require";
  }
  return error;
};
const Forms = () => {
  return (
    <div>
      <div className="admission">
        <div className="admission_main">
          <Link href="/student">
            <button className="btn_submit">Back to Home</button>
          </Link>
          <Formik
            initialValues={initialValue}
            onSubmit={onSubmit}
            validate={validate}
          >
            {(props) => {
              return (
                <>
                  <Form>
                    <div className="input_filed_all">
                      <div className="input_field">
                        <label htmlFor="name_of_student" className="">
                          Name of Student
                        </label>
                        <Field
                          type="text"
                          id="name_of_student"
                          name="name_of_student"
                        />
                        <div className="error">
                          <ErrorMessage name="name_of_student" />
                        </div>
                      </div>
                      <div className="input_field">
                        <label htmlFor="addmission_no" className="">
                          ADM No.
                        </label>
                        <Field
                          type="text"
                          id="addmission_no"
                          name="addmission_no"
                        />
                        <div className="error">
                          <ErrorMessage name="addmission_no" />
                        </div>
                      </div>
                      <div className="input_field">
                        <label htmlFor="class" className="">
                          Class
                        </label>
                        <Field type="text" id="class" name="class" />
                        <div className="error">
                          <ErrorMessage name="class" />
                        </div>
                      </div>
                      <div className="input_field">
                        <label htmlFor="address">Student Address</label>
                        <Field type="text" id="address" name="address" />
                        <div className="error">
                          <ErrorMessage name="address" />
                        </div>
                      </div>
                      <div className="input_field">
                        <label htmlFor="father_name">Father Name</label>
                        <Field
                          type="text"
                          id="father_name"
                          name="father_name"
                        />
                        <div className="error">
                          <ErrorMessage name="father_name" />
                        </div>
                      </div>
                      <div className="input_field">
                        <label htmlFor="mother_name">Mother Name</label>
                        <Field
                          type="text"
                          id="mother_name"
                          name="mother_name"
                        />
                        <div className="error">
                          <ErrorMessage name="mother_name" />
                        </div>
                      </div>
                      <div className="input_field">
                        <label htmlFor="mobile">Mobile No.</label>
                        <Field type="number" id="mobile" name="mobile" />
                        <div className="error">
                          <ErrorMessage name="mobile" />
                        </div>
                      </div>
                      <div className="input_field">
                        <label htmlFor="roll">roll No.</label>
                        <Field type="number" id="roll" name="roll" />
                        <div className="error">
                          <ErrorMessage name="roll" />
                        </div>
                      </div>
                      <div className="input_field">
                        <label htmlFor="section">Section</label>
                        <Field type="number" id="section" name="section" />
                        <div className="error">
                          <ErrorMessage name="section" />
                        </div>
                      </div>
                      <div className="input_field">
                        <label htmlFor="dob">D.O.B</label>
                        <Field type="date" id="dob" name="dob" />
                        <div className="error">
                          <ErrorMessage name="dob" />
                        </div>
                      </div>
                    </div>
                    <button
                      className="btn_submit"
                      type="submit"
                      disabled={props.isSubmitting}
                    >
                      Submit
                    </button>
                    <button className="btn_reset" type="reset">
                      Reset
                    </button>
                  </Form>
                </>
              );
            }}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Forms;
