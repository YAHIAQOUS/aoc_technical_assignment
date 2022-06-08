/** @format */

import React from 'react';
import { useState } from 'react';
import { Form, FloatingLabel, Button, Row, Col } from 'react-bootstrap';

const ItemUpdateForm = (props) => {
  const [name, setName] = useState();
  const [image, setImage] = useState();
  const [description, setDescription] = useState();
  const [price, setPrice] = useState();

  // Form Submit
  const [validated, setValidated] = useState(false);
  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    // Check if the Form is Valid
    if (form.checkValidity() === true) {
      updateItem();
    } else {
      event.stopPropagation();
    }
    setValidated(true);
  };

  // Send Request to Update Item
  const updateItem = () => {
    console.log('name', name);
    console.log('image', image);
    console.log('description', description);
    console.log('price', price);

    props.modalShowing();
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row>
        {/* Item Name */}
        <Col>
          <FloatingLabel
            controlid='Item Name'
            label='Item Name'
            className='mb-3'>
            <Form.Control
              type='string'
              placeholder='Item Name'
              controlid='Item Name'
              label='Item Name'
              name='Item Name'
              required
              onChange={(e) => setName(e.target.value)}
              defaultValue='Item Name'
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type='invalid'>
              Item Name is Required
            </Form.Control.Feedback>
          </FloatingLabel>

          {/* Item Image */}
          <FloatingLabel
            controlid='Item Image'
            label='Item Image'
            className='mb-3'>
            <Form.Control
              type='url'
              placeholder='Item Image'
              required
              onChange={(e) => setImage(e.target.value)}
              defaultValue='Item Image'
            />
            <Form.Control.Feedback type='invalid'>
              Correct URL is Required
            </Form.Control.Feedback>
          </FloatingLabel>
        </Col>

        <Col>
          {/* Item Description */}
          <FloatingLabel
            controlid='Item Description'
            label='Item Description'
            className='mb-3'>
            <Form.Control
              as='textarea'
              placeholder='Item Description'
              controlid='Item Description'
              label='Item Description'
              name='Item Description'
              required
              onChange={(e) => setDescription(e.target.value.trim())}
              defaultValue='Item Description'
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type='invalid'>
              Item Description is Required
            </Form.Control.Feedback>
          </FloatingLabel>

          {/* Item Price */}
          <FloatingLabel controlid='Price' label='Price' className='mb-3'>
            <Form.Control
              type='number'
              min='0'
              placeholder='Price'
              controlid='Price'
              label='Price'
              name='Price'
              required={true}
              defaultValue='Item Price'
              onChange={(e) => setPrice(e.target.value)}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type='invalid'>
              Price is Required
            </Form.Control.Feedback>
          </FloatingLabel>
        </Col>
      </Row>

      <Button variant='primary' type='submit'>
        Submit
      </Button>
    </Form>
  );
};
export default ItemUpdateForm;
