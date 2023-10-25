//Import relevant things
import React, { useState } from 'react';
import classes from './Auth.module.css';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import jwt_decode from 'jwt-decode';

const Auth = () => {
  //ClientID
  const CLIENT_ID =
    '735715664124-s3g87l80c8q030mp2gi4ddkhj2op7t6p.apps.googleusercontent.com';

  //Get user info from google oauth2 login
  const [userLoginGoogle, setUserLoginGoogle] = useState(null);

  //Handle login successfully
  const handleLoginSuccess = (credentialResponse) => {
    const userInfo = jwt_decode(credentialResponse.credential);
    setUserLoginGoogle(userInfo);
  };

  console.log(userLoginGoogle);

  return (
    <div className={classes.auth}>
      {/* Navbar */}
      <div className='container-fluid bg-white'>
        <nav className='d-flex align-items-center  container'>
          <h1>App Logo</h1>
        </nav>
      </div>
      {/* Navbar */}

      {/* Form */}
      <div className='d-flex justify-content-center pt-4 pt-lg-5'>
        <div className={`${classes.form}  rounded-3`}>
          <div className='w-100 bg-white'>
            <button className='d-inline-block w-50 text-center fs-5 py-3 border-0 bg-light fw-normal'>
              Sign Up
            </button>
            <button className='d-inline-block w-50 text-center fs-5 fw-semibold py-3 border-2  bg-white   border-0 rounded-3'>
              Sign In
            </button>
          </div>
          <div className='p-4 bg-white  text-center rounded-3'>
            <h1 className='mb-4 rounded-3 fs-1'>Sign in to your account.</h1>
            <p className='mb-2 '>
              Build skills for today, tomorrow, and beyond.
            </p>
            <p className='mb-2'>Education to future-proof your career.</p>
            {/* Google/ Facebook Login */}
            <div className='d-flex justify-content-center gap-3'>
              <GoogleOAuthProvider clientId={CLIENT_ID}>
                <GoogleLogin
                  onSuccess={(credentialResponse) => {
                    handleLoginSuccess(credentialResponse);
                  }}
                  onError={() => {
                    console.log('Login Failed');
                  }}
                />
              </GoogleOAuthProvider>
            </div>
            {/* Google/ Facebook Login */}
          </div>
        </div>
      </div>
      {/* Form */}
    </div>
  );
};

export default Auth;
