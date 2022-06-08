/** @format */

import React from 'react';
import { Tab, Col, Nav } from 'react-bootstrap';

import ItemUpdateForm from '../Forms/ItemUpdateForm';
import ItemTrashButton from '../Buttons&Icons/ItemTrashButton';
import ItemPlusButton from '../Buttons&Icons/ItemPlusButton';

const StoreUpdateItems = (props) => {
  return (
    <Tab.Container defaultActiveKey={1}>
      {/* Navigation Tabs */}
      <Col sm={3}>
        <Nav variant='tabs' className='flex-column'>
          <Nav.Item key={1}>
            <Nav.Link eventKey={1} style={{ display: 'inline' }}>
              Item Name 1
            </Nav.Link>
            <ItemTrashButton />
          </Nav.Item>
        </Nav>

        <ItemPlusButton />
      </Col>

      {/* Items Details */}
      <Col>
        <Tab.Content>
          <Tab.Pane key={1} eventKey={1}>
            <ItemUpdateForm modalShowing={props.modalShowing} />
          </Tab.Pane>
        </Tab.Content>
      </Col>
    </Tab.Container>
  );
};
export default StoreUpdateItems;
