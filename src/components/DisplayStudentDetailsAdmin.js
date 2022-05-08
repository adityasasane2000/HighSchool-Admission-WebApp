import { Button } from "bootstrap";
import React from "react";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector,useDispatch } from "react-redux";
import { Row, Col, Container, Form } from "react-bootstrap";
import { useHistory } from "react-router-dom";
// import { useParams } from "react-router-dom";
import StudentInfo from "../api/StudentInfo";
import Showfiles from "../api/FileInfo";

import {adminInitiate, setAdmin} from '../redux/actions';

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

  const history = useHistory();
  const params = useParams();

  const dispatch = useDispatch();

  useEffect(()=>{
      dispatch(setAdmin(true));
  },[dispatch])

  // const [msg ,SetMes] = useState("");

  // const [castSelectedFile, SetcastSelectedFile] = useState();
  

  // const changeCastCertificateHandler = (event) => {
  //   SetcastSelectedFile(event.target.files[0]);
  //   SetisCastCertificateFilePicked(true);
  // };

//   const onClickRemoveCastData =()=>{
//     SetisCastCertificateFilePicked(true);
//     SetViewCast(false);
//   }

//   const onClickRemoveIncomeData =()=>{
//     SetIsIncomeCertificateFilePicked(true);
//     SetViewIncome(false);
//   }
//   const onClickRemoveTenthMarkSheetData =()=>{
//     SetIsTenthMarkSheetFilePicked(true);
//     SetViewTenthMark(false);
//   }



  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  // const { currentUser } = useSelector((state) => state.user);
  useEffect(() => {
    const handelGetReq = async () => {
      const data = await StudentInfo.get(`/getstudentinfo/${params.id}`);
      console.log(data)
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
      params.id,
    setName,
    setEmail,
    setBirthDate,
    setAddress,
    setSchoolName,
    setmarks10th,
    SetCast,
    SetGender,

    SetCastCertificate,


    SetIncome,

    SetMarkSheet10th,


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
    <div className='FideologyActivities'>
    <div className="fideo">
        <br/>
        <br/>
        <br/>
    <form >
      <div className="admissionForm-flexbox">
        
        {/* Name */}
        <div>
          <label className="label-admissionForm">Enter Your Name</label>

          <input
            type="text"
            name="name"
            disabled="true"
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
            disabled="true"
            className="biggerinput-admissionForm"
          />
        </div>
        {/* Address */}
        <div>
          <label className="label-admissionForm">Address</label>
          <input
            type="text"
            name="address"
            disabled="true"
            value={address}

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
                  <input  disabled="true" value = {cast}  onChange={handelCastChange} className="input-admissionForm"/>
                </div>
              </Col>

              <Col>
                <div className="Caste-admission">
                  <label className="smallerlabel-admissionForm">Gender</label>
                  <br />
                  <input  disabled="true" value = {gender}  onChange={handelGenderChange} className="input-admissionForm"/>
                </div>
              </Col>

              <Col>
                <div className="Caste-admission">
                  <label className="smallerlabel-admissionForm">
                    Date Of Birth
                  </label>
                  <br />
                  <input
                    name="birthDate"
                    value={birthDate}
                    disabled="true"
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
                  disabled="true"
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
                  disabled="true"
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

      

        <Container className="upload-docs-admission">
          <Row>
            <Col>
              <div>
                <label className="label-admissionForm">10th mark sheet</label>
               
                <a 
                  className="btn btn-info" 
                  style={{display:`${viewTenthMark ?"":"none"}`}}
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
                  Income Certificate
                </label>
                
                 <a 
                  className="btn btn-info" 
                  style={{display:`${viewIncome ?"":"none"}`}}
                  href={Showfiles + incomeCertificate} 
                  target="_blank"
                >
                  View
                </a>
            
              </div>
            </Col>

            <Col>
              <div style = {{display:`${cast =="open" ?"none":""}`}}>
                <label className="label-admissionForm">Caste Certificate</label>
                

                <a 
                  className="btn btn-info" 
                  style={{display:`${viewCast ?"":"none"}`}}
                  href={Showfiles + castCertificate} 
                  target="_blank"
                >
                  View
                </a>
               
              </div>
            </Col>
          </Row>
        </Container>
        

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
           
          </div>
          <br />
        </div>
      </div>
    </form>
    </div>
    </div>
  );
}

export default DisplayStudentDetailsAdmin;
