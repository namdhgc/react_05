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
      alert('Send login');
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
        <div className="user-login-5">
          <div className="row bs-reset">
            <div className="col-md-6 bs-reset">
              <div className="login-bg">
                {/*
                  <img className="login-logo" src="../assets/pages/img/login/logo.png" />
                */}
              </div>
              
            </div>
            <div className="col-md-6 login-container bs-reset mt-login-5-bsfix">
              <div className="login-content">
                <h1>Admin Login</h1>
                <form action="javascript:;" className="login-form" method="post">
                  <div className={`alert alert-danger ${Object.keys(this.state.errors).length > 0 ? '' : 'display-hide'}`}>
                    <button className="close" data-close="alert"></button>
                    <span>{this.state.errors.email}</span>
                    {this.state.errors.email && this.state.errors.password ? <br /> : ''}
                    <span>{this.state.errors.password}</span>
                  </div>
                  <div className="row">
                    <div className="col-xs-6">
                      <input
                        className="form-control form-control-solid placeholder-no-fix form-group"
                        type="text"
                        name="email"
                        placeholder="Email"
                        value={this.state.email}
                        onChange={(event) => this.handleChange(event)}
                      />
                    </div>
                    <div className="col-xs-6">
                      <input
                        className="form-control form-control-solid placeholder-no-fix form-group"
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={this.state.password}
                        onChange={(event) => this.handleChange(event)}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-4">
                      {/*<div className="rem-password">
                          <label className="rememberme mt-checkbox mt-checkbox-outline">
                            <input type="checkbox" name="remember" value="1" /> Remember me
                            <span></span>
                          </label>
                      </div>*/}
                    </div>
                    <div className="col-sm-8 text-right">
                      {/*<div className="forgot-password">
                        <a href="javascript:;" id="forget-password" className="forget-password">Forgot Password?</a>
                      </div>*/}
                      <button className="btn green" onClick={(event) => this.handleSubmit(event)}>Sign In</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}