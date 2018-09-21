import React from 'react';

export default class LoginForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      flagSubmit: false,
    }
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleValidation(event) {
    event.preventDefault();
    let { fields } = this.state;
    let errors = {};
    let formIsValid = true;

    const regexEmail = '';
    const regexPassword = '';
    const passwordMinLength = 8;
    const passwordMaxLength = 10;
  }

  validationEmail(email) {
    console.log(email)
  }

  validationPassword(password) {
    console.log(password)
  }

  render() {
    return (
      <div>
        Login Form
        <input type="text" name="email" value={this.state.email} onChange={(event) => this.handleChange(event)} />
        <input type="password" name="password" value={this.state.password} onChange={(event) => this.handleChange(event)} />
        <button type="button" onClick={(event) => this.handleValidation(event)}></button>
      </div>
    )
  }
}