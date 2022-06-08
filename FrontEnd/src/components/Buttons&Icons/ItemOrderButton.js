/** @format */

import React from 'react';
import { Button } from 'react-bootstrap';
import { BoxArrowInDown } from 'react-bootstrap-icons';

const ItemOrderButton = (props) => {
  // Send Request to Add Item to Order
  const orderItem = async (item) => {
    console.log('Add Item to Order', item);
  };

  return (
    <Button variant='light' onClick={orderItem('item')}>
      <BoxArrowInDown color='black'></BoxArrowInDown>
    </Button>
  );
};
export default ItemOrderButton;
