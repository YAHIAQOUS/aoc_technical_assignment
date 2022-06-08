/** @format */

import React from 'react';
import { Modal } from 'react-bootstrap';

import StorePostForm from '../Forms/StorePostForm';

const StorePostModal = (props) => {
  return (
    <Modal show={props.PostModalShowing} onHide={props.PostModalShowing}>
      <Modal.Header closeButton>
        <Modal.Title>Create Your Store</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <StorePostForm PostModalShowing={props.PostModalShowing} />
      </Modal.Body>
    </Modal>
  );
};
export default StorePostModal;
