import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import {adminInitiate, setAdmin} from '../redux/actions';
const AdminDashBoard = () =>{
  const dispatch = useDispatch();

  useEffect(()=>{
      dispatch(setAdmin(true));
  },[dispatch])
  return (
    <div>AdminDashBoard</div>
  )
}

export default AdminDashBoard