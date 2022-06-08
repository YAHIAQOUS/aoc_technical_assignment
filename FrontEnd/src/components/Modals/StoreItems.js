/** @format */

import React from 'react';

import { Modal, Col, Row, Tab, Nav } from 'react-bootstrap';

import StoreImage from '../../images/StoreImage.png';
import ItemCartButton from '../Buttons&Icons/ItemCartButton';

const Storeitems = () => {
  return (
    <Tab.Container defaultActiveKey={1}>
      {/* Navigation Tabs */}
      <Col sm={3}>
        <Nav variant='tabs' className='flex-column'>
          <Nav.Item key={1}>
            <Nav.Link eventKey={1}>Item Name 1</Nav.Link>
          </Nav.Item>
        </Nav>
      </Col>

      {/* Items Details */}
      <Col>
        <Tab.Content>
          <Tab.Pane key={1} eventKey={1}>
            <Modal.Title>Item Name 1</Modal.Title>
            <Row>
              <Col>
                <img src={StoreImage} alt={StoreImage}></img>
              </Col>
              <Col>
                <p>Item Description 1</p>
                <h3>Item Price 1</h3>
              </Col>
              <ItemCartButton />
            </Row>
          </Tab.Pane>
        </Tab.Content>
      </Col>
    </Tab.Container>
  );
};
export default Storeitems;
