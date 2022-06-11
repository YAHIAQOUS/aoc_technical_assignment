/** @format */

import React from 'react';
import { useState } from 'react';
import { Card, Row, Col } from 'react-bootstrap';

import StoreImage from '../../images/StoreImage.png';
import StoreModal from '../Modals/StoreModal';

const StoreCard = (props) => {
  const [showDetailModal, setShowDetailModal] = useState(false);
  const modalShowing = () => {
    setShowDetailModal(!showDetailModal);
  };

  return (
    <>
      {/* Store Modal */}
      {showDetailModal && (
        <StoreModal
          showDetailModal={showDetailModal}
          modalShowing={modalShowing}
          store={props.store}
        />
      )}

      <Card
        key={props.store._id}
        style={{ width: '30rem' }}
        className='text-center'>
        <Card.Img src={props.store.image_link} onClick={modalShowing} />

        <Card.Body>
          <Card.Title>{props.store.store_name}</Card.Title>
        </Card.Body>
      </Card>
    </>
  );
};
export default StoreCard;
