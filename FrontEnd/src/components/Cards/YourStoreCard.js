/** @format */

import React from 'react';
import { useState } from 'react';
import { Card, Row, Col } from 'react-bootstrap';

import StoreImage from '../../images/StoreImage.png';
import StoreUpdateModal from '../Modals/StoreUpdateModal';
import StoreTrashButton from '../Buttons&Icons/StoreTrashButton';

const YourStoreCard = () => {
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const modalShowing = () => {
    setShowUpdateModal(!showUpdateModal);
  };

  return (
    <>
      {/* Store Modal */}
      {showUpdateModal && (
        <StoreUpdateModal
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
            <Card.Img src={StoreImage} onClick={modalShowing} />

            <Card.Body>
              <Card.Title>
                Store Name
                <StoreTrashButton />
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};
export default YourStoreCard;
