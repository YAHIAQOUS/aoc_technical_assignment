/** @format */

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import cookie from 'react-cookies';
import jwt from 'jsonwebtoken';
import { useNavigate } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';

import { axiosInstance, apiUrl } from '../../Axios';

const SignIn = () => {
  const navigate = useNavigate();
  const [signInData, setSignInData] = useState({});

  // Validate Token Function
  function validateToken(token) {
    // Check The Token Exists in Cookies
    if (token !== 'null') {
      // Decode The Token to Get The User Info
      const user = jwt.decode(token);
      console.log(token, user);
      user.token = token;

      // Check if The User Exists
      if (user) {
        // If He is a Valid User => SignIn
        // dispatch(logInAction(user));
      }
    } else {
      // Otherwise, Logout & Clear the Cookies
      // dispatch(logOutAction());
    }
  }
  //

  // SignIn Function
  async function signInHandler(e) {
    e.preventDefault();
    try {
      console.log('signInData', signInData);
      const response = await axios.post(
        `${apiUrl}/signin`,
        {},
        {
          auth: {
            username: signInData.email,
            password: signInData.password,
          },
        }
      );
      // Save Token in Cookie
      cookie.save('token', response.data.token);
      const token = cookie.load('token');
      validateToken(token);
      e.target.reset();
      signInData({});
      navigate('/');
    } catch (error) {
      console.log('SignIn error', error.message);
    }
  }
  //

  // On Change Handler Function
  function onChangeHandler(e) {
    setSignInData({
      ...signInData,
      [e.target.name]: e.target.value,
    });
  }
  //

  return (
    <>
      <Form onSubmit={signInHandler}>
        <fieldset>
          <legend>SignIn Form</legend>

          <Form.Label>Username: </Form.Label>
          <Form.Input
            type='text'
            placeholder='Your Name'
            name='username'
            onChange={onChangeHandler}
          />

          <Form.Label>Password: </Form.Label>
          <Form.Input
            type='password'
            placeholder='password'
            name='password'
            onChange={onChangeHandler}
          />

          <Button>SignIn</Button>

          <div>
            <p>Don't have an account? SignUp</p>
            <Button onClick={() => navigate('/signup')}>Sign-Up</Button>
          </div>
        </fieldset>
      </Form>
    </>
  );
};

export default SignIn;
