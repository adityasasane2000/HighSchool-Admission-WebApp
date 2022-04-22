import React from "react";
import { useForm } from "react-hook-form";
import {
  Button
  
} from "react-bootstrap";

function AdmissionForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="admissionForm-flexbox">
   
      <div>
        <label className="label-admissionForm">Enter Your  Name  </label>
        <input {...register("name", { required: true })} />
      </div>
      <div>
        <label className="label-admissionForm">Email</label>
        <input {...register("email", { required: true })} />
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

     <div >
    
      <Button type="submit" variant="success" className="submit-button-admissionForm" >Submit</Button>{' '}
      </div> 
      </div>
    </form>
    
  );
}

export default AdmissionForm;
