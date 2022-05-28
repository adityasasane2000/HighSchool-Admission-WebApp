import { Button } from "bootstrap";
import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector ,useDispatch} from "react-redux";
import { Row, Col, Container, Form } from "react-bootstrap";
import { useHistory, useParams } from "react-router-dom";

import {adminInitiate, setAdmin} from '../redux/actions';
import adminData from "../api/AdminInfo";
import StudentInfo from "../api/StudentInfo";
import Showfiles from "../api/FileInfo";

function DisplayStudentDetailsAdmin() {
  const { currentUser } = useSelector((state) => state.user);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [address, setAddress] = useState("");
  const [schoolName, setSchoolName] = useState("");
  const [marks10th, setmarks10th] = useState("");

  const [cast, SetCast] = useState("open");
  const [gender, SetGender] = useState("");
  const [studentMobNo, SetStudentMobNO] = useState("");
  const [fatherMobNo, SetFatherMobNo] = useState("");
  const [fatherName, SetFatherName] = useState("");
  const [annualIncome, SetAnnualIncome] = useState("");

  const [castCertificate, SetCastCertificate] = useState("");
  const [castCertificateName, SetCastCertificateName] = useState("");
  const [isCastCertificateFilePicked, SetisCastCertificateFilePicked] =
    useState(true);
  const [viewCast, SetViewCast] = useState(false);

  const [incomeCertificate, SetIncome] = useState("");
  const [incomeCertificateName, SetIncomeCertificateName] = useState("");
  const [isIncomeCertificateFilePicked, SetIsIncomeCertificateFilePicked] =
    useState(true);
  const [viewIncome, SetViewIncome] = useState(false);

  const [leavingCertificate, SetLeavingCertificate] = useState("");
  const [leavingcertificateName, SetLeavingCertificateName] = useState("");
  const [isLeavingCertificateFilePicked, SetIsLeavingCertificateFilePicked] =
    useState(true);
  const [viewLeaving, SetViewLeaving] = useState(false);

  const [markSheet10th, SetMarkSheet10th] = useState("");
  const [tenthMarkSheetName, SetTenthMarkSheetName] = useState("");
  const [isTenthMarkSheetFilePicked, SetIsTenthMarkSheetFilePicked] =
    useState(true);
  const [viewTenthMark, SetViewTenthMark] = useState(false);

  const history = useHistory();
  const params = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setAdmin(true));
  }, [dispatch]);



  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  // const { currentUser } = useSelector((state) => state.user);
  useEffect(() => {
    const handelGetReq = async () => {
      const data = await StudentInfo.get(`/getstudentinfo/${currentUser.uid}`);
      // console.log(data)
      setName(data.data.StudentData[0].Name);
      setEmail(data.data.StudentData[0].Email);
      setBirthDate(data.data.StudentData[0].DOB);
      setAddress(data.data.StudentData[0].Address);
      setSchoolName(data.data.StudentData[0].SchoolName);
      setmarks10th(data.data.StudentData[0].TenthMarks);

      SetMarkSheet10th(data.data.StudentData[0].TenthMarksheet);
      SetCast(data.data.StudentData[0].Cast);
      SetGender(data.data.StudentData[0].Gender);
      SetStudentMobNO(data.data.StudentData[0].StudentMobNo);
      SetFatherMobNo(data.data.StudentData[0].FatherMobNO);
      SetFatherName(data.data.StudentData[0].FatherName);
      SetAnnualIncome(data.data.StudentData[0].AnnualIncome);

      console.log("Hello");

      SetCastCertificate(data.data.StudentData[0].CastCertificate);
      if (data.data.StudentData[0].CastCertificate != "NULL") {
        SetisCastCertificateFilePicked(false);
        SetViewCast(true);
      }

      SetLeavingCertificate(data.data.StudentData[0].LeavingCertificate);
      if (data.data.StudentData[0].LeavingCertificate != "NULL") {
        SetIsLeavingCertificateFilePicked(false);
        SetViewLeaving(true);
      }

      SetIncome(data.data.StudentData[0].incomeCertificate);
      if (data.data.StudentData[0].incomeCertificate != "NULL") {
        SetIsIncomeCertificateFilePicked(false);
        SetViewIncome(true);
      }
      SetMarkSheet10th(data.data.StudentData[0].TenthMarksheet);
      if (data.data.StudentData[0].TenthMarksheet != "NULL") {
        SetIsTenthMarkSheetFilePicked(false);
        SetViewTenthMark(true);
      }

      //console.log(CastCertificate);
      //console.log(data.data.StudentData[0].CastCertificate)
    };
    handelGetReq();
  }, [
    setName,
    setEmail,
    setBirthDate,
    setAddress,
    setSchoolName,
    setmarks10th,
    SetCast,
    SetGender,

    SetCastCertificate,
    SetCastCertificateName,
    SetisCastCertificateFilePicked,
    SetViewCast,

    SetIncome,
    SetCastCertificateName,
    SetIsIncomeCertificateFilePicked,
    SetViewCast,

    SetMarkSheet10th,
    SetTenthMarkSheetName,
    SetIsTenthMarkSheetFilePicked,
    SetViewTenthMark,

    SetLeavingCertificate,
    SetLeavingCertificateName,
    SetIsLeavingCertificateFilePicked,
    SetViewLeaving,

    SetStudentMobNO,
    SetFatherMobNo,
    SetFatherName,
    SetAnnualIncome,
  ]);
  const fileHandler = (e) => {
    if (e.target.name == "markSheet10th") {
      SetMarkSheet10th(e.target.files);
      console.log(e.target.files);
    } else if (e.target.name == "incomeCertificate") {
      SetIncome(e.target.files[0]);
      console.log(e.target.files);
    } else if (e.target.name == "castCertificate") {
      SetCastCertificate(e.target.files[0]);
      console.log(e.target.files);
      // SetisCastCertificateFilePicked(false);
    }
  };
  const handleAcceptRequest = async () => {
    await adminData.post("/student/accept", { email: email, UID: params.id });
  };
  const handleRejectRequest = async () => {
    await adminData.post("/student/reject", { email: email, UID: params.id });
  };
  // console.log(currentUser)
 

  const handelCastChange = (e) => {
    SetCast(e.target.value);
  };
  const handelGenderChange = (e) => {
    SetGender(e.target.value);
  };

  const openFile = (e) => {
    StudentInfo.get("/showfiles");
  };

  return (
    <div div className='FideologyActivities'>
      <form >
        <div className="admissionForm-flexbox">
          <div className="admission-sections-headings">
            <h6>Personal Details</h6>
          </div>
          <div className="admission-sections">
            {/* Name */}
            <div>
              <label className="label-admissionForm">Enter Your Name</label>

              <input
                type="text"
                name="name"
                required
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                className="biggerinput-admissionForm"
              />
            </div>
           
            <Container fluid className="AdmissionForm-container">
              <Row>
                <Col>
                  <div>
                    <label className="label-admissionForm">Email</label>

                    <input
                      type="text"
                      name="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                      className="biggerinput-admissionForm"
                    />
                  </div>
                </Col>

                <Col>
                  <div>
                    <label className="smallerlabel-admissionForm">
                      Mobile No
                    </label>
                    <input
                      type="text"
                      name="studentMobNo"
                      value={studentMobNo}
                      required
                      onChange={(e) => {
                        SetStudentMobNO(e.target.value);
                      }}
                      className="input-admissionForm-marks"
                    />
                  </div>
                </Col>
              </Row>
            </Container>

            {/* Address */}
            <div>
              <label className="label-admissionForm">Address</label>
              <input
                type="text"
                name="address"
                value={address}
                required
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
                className="biggerinput-admissionForm"
              />
              <Container fluid className="AdmissionForm-container">
                <Row>
                  <Col>
                    <div className="Caste-admission">
                      <label className="smallerlabel-admissionForm">
                        Gender
                      </label>
                      <br />
                      <select
                        value={gender}
                        required
                        onChange={handelGenderChange}
                        className="input-admissionForm"
                      >
                        <option value="">Select Your Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </Col>

                  <Col>
                    <div className="Caste-admission">
                      <label className="smallerlabel-admissionForm">
                        Date Of Birth
                      </label>
                      <br />
                      <input
                        required
                        type="date"
                        name="birthDate"
                        value={birthDate}
                        onChange={(e) => {
                          setBirthDate(e.target.value);
                        }}
                        className="input-admissionForm"
                      />
                    </div>
                  </Col>
                </Row>
              </Container>
              <Container fluid className="AdmissionForm-container">
                <Row>
                  <Col>
                    <div>
                      <label className="label-admissionForm">
                        Father's Name
                      </label>
                      <input
                        type="text"
                        required
                        name="fatherName"
                        value={fatherName}
                        onChange={(e) => {
                          SetFatherName(e.target.value);
                        }}
                        className="biggerinput-admissionForm"
                      />
                    </div>
                  </Col>

                  <Col>
                    <div>
                      <label className="smallerlabel-admissionForm">
                        Mobile No
                      </label>
                      <input
                        type="text"
                        name="fatherMobNo"
                        required
                        value={fatherMobNo}
                        onChange={(e) => {
                          SetFatherMobNo(e.target.value);
                        }}
                        className="input-admissionForm-marks"
                      />
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
            {/* 10th school name */}
          </div>

          {/* 10th marks */}
          <div className="admission-sections-headings">
            <h6>Past Qualifications</h6>
          </div>
          <div className="admission-sections">
            <Container fluid className="AdmissionForm-container">
              <Row>
                <Col>
                  <div>
                    <label className="label-admissionForm">
                      10th School Name
                    </label>
                    <input
                      type="text"
                      required
                      name="schoolName"
                      value={schoolName}
                      onChange={(e) => {
                        setSchoolName(e.target.value);
                      }}
                      className="biggerinput-admissionForm"
                    />
                  </div>
                </Col>

                <Col>
                  <div>
                    <label className="smallerlabel-admissionForm">
                      10th marks
                    </label>
                    <input
                      type="text"
                      required
                      name="marks10thPercentages"
                      value={marks10th}
                      onChange={(e) => {
                        setmarks10th(e.target.value);
                      }}
                      className="input-admissionForm-marks"
                    />
                  </div>
                </Col>
              </Row>
            </Container>
           
            <div className="marks-caste">
              <Container className="AdmissionForm-container">
                <br />
                <Row>
                  <Col>
                    <div>
                      <label className="label-admissionForm">
                        10th mark sheet
                      </label>
                      {/* <input
                        required
                        className="upload-admissionForm"
                        type="file"
                        style={{
                          display: `${
                            isTenthMarkSheetFilePicked ? "" : "none"
                          }`,
                        }}
                        onChange={fileHandler}
                        name="markSheet10th"
                      />
                      {/* <a href={Showfiles + markSheet10th} target="_blank">
                View
              </a> */} 
                      <a
                        className="btn btn-info"
                        style={{ display: `${viewTenthMark ? "" : "none"}` }}
                        href={Showfiles + markSheet10th}
                        target="_blank"
                      >
                        View
                      </a>
                     
                    </div>
                  </Col>
                  <Col>
                    {" "}
                    <div>
                      <label className="label-admissionForm">
                        Leaving Certificate*
                      </label>
                      {/* <input
                        required
                        className="upload-admissionForm"
                        type="file"
                        style={{
                          display: `${
                            isLeavingCertificateFilePicked ? "" : "none"
                          }`,
                        }}
                        onChange={fileHandler}
                        name="leavingCertificate"
                      /> */}
                      {/* <a href={Showfiles + incomeCertificate} target="_blank">
                  View
                </a> */}
                      <a
                        className="btn btn-info"
                        style={{ display: `${viewLeaving ? "" : "none"}` }}
                        href={Showfiles + leavingCertificate}
                        target="_blank"
                      >
                        View
                      </a>
                    
                    </div>
                  </Col>
                  <Col></Col>
                </Row>
              </Container>
            </div>
          </div>

          <div className="admission-sections-headings">
            <h6>Caste Details</h6>
          </div>
          <div className="admission-sections">
            <Container fluid className="AdmissionForm-container">
              <Row>
                <Col>
                  {" "}
                  <div className="Caste-admission">
                    <label className="smallerlabel-admissionForm">Caste</label>
                    <br />
                    <select
                      value={cast}
                      onChange={handelCastChange}
                      required
                      className="input-admissionForm"
                    >
                      <option value="null">Select Your Caste</option>
                      <option value="open">OPEN</option>
                      <option value="obc">OBC</option>
                      <option value="st">ST</option>
                      <option value="sc">SC</option>
                    </select>
                  </div>
                </Col>
                <Col>
                  <div style={{ display: `${cast == "open" ? "none" : ""}` }}>
                    <label className="label-admissionForm">
                      Caste Certificate
                    </label>
                    {/* <input
                      className="upload-admissionForm"
                      type="file"
                      // value = {castCertificate}
                      onChange={fileHandler}
                      style={{
                        display: `${isCastCertificateFilePicked ? "" : "none"}`,
                      }}
                      name="castCertificate"
                    /> */}

                    {/* <div>
                    <p>{castCertificate=="" && castCertificateName!="NULL"?"File Name "+castCertificateName:"File Name "+castCertificate.name}</p>
                  </div> */}

                    <a
                      className="btn btn-info"
                      style={{ display: `${viewCast ? "" : "none"}` }}
                      href={Showfiles + castCertificate}
                      target="_blank"
                    >
                      View
                    </a>
                    
                  </div>
                </Col>
              </Row>
            </Container>
          </div>

          <div className="admission-sections-headings">
            <h6>Income Details</h6>
          </div>
          <div className="admission-sections">
            <Container className="AdmissionForm-container">
              <Row>
                <Col>
                  <div>
                    <label className="smallerlabel-admissionForm">
                      Enter your Annual Income
                    </label>
                    <input
                      type="text"
                      name="annualIncome"
                      value={annualIncome}
                      required
                      onChange={(e) => {
                        SetAnnualIncome(e.target.value);
                      }}
                      className="input-admissionForm-marks"
                    />
                  </div>
                </Col>

                <Col>
                  {" "}
                  <div>
                    <label className="label-admissionForm">
                      Income Certificate
                    </label>
                    {/* <input
                      className="upload-admissionForm"
                      required
                      type="file"
                      style={{
                        display: `${
                          isIncomeCertificateFilePicked ? "" : "none"
                        }`,
                      }}
                      onChange={fileHandler}
                      name="incomeCertificate"
                    /> */}
                    {/* <a href={Showfiles + incomeCertificate} target="_blank">
                  View
                </a> */}
                    <a
                      className="btn btn-info"
                      style={{ display: `${viewIncome ? "" : "none"}` }}
                      href={Showfiles + incomeCertificate}
                      target="_blank"
                    >
                      View
                    </a>
                   
                  </div>
                </Col>

                <Col></Col>
              </Row>
            </Container>
          </div>
        </div>

        <br />
        
        
      </form>
      <div
            class="col-md-12 text-center"
            className="submit-button-admissionForm"
          >
        <button className="btn btn-primary" onClick={handleAcceptRequest}>
          Accept
        </button>

        <button className="btn btn-danger" onClick={handleRejectRequest}>
          Reject
        </button>
      </div>
    </div>
  );
}

export default DisplayStudentDetailsAdmin;
