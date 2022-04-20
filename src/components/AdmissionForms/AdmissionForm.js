import React from "react";
import { useForm } from "react-hook-form";
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
     
      <div>
        <label>Enter Your  Name </label>
        <input {...register("name", { required: true })} />
      </div>
      <div>
        <label>Email</label>
        <input {...register("email", { required: true })} />
      </div>
      <div>
        <label>10th Mark Shet</label>
        <input {...register("TenthMarkSheet", { required: true })} type="file" />
      </div>
      <div>
        <label>Leaving Certificate</label>
        <input {...register("leavingCertificate", { required: true })} type="file" />
      </div>
      <div>
        <label>Income Certificate</label>
        <input {...register("incomeCertificate", { required: true })} type="file" />
      </div>

      
      <input type="submit" />
    </form>
  );
}

export default AdmissionForm;
