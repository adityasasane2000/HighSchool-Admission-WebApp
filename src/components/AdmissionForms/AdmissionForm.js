import { Button } from "bootstrap";
import React from "react";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { Row, Col, Container, Form } from 'react-bootstrap';

import StudentInfo from "../../api/StudentInfo";
function AdmissionForm() {

  const { currentUser } = useSelector((state) => state.user);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [address, setAddress] = useState("");
  const [schoolName, setSchoolName] = useState("");
  const [marks10th, setmarks10th] = useState("");
  const [markSheet10th, SetMarkSheet10th] = useState("");
  const [incomeCertificate, SetIncome] = useState("");
  const [cast, SetCast] = useState("");
  const [gender, SetGender] = useState("");
  const [castCertificate, SetCastCertificate] = useState("");
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  // const { currentUser } = useSelector((state) => state.user);
  useEffect(()=>{
      const handelGetReq = async() =>{
        const data = await StudentInfo.get(`/getstudentinfo/${currentUser.uid}`);
        console.log(data)
        console.log("hello")
        setName(data.data.StudentData[0].Name)
        setEmail(data.data.StudentData[0].Email)
        setBirthDate(data.data.StudentData[0].DOB)
        setAddress(data.data.StudentData[0].Address)
        setSchoolName(data.data.StudentData[0].SchoolName)
        setmarks10th(data.data.StudentData[0].TenthMarks)
        SetMarkSheet10th(data.data.StudentData[0].TenthMarksheet)
        SetIncome(data.data.StudentData[0].incomeCertificate)
        SetCastCertificate(data.data.StudentData[0].castCertificate)
        SetMarkSheet10th(data.data.StudentData[0].TenthMarksheet)
        SetCast(data.data.StudentData[0].Cast)
        console.log(data.data.StudentData[0].TenthMarksheet)
      }
      handelGetReq();
  },[setName,setEmail,setBirthDate,setAddress,setSchoolName,setmarks10th,SetMarkSheet10th,SetIncome,SetCast,SetCastCertificate,
  SetGender]);
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
    }
  };
  // console.log(currentUser)
  const submit = async () => {

    const Formdata = new FormData();
    Formdata.append("uid", currentUser.uid);
    Formdata.append("name", name);
    Formdata.append("email", email);
    Formdata.append("birthDate",birthDate);
    Formdata.append("address", address);
    Formdata.append("schoolName", schoolName);
    Formdata.append("marks10th", marks10th);
    Formdata.append("markSheet10th", markSheet10th);
    Formdata.append("incomeCertificate", incomeCertificate);
    Formdata.append("cast", cast);
    Formdata.append("gender", gender);
    // console.log(birthDate)


    Formdata.append("castCertificate", castCertificate);
    console.log(Formdata)

    await StudentInfo.post("/poststudentinfo", Formdata);

  };

  const handelCastChange = (e) => {
    SetCast(e.target.value);

  }
  const handelGenderChange = (e) => {
    SetGender(e.target.value);

  }

  return (
    <form onSubmit={handleSubmit(submit)}>
      <div className="admissionForm-flexbox">
        {/* Name */}
        <div>
          <label className="label-admissionForm">Enter Your Name</label>

          <input
            type="text"
            name="name"
            value = {name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            className="biggerinput-admissionForm"
          />
          <div class="note-admission">
            <p><strong>Note!</strong> Please enter your name according to your 10th Marksheet</p>
          </div>
        </div>

          <div>
          <label className="label-admissionForm">Enter Your Birth-Date</label>
            <input 
            type="date" 
            name ="birthDate"
            value = {birthDate}
            onChange={(e)=>{
              setBirthDate(e.target.value);
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
            value = {email}
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
            value = {address}
            onChange={(e) => {
              setAddress(e.target.value);
            }}
            className="biggerinput-admissionForm"
          />
        </div>
        {/* 10th school name */}

        {/* 10th marks */}
        <div className="marks-caste">

          <Container className="Caste-admission">

            <Row>

              <Col > <div className="Caste-admission">
                <label className="label-admissionForm">Caste</label>
                <select value={cast} onChange={handelCastChange} className="input-admissionForm"    >
                  <option value="open">OPEN</option>
                  <option value="obc">OBC</option>
                  <option value="st">ST</option>
                  <option value="sc">SC</option>
                </select>
              </div>
              </Col>

              <Col  >
                <div className="Caste-admission">
                  <label className="label-admissionForm">Gender</label>
                  <select value={gender} onChange={handelGenderChange} className="input-admissionForm"    >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>

                  </select>
                </div>

              </Col>

              {/* <Col  >
                <div className="Caste-admission">
                  <label className="label-admissionForm">Date Of Birth</label>
                 



                </div>

              </Col> */}


            </Row>
          </Container>
        </div>
        <Container className="tenthmarkSheet-schoolName">

          <Row>

            <Col >
              <div>
                <label className="label-admissionForm">10th School Name</label>
                <input
                  type="text"
                  name="schoolName"
                  value = {schoolName}
                  onChange={(e) => {
                    setSchoolName(e.target.value);
                  }}
                  className="biggerinput-admissionForm" />
              </div>

            </Col>

            <Col  >
              <div>
                <label className="label-admissionForm">10th marks</label>
                <input
                  type="text"
                  name="marks10thPercentages"
                  value = {marks10th}
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
          <p><strong>Note!</strong> While uploading the documents, please rename it consisting your name. For e.g - Atharva Meher(Income Certificate)</p>
        </div>
        <Container className='upload-docs-admission'>

          <Row>

            <Col ><div>
              <label className="label-admissionForm">10th mark sheet</label>
              <input 
              className="upload-admissionForm" 
              type="file" 
              
              onChange={fileHandler} 
              name="markSheet10th" 
              />
            </div>
            </Col>

            <Col  > <div>
              <label className="label-admissionForm">Income Certificate</label>
              <input className="upload-admissionForm" type="file" onChange={fileHandler} name="incomeCertificate" />
            </div></Col>

            <Col  ><div>
              <label className="label-admissionForm">Caste Certificate</label>
              <input className="upload-admissionForm" type="file" onChange={fileHandler} name="castCertificate" />
            </div></Col>
          </Row>
        </Container>
        <div class="note-admission">
          <p><strong>Note!</strong> Only .pdf files are allowed</p>
        </div>



        <br />  
        <div class="col-md-12 text-center" className="submit-button-admissionForm">

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
    </form>
  );
}

export default AdmissionForm;
