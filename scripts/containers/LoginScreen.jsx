import React from 'react';
import { LoginForm } from 'components';

export default class LoginScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div>
        <h2>Login Screen</h2>
        <LoginForm />
      </div>
    );
  }
}