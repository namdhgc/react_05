import React from 'react';

export default class LoginForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errors: {},
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.handleValidation()) {
      console.log('true')
    } else {
      console.log('false')
    }
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    }, function() {
      this.handleValidation();
    })
  }

  handleValidation() {
    let errors = {};
    let formIsValid = true;
    const { email } = this.state;
    const { password } = this.state;
    const isEmail = this.validationEmail(email);
    const isPassword = this.validationPassword(password);

    if (Object.keys(isEmail).length > 0 || Object.keys(isPassword).length > 0) {
      errors['email'] = isEmail.email;
      errors['password'] = isPassword.password;
      formIsValid = false;
    }

    this.setState({ errors: errors })
    return formIsValid;
  }

  validationEmail(email) {
    const regexEmail = /\S+@\S+\.\S+/;
    const isEmail = regexEmail.test(email);
    let errors = {};
    if (!isEmail) {
      errors.email = "Your email is not valid!";
    }
    return errors;
  }

  validationPassword(password) {
    const regexPassword = /^[a-zA-Z0-9]{8,10}$/;
    const passwordMinLength = 8;
    const passwordMaxLength = 10;
    let errors = {};

    if (password.length < passwordMinLength || password.length > passwordMaxLength) {
      errors.password = "Please enter password with length between 8 and 10 characters!";
    } else if (!regexPassword.test(password)) {
      errors.password = "Password must be character in a-z, A-Z and 0-9";
    }
    return errors;
  }

  render() {
    console.log('render')
    return (
      <div>
        Login Form
        <br />
        <input type="text" name="email" value={this.state.email} onChange={(event) => this.handleChange(event)} />
        <span>{this.state.errors.email}</span>
        <br />
        <input type="password" name="password" value={this.state.password} onChange={(event) => this.handleChange(event)} />
        <span>{this.state.errors.password}</span>
        <br />
        <button type="button" onClick={(event) => this.handleSubmit(event)}>Login</button>
        <br />
      </div>
    )
  }
}