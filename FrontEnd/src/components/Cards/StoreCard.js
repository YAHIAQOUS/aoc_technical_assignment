/** @format */

import React from 'react';
import { useState } from 'react';
import { Card, Row, Col } from 'react-bootstrap';

import store from '../../images/store.png';
import StoreModal from '../Modals/StoreModal';

const StoreCard = () => {
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

        <Col>
          <Card
            // key={}
            style={{ width: '30rem' }}
            className='text-center'>
            <Card.Img
              src={store}
              // onClick={}
            />

            <Card.Body>
              <Card.Title>Store Name</Card.Title>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card
            // key={}
            style={{ width: '30rem' }}
            className='text-center'>
            <Card.Img
              src={store}
              // onClick={}
            />

            <Card.Body>
              <Card.Title>Store Name</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};
export default StoreCard;
