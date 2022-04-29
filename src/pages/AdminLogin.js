import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import {adminInitiate, setAdmin} from '../redux/actions';
const AdminLogin = () => {
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(setAdmin(true));
    },[dispatch])
    
    return (
        <div>AdminLogin
            <Link to="/admin/dashboard" >Login</Link>
        </div>
    )
}

export default AdminLogin