import React from 'react';

class Login extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      username: "",
      password: ""
    }
  }

  handleChange(type) {
    return e => {
      this.setState({ [type]: e.target.value })
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.login(this.state)
  }

  render(){
    return (
      <div className="login-container">
        <h1 className="login-title">Welcome Back!</h1>

        <form className="login-form">
          <input
            type="text"
            name="username"
            className="login-input"
            placeholder="Username"
            value={ this.state.username }
          />
          <input
            type="text"
            name="password"
            className="login-input"
            placeholder="Password"
            value={ this.state.password }
          />


        </form>
      </div>
    )
  }
}

// const mDTP = dispatch => ({
//   login: user => dispatch(login(user))
// });

export default Login;