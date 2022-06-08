/** @format */

import React from 'react';
import { useState } from 'react';
import { Card, Row, Col } from 'react-bootstrap';

import store from '../../images/store.png';
import YourStoreModal from '../Modals/YourStoreModal';

const YourStoreCard = () => {
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const modalShowing = () => {
    setShowUpdateModal(!showUpdateModal);
  };

  return (
    <>
      {/* Store Modal */}
      {showUpdateModal && (
        <YourStoreModal
          showUpdateModal={showUpdateModal}
          modalShowing={modalShowing}
        />
      )}

      <Row lg={3}>
        <Col>
          <Card
            // key={}
            style={{ width: '30rem' }}
            className='text-center'>
            <Card.Img src={store} onClick={modalShowing} />

            <Card.Body>
              <Card.Title>Store Name</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};
export default YourStoreCard;
