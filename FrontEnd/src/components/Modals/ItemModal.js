/** @format */

import React from 'react';
import { Modal, Row, Col } from 'react-bootstrap';

import ItemImage from '../../images/ItemImage.png';
import ItemCartButton from '../Buttons&Icons/ItemCartButton';
import ItemOrderButton from '../Buttons&Icons/ItemOrderButton';

const ItemModal = (props) => {
  return (
    <>
      <Modal size='lg' show={props.showDetailModal} onHide={props.modalShowing}>
        <Modal.Header closeButton>
          <Modal.Title>Item Name</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Row>
            <Col>
              <img src={ItemImage} alt={ItemImage}></img>
            </Col>
            <Col>
              <p>Item Description 1</p>
              <h3>Item Price 1</h3>
            </Col>

            <ItemCartButton />
            <ItemOrderButton />
          </Row>
        </Modal.Body>
      </Modal>
    </>
  );
};
export default ItemModal;
