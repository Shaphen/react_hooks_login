import React, { useState, useEffect } from 'react';
import "./login.css"
// import { connect } from 'react-redux';
// import { login } from "../actions/session_actions";

const LoginForm = ({ login }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // useEffect always listens for changes base on the second arg (the array of dependencies)
  // anytime something changes and is in the array of dependencies, useEffect will execute the
  // code from the first arg (the function). In this case, anytime the username is updated,
  // the title of the app (tab) will change too
  // if the array is empty it will operate similarly to componentDidMount and will only fire
  // once at the first load of the page
  useEffect(() => { document.title =  username }, [username])

  const handleSubmit = () => login({ username: username, password: password })

  return (
    <div className="session-container">
      <div className="session-header-container">
        <p className="session-header">
          Cool App: We Do Cool App Things
        </p>
      </div>
      
      <form className="session-form">
        <p className="form-title">
          Welcome Back!
        </p>

        <input
          className="session-input"
          type="text"
          name="username"
          placeholder="Username"
          value={ username }
          onChange={ e => setUsername(e.target.value) }
        />
        <input
          className="session-input"
          type="text"
          name="password"
          placeholder="Password"
          value={ password }
          onChange={ e => setPassword(e.target.value) }
        />

        <div className="submit-clumn">
          <button className="login-button" onClick={ handleSubmit }>Login</button>
        </div>
      </form>
    </div>
  )
}

export default LoginForm;

// const mapDispatchToProps = dispatch => ({
//   login: payload => dispatch(login(payload))
// });

// export default connect(null, mapDispatchToProps)(LoginForm);