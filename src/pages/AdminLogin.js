import React,{useEffect,useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import AdminInfo from '../api/AdminInfo';
import { useHistory } from 'react-router-dom';

import {adminInitiate, setAdmin,setAdminData} from '../redux/actions';
const AdminLogin = () => {

    const [state, setState] = useState({
        email: "",
        password: "",
        msg:""
    });
    const { adminData } = useSelector((state) => state.user);
    const history = useHistory();
    const [id,setId] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        if (adminData !== null) {
            console.log(adminData)
            history.push("/admin/dashboard");
        }
    }, [adminData, history]);
 
    useEffect(()=>{
        dispatch(setAdmin(null));   
    },[dispatch])
    
    const { email, password ,msg} = state;
    const handleSubmit = async(e) => {
        e.preventDefault();
        if (!email || !password) {
            return;
        }
        const res = await AdminInfo.post("/hsam-admin",{email:email,password:password});
        console.log({email:email,password:password})

        console.log(res);
        setId(res.Id);
        setState({"msg":res.data.msg});
        dispatch(setAdminData(res.data.Id));
        
       
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
            <div>
                    {msg}
                </div>
        </div>
    )
}

export default AdminLogin