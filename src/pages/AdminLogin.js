import React,{useEffect,useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import {adminInitiate, setAdmin} from '../redux/actions';
const AdminLogin = () => {

    const [state, setState] = useState({
        email: "",
        password: "",
    });

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(setAdmin(null));
    },[dispatch])
    
    const { email, password } = state;
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email || !password) {
            return;
        }
        
       
    }

    const handleChange = (e) => {
        let { name, value } = e.target;
        setState({ ...state, [name]: value });
    }

    return (
        <div>
            <div id="logreg-forms">
                <form className="form-signin" onSubmit={handleSubmit}>
                    <h1 className="h3 mb-3 font-weight-normal" id='SignIn-Heading-Label' style={{ textAlign: "center" }}>
                        Admin Login
                    </h1>
                    <input
                        type="email"
                        id="inputEmail"
                        className="form-control"
                        placeholder="Email Address"
                        name="email"
                        onChange={handleChange}
                        value={email}
                        required
                    />
                    <input
                        type="password"
                        id="inputPassword"
                        className="form-control"
                        placeholder="Password"
                        name="password"
                        onChange={handleChange}
                        value={password}
                        required
                    />
                    <button className="btn btn-secondary btn-block" id='sign-button-login' type="submit">
                        <i className="fas fa-sign-in-alt"></i> Login
                    </button>
                </form>
            </div>
        </div>
    )
}

export default AdminLogin