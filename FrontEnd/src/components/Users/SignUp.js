/** @format */

import React, { useState } from 'react';
import axios from 'axios';
import cookie from 'react-cookies';
import jwt from 'jsonwebtoken';
import { useNavigate } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';

import { apiUrl } from '../../Axios';

function SignUp() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    role: 'shopper',
  });

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
        // If He is a Valid User => Login
        // dispatch(logInAction(user));
      }
    } else {
      // Otherwise, Logout & Clear the Cookies
      // dispatch(logOutAction());
    }
  }
  //

  // SignUp Function
  async function signUpHandler(e) {
    console.log('yy');
    e.preventDefault();
    try {
      const response = await axios.post(`${apiUrl}/signup`, userData);
      // Save Token in Cookie
      cookie.save('token', response.data.token);
      const token = cookie.load('token');
      validateToken(token);
      e.target.reset();
      setUserData({});
      navigate('/');
    } catch (error) {
      console.log('SignUp Error', error);
    }
  }
  //

  // On Change Handler Function
  function onChangeHandler(e) {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  }
  //

  return (
    <Form onSubmit={signUpHandler}>
      <fieldset>
        <legend>SignUp Form</legend>

        <Form.Label>Username: </Form.Label>
        <input
          type='text'
          placeholder='Your Name'
          name='username'
          onChange={onChangeHandler}
        />

        <Form.Label>Email: </Form.Label>
        <input
          type='email'
          placeholder='Email'
          name='email'
          onChange={onChangeHandler}
        />

        <Form.Label>Password: </Form.Label>
        <input
          type='password'
          placeholder='Password'
          name='password'
          onChange={onChangeHandler}
        />

        <Form.Label>role: </Form.Label>
        <Form.Select placeholder='Role' name='role' onChange={onChangeHandler}>
          <option value='shopper'>Shopper</option>
          <option value='seller'>Seller</option>
        </Form.Select>

        <Button type='submet'>SigUp</Button>
      </fieldset>
    </Form>
  );
}

export default SignUp;
