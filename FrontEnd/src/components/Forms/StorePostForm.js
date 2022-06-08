/** @format */

import React from 'react';
import { useState } from 'react';
import { Form, FloatingLabel, Button } from 'react-bootstrap';

const StorePostForm = (props) => {
  const [name, setName] = useState();
  const [image, setImage] = useState();
  const [phone_number, setPhoneNumber] = useState();

  // Form Submit
  const [validated, setValidated] = useState(false);
  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    // Check if the Form is Valid
    if (form.checkValidity() === true) {
      postStore();
    } else {
      event.stopPropagation();
    }
    setValidated(true);
  };

  // Send Request to Post a New Store
  const postStore = () => {
    props.PostModalShowing();
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      {/* Store Name */}
      <FloatingLabel controlid='Store Name' label='Store Name' className='mb-3'>
        <Form.Control
          type='string'
          placeholder='Store Name'
          controlid='Store Name'
          label='Store Name'
          name='Store Name'
          required
          onChange={(e) => setName(e.target.value)}
        />
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        <Form.Control.Feedback type='invalid'>
          Store Name is Required
        </Form.Control.Feedback>
      </FloatingLabel>

      {/* Store Image */}
      <FloatingLabel
        controlid='Store Image'
        label='Store Image'
        className='mb-3'>
        <Form.Control
          type='url'
          placeholder='Store Image'
          required
          onChange={(e) => setImage(e.target.value)}
        />
        <Form.Control.Feedback type='invalid'>
          Correct URL is Required
        </Form.Control.Feedback>
      </FloatingLabel>

      {/* Store Phone Number */}
      <FloatingLabel
        controlid='Phone Number'
        label='Phone Number'
        className='mb-3'>
        <Form.Control
          type='tel'
          placeholder='Phone Number'
          maxLength='10'
          pattern='([0]{1}[7]{1}[7-9]{1}[0-9]{7})|([0]{1}[2-9]{1}[0-9]{7})'
          required
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <Form.Control.Feedback type='invalid'>
          Correct Phone Number is Required
        </Form.Control.Feedback>
      </FloatingLabel>

      <Button variant='primary' type='submit'>
        Submit
      </Button>
    </Form>
  );
};
export default StorePostForm;
