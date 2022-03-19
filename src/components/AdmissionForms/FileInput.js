import React from "react";

class FileInput extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    const {
      input: { onChange },
    } = this.props;
    onChange(e.target.files[0]);
  }

  render() {
    const {
      input: { value },
    } = this.props;
    console.log(this.props.fields)
    return (
      <input
        type="file"
        onChange={(e) => {
          e.preventDefault();
          const { fields } = this.props;
          // convert files to an array
          const files = [...e.target.files];
          fields.yourField.handleChange(files);
        }}
      />
    );
  }
}

export default FileInput;
