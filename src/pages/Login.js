import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';
import { googleSignInInitiate, loginInitiate } from '../redux/actions';

import "./Login.css"

const Login = () => {
    const [state, setState] = useState({
        email: "",
        password: "",
    });

    const { currentUser } = useSelector((state) => state.user);
    const history = useHistory();

    useEffect(() => {
        if (currentUser) {
            console.log(currentUser)
            history.push("/");
        }
    }, [currentUser, history]);

    const dispatch = useDispatch();

    const { email, password } = state;
    const handleGoogleSignIn = () => {
        dispatch(googleSignInInitiate());
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email || !password) {
            return;
        }
        dispatch(loginInitiate(email, password));
        setState({ email: "", password: "" });
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
                        Sign in
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
                        <i className="fas fa-sign-in-alt"></i> Sign In
                    </button>
                    <p style={{ textAlign: "center" }}>OR</p>
                    <div className="social-login" >
                        <button className="btn google-btn social-btn"  type="button" onClick={handleGoogleSignIn} >
                            <span>
                                <i className="fab fa-google-plus-g" id='google-btn-login' ></i>  Google
                            </span>
                        </button>
                    </div>


                    <hr />
                    <p id='DontHaveAccount-Login'>Don't have an account </p>
                    <Link to="/signup" >
                        <div id='Signupnewaccount-Login'>
                        <button className="btn btn-primary btn-block"  type="button">
                            <i className="fas fa-user-plus" ></i> Sign up New Account
                        </button>
                        </div>
                    </Link>
                </form>
            </div>
        </div>
    )
}

export default Login