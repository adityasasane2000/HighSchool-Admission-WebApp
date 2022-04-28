import React from 'react';
import { Link } from 'react-router-dom';

import AdmissionForm from './AdmissionForm';

const ShowAdmissionForm = () =>{
    return(<div>
        <Link to="/admissionFillForm">
            Fill The Form
        </Link>
        <br/>
        <Link to="/admissionFillForm">
           Show The Form
        </Link>
    </div>);
}

export default ShowAdmissionForm;