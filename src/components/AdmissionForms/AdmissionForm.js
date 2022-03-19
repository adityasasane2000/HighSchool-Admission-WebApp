import React from "react";
import { Field, reduxForm } from "redux-form";

import FileInput from "./FileInput";
class AdmissionForm extends React.Component {
  renderError = ({ error, touched }) => {
    if (touched && error) {
      return <div>{error}</div>;
    }
  };
  renderInput = ({ input, label, meta, type }) => {
    console.log(meta);
    return (
      <div className="field">
        <label>{label}</label>
        <input {...input} type={type} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );
  };
  onSubmit(formValues) {
    console.log(formValues);
  }
  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <Field
          name="name"
          component={this.renderInput}
          label="Name"
          type="text"
        />
        <Field
          name="emailId"
          component={this.renderInput}
          label="Email"
          type="email"
        />
        <Field type="file" name="poster" component={FileInput} />
        <button type="submit">Submit</button>
      </form>
    );
  }
}
const validate = (formValues) => {
  const errors = {};
  if (!formValues.name) {
    errors.name = "You must enter your full name.";
  }
  if (!formValues.emailId) {
    errors.emailId = "You must enter email id.";
  }
  return errors;
};

export default reduxForm({
  form: "admissionForm",
  validate: validate,
})(AdmissionForm);
