/** @format */

import React from 'react';
import { Modal, Row, Col } from 'react-bootstrap';

import StoreUpdateItems from './StoreUpdateItems';
import StoreUpdateForm from '../Forms/StoreUpdateForm';

const StoreUpdateModal = (props) => {
  return (
    <>
      <Modal
        fullscreen={true}
        show={props.showUpdateModal}
        onHide={props.modalShowing}>
        <Modal.Header closeButton>
          <Modal.Title>Store Name</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {/* Update Items Form */}
          <Row>
            <StoreUpdateItems modalShowing={props.modalShowing} />
          </Row>

          {/* Update Store Form */}
          <Row>
            <Col style={{ position: 'fixed', bottom: '20px', width: '20%' }}>
              <StoreUpdateForm modalShowing={props.modalShowing} />
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
export default StoreUpdateModal;
