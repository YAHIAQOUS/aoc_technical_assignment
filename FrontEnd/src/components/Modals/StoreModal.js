/** @format */

import React from 'react';
import { Modal, Row, Col } from 'react-bootstrap';

import StoreItems from './StoreItems';

const StoreModal = (props) => {
  return (
    <>
      <Modal
        fullscreen={true}
        show={props.showDetailModal}
        onHide={props.modalShowing}>
        <Modal.Header closeButton>
          <Modal.Title>Store Name</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {/* Store Items Details */}
          <Row>
            <StoreItems />
          </Row>

          {/* Store Details */}
          <Row>
            <Col style={{ position: 'fixed', bottom: '20px', width: '50%' }}>
              <p>Phone Number:</p>
            </Col>
          </Row>
        </Modal.Body>

        {/* Vertical Line */}
        <div
          style={{
            borderLeft: '1px solid grey',
            height: '100%',
            position: 'absolute',
            left: '20%',
          }}></div>
      </Modal>
    </>
  );
};
export default StoreModal;
