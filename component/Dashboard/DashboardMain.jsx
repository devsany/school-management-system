import { ErrorMessage, FastField, Form, Formik } from "formik";
import Link from "next/link";
import React from "react";

const initialState = {
  schoolName: "",
  schoolAddress: "",
  contact: "",
  schoolType: "",
  accreditationDetail: "",
  AdministrativeInformation: "",
  gread_level: "",
  enrollment_number: "",
  Facilities: "",
  Policies: "",
};
const onSubmit = (values) => {
  localStorage.setItem("schoolDetail", JSON.stringify(values));
};
const validation = (values) => {
  const error = {};
  if (!values.schoolName) {
    error.schoolName = "Require";
  }
  if (!values.Policies) {
    error.Policies = "Require";
  }
  if (!values.Facilities) {
    error.Facilities = "Require";
  }
  if (!values.enrollment_number) {
    error.enrollment_number = "Require";
  }
  if (!values.schoolAddress) {
    error.schoolAddress = "Require";
  }
  if (!values.contact) {
    error.contact = "Require";
  }
  if (!values.schoolType) {
    error.schoolType = "Require";
  }
  if (!values.accreditationDetail) {
    error.accreditationDetail = "Require";
  }
  if (!values.AdministrativeInformation) {
    error.AdministrativeInformation = "Require";
  }
  if (!values.gread_level) {
    error.gread_level = "Require";
  }
  return error;
};
const DashboardMain = () => {
  return (
    <div>
      <div className="admission">
        <div className="admission_main">
          <Link href="/schoolmodulesandfacalitiesdetail">
            <button className="btn_submit">Back</button>
          </Link>
          <Link href=" /schoolmodulesandfacalitiesdetail/help">
            <button className="btn_submit">Help</button>
          </Link>
          <h2>School Details</h2>
          <Formik
            initialValues={initialState}
            onSubmit={onSubmit}
            validate={validation}
          >
            {(props) => {
              return (
                <>
                  <Form>
                    <div className="input_filed_all">
                      <div className="input_field">
                        <label htmlFor="schoolName">
                          <strong>
                            <i>1.0.1</i>
                          </strong>{" "}
                          School Name
                        </label>
                        <FastField
                          type="text"
                          id="schoolName"
                          name="schoolName"
                        />
                        <div className="error">
                          <ErrorMessage name="schoolName" />
                        </div>
                      </div>
                      <div className="input_field">
                        <label htmlFor="schoolAddress">
                          <strong>
                            <i>1.0.2</i>
                          </strong>{" "}
                          School Address
                        </label>
                        <FastField
                          type="text"
                          id="schoolAddress"
                          name="schoolAddress"
                        />
                        <div className="error">
                          <ErrorMessage name="schoolAddress" />
                        </div>
                      </div>
                      <div className="input_field">
                        <label htmlFor="contact">
                          <strong>
                            <i>1.0.3</i>
                          </strong>{" "}
                          Contact Information
                        </label>
                        <FastField type="text" id="contact" name="contact" />
                        <div className="error">
                          <ErrorMessage name="contact" />
                        </div>
                      </div>
                      <div className="input_field">
                        <label htmlFor="schoolType">
                          <strong>
                            <i>1.0.4</i>
                          </strong>{" "}
                          School Type
                        </label>
                        <FastField
                          type="text"
                          id="schoolType"
                          name="schoolType"
                        />
                        <div className="error">
                          <ErrorMessage name="schoolType" />
                        </div>
                      </div>
                      <div className="input_field">
                        <label htmlFor="accreditationDetail">
                          <strong>
                            <i>1.0.5</i>
                          </strong>{" "}
                          Accreditation Details
                        </label>
                        <FastField
                          type="text"
                          id="accreditationDetail"
                          name="accreditationDetail"
                        />
                        <div className="error">
                          <ErrorMessage name="accreditationDetail" />
                        </div>
                      </div>
                      <div className="input_field">
                        <label htmlFor="AdministrativeInformation">
                          <strong>
                            <i>1.0.6</i>
                          </strong>{" "}
                          Administrative Information
                        </label>
                        <FastField
                          type="text"
                          id="AdministrativeInformation"
                          name="AdministrativeInformation"
                        />
                        <div className="error">
                          <ErrorMessage name="AdministrativeInformation" />
                        </div>
                      </div>
                      <div className="input_field">
                        <label htmlFor="gread_level">
                          <strong>
                            <i>1.0.7</i>
                          </strong>{" "}
                          Grade Levels
                        </label>
                        <FastField
                          type="text"
                          id="gread_level"
                          name="gread_level"
                        />
                        <div className="error">
                          <ErrorMessage name="gread_level" />
                        </div>
                      </div>
                      <div className="input_field">
                        <label htmlFor="enrollment_number">
                          <strong>
                            <i>1.0.8</i>
                          </strong>{" "}
                          Enrollment Numbers
                        </label>
                        <FastField
                          type="text"
                          id="enrollment_number"
                          name="enrollment_number"
                        />
                        <div className="error">
                          <ErrorMessage name="enrollment_number" />
                        </div>
                      </div>
                      <div className="input_field">
                        <label htmlFor="Facilities">
                          <strong>
                            <i>1.0.9</i>
                          </strong>{" "}
                          Facilities
                        </label>
                        <FastField
                          type="text"
                          id="Facilities"
                          name="Facilities"
                        />
                        <div className="error">
                          <ErrorMessage name="Facilities" />
                        </div>
                      </div>
                      <div className="input_field">
                        <label htmlFor="Policies">
                          <strong>
                            <i>1.0.10</i>
                          </strong>{" "}
                          Policies
                        </label>
                        <FastField type="text" id="Policies" name="Policies" />
                        <div className="error">
                          <ErrorMessage name="Policies" />
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

export default DashboardMain;
