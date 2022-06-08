/** @format */

import React from 'react';
import { useState } from 'react';
import { Card, Row, Col } from 'react-bootstrap';

import ItemImage from '../../images/ItemImage.png';
import ItemModal from '../Modals/ItemModal';
import ItemCartButton from '../Buttons&Icons/ItemCartButton';
import ItemOrderButton from '../Buttons&Icons/ItemOrderButton';

const CartCard = () => {
  const [showDetailModal, setShowDetailModal] = useState(false);
  const modalShowing = () => {
    setShowDetailModal(!showDetailModal);
  };

  return (
    <>
      {/* Store Modal */}
      {showDetailModal && (
        <ItemModal
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
            <Card.Img src={ItemImage} onClick={modalShowing} />

            <Card.Body>
              <Card.Title>
                Item Name
                <ItemCartButton />
                <ItemOrderButton />
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};
export default CartCard;
