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
