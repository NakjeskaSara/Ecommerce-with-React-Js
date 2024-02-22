
import React from 'react';
import './CSS/LoginSignup.css'
const LoginSIgnup = () => {
  return (
    <div>
     <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
        <input type="text" placeholder='Your Name' />
          <input type="text" placeholder='Email Address' />
          <input type="password" placeholder='Password' />
        </div>
        <button>Continue</button>
        <p className="loginsignup-login">Alredy have an account? <span>Login here </span></p>
         <div className="loginsignup-agree">
          <input type="chechbox" name='' id='' />
          <p>By continuing, i agree to the terms of use & privacy policy</p>
         </div>
      </div>
     </div>
     
    </div>
  );
}

export default LoginSIgnup;
