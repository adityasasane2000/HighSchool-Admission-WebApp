import { Button } from "bootstrap";
import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { Row, Col, Container, Form } from "react-bootstrap";

import StudentInfo from "../../api/StudentInfo";
import Showfiles from "../../api/FileInfo";

function AdmissionForm() {
  const { currentUser } = useSelector((state) => state.user);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [address, setAddress] = useState("");
  const [schoolName, setSchoolName] = useState("");
  const [marks10th, setmarks10th] = useState("");
 
  
  const [cast, SetCast] = useState("open");
  const [gender, SetGender] = useState("");

  const [castCertificate, SetCastCertificate] = useState("");
  const [castCertificateName,SetCastCertificateName] = useState("");
  const [isCastCertificateFilePicked, SetisCastCertificateFilePicked] =
  useState(true);
  const [viewCast,SetViewCast] = useState(false);

  const [incomeCertificate, SetIncome] = useState("");
  const [incomeCertificateName,SetIncomeCertificateName] = useState("");
  const [isIncomeCertificateFilePicked, SetIsIncomeCertificateFilePicked] =
  useState(true);
  const [viewIncome,SetViewIncome] = useState(false);

  const [markSheet10th, SetMarkSheet10th] = useState("");
  const [tenthMarkSheetName,SetTenthMarkSheetName] = useState("");
  const [isTenthMarkSheetFilePicked, SetIsTenthMarkSheetFilePicked] =
  useState(true);
  const [viewTenthMark,SetViewTenthMark] = useState(false);

  // const [castSelectedFile, SetcastSelectedFile] = useState();
  

  // const changeCastCertificateHandler = (event) => {
  //   SetcastSelectedFile(event.target.files[0]);
  //   SetisCastCertificateFilePicked(true);
  // };

  const onClickRemoveCastData =()=>{
    SetisCastCertificateFilePicked(true);
    SetViewCast(false);
  }

  const onClickRemoveIncomeData =()=>{
    SetIsIncomeCertificateFilePicked(true);
    SetViewIncome(false);
  }
  const onClickRemoveTenthMarkSheetData =()=>{
    SetIsTenthMarkSheetFilePicked(true);
    SetViewTenthMark(false);
  }



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
     
      console.log("Hello");
     
      SetCastCertificate(data.data.StudentData[0].CastCertificate);
      if(data.data.StudentData[0].CastCertificate !="NULL"){
        SetisCastCertificateFilePicked(false);
        SetViewCast(true);
      }
      SetIncome(data.data.StudentData[0].incomeCertificate);
      if(data.data.StudentData[0].incomeCertificate!="NULL"){
        SetIsIncomeCertificateFilePicked(false);
        SetViewIncome(true)
      }
      SetMarkSheet10th(data.data.StudentData[0].TenthMarksheet);
      if(data.data.StudentData[0].TenthMarksheet!="NULL"){
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


  ]);
  const fileHandler = (e) => {
    if (e.target.name == "markSheet10th") {
      SetMarkSheet10th(e.target.files[0]);
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
  // console.log(currentUser)
  const submit = async () => {
    const Formdata = new FormData();
    Formdata.append("uid", currentUser.uid);
    Formdata.append("name", name);
    Formdata.append("email", email);
    Formdata.append("birthDate", birthDate);
    Formdata.append("address", address);
    Formdata.append("schoolName", schoolName);
    Formdata.append("marks10th", marks10th);
    Formdata.append("markSheet10th", markSheet10th);
    Formdata.append("incomeCertificate", incomeCertificate);
    Formdata.append("cast", cast);
    Formdata.append("gender", gender);
    Formdata.append("castCertificate", castCertificate);
    console.log(Formdata);
    console.log(castCertificate)

    await StudentInfo.post("/poststudentinfo", Formdata);
  };

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
    <form onSubmit={handleSubmit(submit)}>
      <div className="admissionForm-flexbox">
        <div class="note-admission">
          <p>
            <strong>Note!</strong> Please enter your name according to your 10th
            Marksheet
          </p>
        </div>
        {/* Name */}
        <div>
          <label className="label-admissionForm">Enter Your Name</label>

          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            className="biggerinput-admissionForm"
          />
        </div>

        {/* Email */}
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
        {/* Address */}
        <div>
          <label className="label-admissionForm">Address</label>
          <input
            type="text"
            name="address"
            value={address}
            onChange={(e) => {
              setAddress(e.target.value);
            }}
            className="biggerinput-admissionForm"
          />
        </div>
        {/* 10th school name */}

        {/* 10th marks */}
        <div className="marks-caste">
          <Container fluid className="Caste-admission">
            <Row>
              <Col>
                {" "}
                <div className="Caste-admission">
                  <label className="smallerlabel-admissionForm">Caste</label>
                  <br />
                  <select
                    value={cast}
                    onChange={handelCastChange}
                    className="input-admissionForm"
                  >
                    <option value="open">Select Your Caste</option>
                    <option value="open">OPEN</option>
                    <option value="obc">OBC</option>
                    <option value="st">ST</option>
                    <option value="sc">SC</option>
                  </select>
                </div>
              </Col>

              <Col>
                <div className="Caste-admission">
                  <label className="smallerlabel-admissionForm">Gender</label>
                  <br />
                  <select
                    value={gender}
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
        </div>
        <Container fluid className="tenthmarkSheet-schoolName">
          <Row>
            <Col>
              <div>
                <label className="label-admissionForm">10th School Name</label>
                <input
                  type="text"
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
                <label className="smallerlabel-admissionForm">10th marks</label>
                <input
                  type="text"
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

        <div class="note-admission">
          <p>
            <strong>Note!</strong> While uploading the documents, please rename
            it consisting your name. For e.g- Atharva Meher(Income Certificate)
          </p>
        </div>

        <Container className="upload-docs-admission">
          <Row>
            <Col>
              <div>
                <label className="label-admissionForm">10th mark sheet</label>
                <input
                  className="upload-admissionForm"
                  type="file"
                  style = {{display:`${isTenthMarkSheetFilePicked ?"":"none"}`}}
                  onChange={fileHandler}
                  name="markSheet10th"
                />
                {/* <a href={Showfiles + markSheet10th} target="_blank">
                  View
                </a> */}
                <a 
                  className="btn btn-info" 
                  style={{display:`${viewTenthMark ?"":"none"}`}}
                  href={Showfiles + markSheet10th} 
                  target="_blank"
                >
                  View
                </a>
                <span
                className="btn btn-danger"
                onClick={onClickRemoveTenthMarkSheetData}
                style = {{display:`${isTenthMarkSheetFilePicked?"none":""}`}}
                >X</span>
              </div>
            </Col>

            <Col>
              {" "}
              <div>
                <label className="label-admissionForm">
                  Income Certificate
                </label>
                <input
                  className="upload-admissionForm"
                  type="file"
                  style = {{display:`${isIncomeCertificateFilePicked ?"":"none"}`}}
                  onChange={fileHandler}
                  name="incomeCertificate"
                />
                {/* <a href={Showfiles + incomeCertificate} target="_blank">
                  View
                </a> */}
                 <a 
                  className="btn btn-info" 
                  style={{display:`${viewIncome ?"":"none"}`}}
                  href={Showfiles + incomeCertificate} 
                  target="_blank"
                >
                  View
                </a>
                <span
                className="btn btn-danger"
                onClick={onClickRemoveIncomeData}
                style = {{display:`${isIncomeCertificateFilePicked  ?"none":""}`}}
                >X</span>
              </div>
            </Col>

            <Col>
              <div style = {{display:`${cast =="open" ?"none":""}`}}>
                <label className="label-admissionForm">Caste Certificate</label>
                <input
                  className="upload-admissionForm"
                  type="file"
                  // value = {castCertificate}
                  onChange={fileHandler}
                  style = {{display:`${isCastCertificateFilePicked ?"":"none"}`}}
                  name="castCertificate"
                />
                
                
                  {/* <div>
                    <p>{castCertificate=="" && castCertificateName!="NULL"?"File Name "+castCertificateName:"File Name "+castCertificate.name}</p>
                  </div> */}

                <a 
                  className="btn btn-info" 
                  style={{display:`${viewCast ?"":"none"}`}}
                  href={Showfiles + castCertificate} 
                  target="_blank"
                >
                  View
                </a>
                <span
                className="btn btn-danger"
                onClick={onClickRemoveCastData}
                style = {{display:`${isCastCertificateFilePicked  ?"none":""}`}}
                >X</span>
              </div>
            </Col>
          </Row>
        </Container>
        <div class="note-admission">
          <p>
            <strong>Note!</strong> Only .pdf files are allowed
          </p>
        </div>

        <br />
        <div
          class="col-md-12 text-center"
          className="submit-button-admissionForm"
        >
          <br />
          <div
            class="col-md-12 text-center"
            className="submit-button-admissionForm"
          >
            <button
              type="submit"
              variant="success"
              className="submit-button-admissionForm1"
              class="btn btn-outline-success"
            >
              Submit
            </button>
          </div>
          <br />
        </div>
      </div>
    </form>
  );
}

export default AdmissionForm;
