//Import Relevant Things To React
import React, { useState } from 'react';

//Import CSS Module
import classes from './Auth.module.css';

//Import React Google OAuth2
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';

//Import JWT_Decode
import jwt_decode from 'jwt-decode';

//Import From  react-router-dom
import { Form, NavLink } from 'react-router-dom';

const Auth = ({ login }) => {
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
      <div className='d-flex justify-content-center py-4 py-lg-5 '>
        <div className={`${classes.form}`}>
          <div className='w-100 bg-white rounded-3'>
            <NavLink
              to='/signup'
              className={({ isActive }) =>
                isActive
                  ? `${classes['auth-btn']}  rounded-top-3 fw-bold text-dark  w-50 text-center py-3 bg-white text-uppercase`
                  : `${classes['auth-btn']}  text-secondary  w-50 text-center py-3 text-uppercase`
              }
            >
              Sign Up
            </NavLink>
            <NavLink
              to='/login'
              className={({ isActive }) =>
                isActive
                  ? `${classes['auth-btn']}  rounded-top-3 fw-bold  text-dark w-50 text-center py-3 bg-white text-uppercase`
                  : `${classes['auth-btn']}  text-secondary w-50 text-center  py-3 text-uppercase`
              }
            >
              Sign in
            </NavLink>
          </div>
          <div
            className={`${classes['form-border']} px-3 py-4 p-md-5 bg-white  text-center`}
          >
            <h1 className='mb-4 rounded-3 fs-1'>
              {login ? 'Sign in to your account.' : 'Create your account.'}
            </h1>
            <p className='mb-2 '>
              Build skills for today, tomorrow, and beyond.
            </p>
            <p className='mb-4'>Education to future-proof your career.</p>
            {/* Google/ Facebook Login */}
            <div className='d-flex justify-content-center gap-3 mb-4'>
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
            <div className='d-flex align-items-center mx-3 mb-4'>
              <div className={classes['break-line']}></div>
              <p className={`${classes.or} mb-0 fw-semibold`}>or</p>
              <div className={classes['break-line']}></div>
            </div>
            {/* Login form */}
            <div className='mx-3'>
              <Form>
                <div class='mb-3'>
                  <input
                    type='email'
                    class='form-control form-control-lg rounded-1'
                    placeholder='Email Address'
                  />
                </div>
                {login && (
                  <div className='mb-3'>
                    <input
                      type='password'
                      className='form-control form-control-lg rounded-1'
                      placeholder='Password'
                    />
                  </div>
                )}

                <div className='mb-4'>
                  <small className={classes['text-small-size']}>
                    By clicking {login ? '"Sign in,"' : '"Sign up,"'} you agree
                    to our{' '}
                    <a href='#' className='text-dark'>
                      Terms of Use
                    </a>{' '}
                    and our{' '}
                    <a href='#' className='text-dark'>
                      Privacy Policy
                    </a>
                    .
                  </small>
                </div>
                <div
                  className={`d-flex justify-content-center ${login && 'mb-4'}`}
                >
                  <button
                    className={`${classes['btn-submit']} d-flex justify-content-between align-items-center   py-2 px-3 `}
                  >
                    <span className='text-white fw-semibold  lh-sm'>
                      {login ? 'Sign in' : 'Sign up'}
                    </span>
                    <span className='text-white fw-semibold lh-sm'>
                      <i className='fs-2'>→</i>
                    </span>
                  </button>
                </div>
              </Form>
            </div>
            {/* Login form */}
            {login && (
              <React.Fragment>
                <div className='mb-4'>
                  <a
                    href='#'
                    className={`${classes.link} text-decoration-none fs-6 fw-semibold `}
                  >
                    Forgot your password?
                  </a>
                </div>
                <div className='d-flex align-items-center mx-3 mb-4'>
                  <div className={classes['break-line']}></div>
                  <p className={`${classes.or} mb-0 fw-semibold`}>or</p>
                  <div className={classes['break-line']}></div>
                </div>
                <div className=''>
                  <a
                    href='#'
                    className={`${classes.link} text-decoration-none fs-6 fw-semibold `}
                  >
                    Sign in with your organization.
                  </a>
                </div>
              </React.Fragment>
            )}
          </div>
        </div>
      </div>
      {/* Form */}
    </div>
  );
};

export default Auth;
