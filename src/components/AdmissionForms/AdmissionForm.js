import React from "react";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {useSelector } from "react-redux";

import StudentInfo from '../../api/StudentInfo';
// import StudentInfo from "../../api"
function AdmissionForm() {
  const { currentUser } = useSelector((state) => state.user);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [file, SetIncome] = useState("");

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const fileHandler = (e) => {
    // console.log(e.target.files);
    SetIncome(e.target.files[0]);
  }


  const submit =  async () => {
    // console.log(currentUser.uid)
    // console.log(name);
    const data = new FormData();
    data.append("file", file);
    console.log( {
      name: name,
      email: email,
      file: file,
      uid:currentUser.uid
    })

    await StudentInfo.post("/poststudentinfo", {
      name: name,
      email: email,
      file: file,
      uid:currentUser.uid
    });
    //console.log(file);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="admissionForm-flexbox">
   
      <div>
        <label className="label-admissionForm">Enter Your  Name  </label>
        <input className="input-admissionForm" {...register("name", { required: true })} />
      </div>
      <div>
        <label className="label-admissionForm">Email</label>
        <input className="input-admissionForm"{...register("email", { required: true })} />
      </div>
      <div>
        <label className="label-admissionForm">10th Mark Sheet</label>
        <input {...register("TenthMarkSheet", { required: true })} type="file" />
      </div>
      <div>
        <label className="label-admissionForm">Leaving Certificate</label>
        <input {...register("leavingCertificate", { required: true })} type="file" />
      </div>
      <div>
        <label className="label-admissionForm">Income Certificate</label>
        <input {...register("incomeCertificate", { required: true })} type="file" />
      </div>
      <br/>
      <br/>
     <div >
    
      <Button type="submit" variant="success" className="submit-button-admissionForm" >Submit</Button>{' '}
      </div> 
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      </div>
    </form>
    <form onSubmit={handleSubmit(submit)}>
        <div>
          <label>Name:</label>
          <input type="text" onChange={(e) => {
            setName(e.target.value);
          }}
          />
        </div>

        <div>
          <label>Email:</label>
          <input type="text" onChange={(e) => {
            setEmail(e.target.value);
          }}
          />
        </div>

        <div>
          <label>Income:</label>
          <input type="file" onChange={fileHandler}
          />
        </div>
        <input type="submit" />

      </form>

    
    
  );
}

export default AdmissionForm;
