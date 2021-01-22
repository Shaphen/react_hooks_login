import React from 'react';
// import { connect } from 'react-redux';

class LoginFormClass extends React.Component {
  constructor(props){
    super(props);
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

  render() {

    const sessionContainerStyle = {
      display: "flex",
      flexDirection: "column"
    }

    const formTitleStyle = {
      fontSize: "30px",
      margin: "80px 0px 15px"
    }

    const formStyle = {
      display: "flex",
      flexDirection:"column",
      alignItems: "center"
    }

    const inputStyle = {
      width: "300px",
      marginBottom: "15px",
      padding: "10px",
      fontSize: "15px"
    }

    const loginButtonStyle = {
      width: "324px",
      padding: "10px",
      fontSize: "15px"
    }
    
    return (
      <div className="session-container" style={ sessionContainerStyle }>
        
        <label style={ formTitleStyle }>Welcome Back!</label>
        <form style={ formStyle }>
          <input
            type="text"
            name="username"
            style={ inputStyle }
            placeholder="Username"
            value={ this.state.username }
            onChange={ this.handleChange("username") }
          />
          <input
            type="text"
            name="password"
            style={ inputStyle }
            placeholder="Password"
            value={ this.state.password }
            onChange={ this.handleChange("password") }
          />
          <div className="submit-column">
            <button
              style={ loginButtonStyle }
              className="login-button"
              onClick={ this.handleSubmit }
            >Login</button>
          </div>
        </form>
        
      </div>
    )
  }
}

// const mDTP = dispatch => ({
//   login: user => dispatch(login(user))
// });

// export default connect(null, nDTP)(LoginFormClass);

export default LoginFormClass;