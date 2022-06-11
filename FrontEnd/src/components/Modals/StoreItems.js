/** @format */

import React from 'react';

import { Modal, Col, Row, Tab, Nav } from 'react-bootstrap';

import StoreImage from '../../images/StoreImage.png';
import ItemCartButton from '../Buttons&Icons/ItemCartButton';

const Storeitems = (props) => {
  return (
    <Tab.Container defaultActiveKey={props.items[0]._id}>
      {/* Navigation Tabs */}
      <Col sm={3}>
        <Nav variant='tabs' className='flex-column'>
          {props.items.map((item) => (
            <Nav.Item key={item._id}>
              <Nav.Link eventKey={item._id}>{item.item_name}</Nav.Link>
            </Nav.Item>
          ))}
        </Nav>
      </Col>

      {/* Items Details */}
      <Col>
        <Tab.Content>
          {props.items.map((item) => (
            <Tab.Pane key={item._id} eventKey={item._id}>
              <Modal.Title>{item.item_name}</Modal.Title>
              <Row>
                <Col>
                  <img src={item.image_link} alt={item.image_link}></img>
                </Col>
                <Col>
                  <p>{item.description}</p>
                  <h3>{item.price}</h3>
                </Col>
                <ItemCartButton />
              </Row>
            </Tab.Pane>
          ))}
        </Tab.Content>
      </Col>
    </Tab.Container>
  );
};
export default Storeitems;
