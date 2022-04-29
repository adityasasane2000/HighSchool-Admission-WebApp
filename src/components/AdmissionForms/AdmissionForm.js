import { Button } from "bootstrap";
import React from "react";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";

import StudentInfo from "../../api/StudentInfo";
function AdmissionForm() {

  const { currentUser } = useSelector((state) => state.user);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [schoolName, setSchoolName] = useState("");
  const [marks10th, setmarks10th] = useState("");
  const [markSheet10th, SetMarkSheet10th] = useState("");
  const [incomeCertificate, SetIncome] = useState("");
  const [cast, SetCast] = useState("");
  const [castCertificate, SetCastCertificate] = useState("");
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const fileHandler = (e) => {
    if (e.target.name == "markSheet10th") {
      SetMarkSheet10th(e.target.files[0]);
      console.log(e.target.files);
    } else if (e.target.name == "incomeCertificate") {
      SetIncome(e.target.files[0]);
      console.log(e.target.files);
    }else if(e.target.name == "castCertificate"){
      SetCastCertificate(e.target.files[0]);
      console.log(e.target.files);
    }
  };
  const submit = async () => {
    
    const Formdata = new FormData();
    Formdata.append("uid",currentUser.uid);
    Formdata.append("name",name);
    Formdata.append("email",email);
    Formdata.append("address",address);
    Formdata.append("schoolName",schoolName);
    Formdata.append("marks10th",marks10th);
    Formdata.append("markSheet10th",markSheet10th);
    Formdata.append("incomeCertificate",incomeCertificate);
    Formdata.append("cast",cast);
    Formdata.append("castCertificate",castCertificate);
    console.log(Formdata)

    await StudentInfo.post("/poststudentinfo", Formdata);

  };

  const handelCastChange = (e) =>{
    SetCast(e.target.value);
   
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
            onChange={(e) => {
              setName(e.target.value);
            }}
            className="input-admissionForm"
          />
        </div>
        {/* Email */}
        <div>
          <label className="label-admissionForm">Email</label>
          <input
            type="text"
            name="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="input-admissionForm"
          />
        </div>
        {/* Address */}
        <div>
          <label className="label-admissionForm">Address</label>
          <input
            type="text"
            name="address"
            onChange={(e) => {
              setAddress(e.target.value);
            }}
            className="input-admissionForm"
          />
        </div>
        {/* 10th school name */}
        <div>
          <label className="label-admissionForm">10th School Name</label>
          <input
            type="text"
            name="schoolName"
            onChange={(e) => {
              setSchoolName(e.target.value);
            }}
            className="input-admissionForm"
          />
        </div>
        {/* 10th marks */}
        <div>
          <label className="label-admissionForm">10th marks</label>
          <input
            type="text"
            name="marks10thPercentages"
            onChange={(e) => {
              setmarks10th(e.target.value);
            }}
            className="input-admissionForm"
          />
        </div>

        <div>
          <label className="label-admissionForm">10th mark sheet</label>
          <input type="file" onChange={fileHandler} name="markSheet10th" />
        </div>

        <div>
          <label className="label-admissionForm">Income Certificate</label>
          <input type="file" onChange={fileHandler} name="incomeCertificate" />
        </div>
        <div>
        <label className="label-admissionForm">Cast</label>
          <select value={cast} onChange={handelCastChange} >
            <option value="fruit">OPEN</option>
            <option value="vegetable">OBC</option>
            <option value="meat">ST</option>
          </select>
        </div>
        <div>
          <label className="label-admissionForm">Cast Certificate</label>
          <input type="file" onChange={fileHandler} name="castCertificate" />
        </div>
        <button
          type="submit"
          variant="success"
          className="submit-button-admissionForm"
        >
  
          Submit
        </button>
        <br />
      </div>
    </form>
  );
}

export default AdmissionForm;
