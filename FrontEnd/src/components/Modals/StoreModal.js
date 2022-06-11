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
          <Modal.Title>{props.store.store_name}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {/* Store Items Details */}
          <Row>
            {props.store.items[0] && <StoreItems items={props.store.items} />}
          </Row>

          {/* Store Details */}
          <Row>
            <Col style={{ position: 'fixed', bottom: '20px', width: '50%' }}>
              <p>Phone Number: {props.store.phone_number}</p>
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
