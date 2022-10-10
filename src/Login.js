import React from 'react';
import './Login.css';

const logo = require('./assets/img/spotify-logo-white.png');

function Login() {
  return (
    <div className='login'>
      <img src={logo} alt="logo" />
      <a>LOGIN WITH SPOTIFY</a>
    </div>
  )
}

export default Login