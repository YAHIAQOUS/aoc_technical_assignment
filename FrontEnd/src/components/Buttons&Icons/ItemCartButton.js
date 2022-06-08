/** @format */

import React from 'react';
import { Button } from 'react-bootstrap';
import { CartPlus, CartDashFill } from 'react-bootstrap-icons';

const ItemCartButton = (props) => {
  // Send Request to Add Item to Cart List
  const addItemCart = async (item) => {
    console.log('Add Item to Cart List', item);
  };

  // Send Request to Delete Item from Cart List
  const deleteItemCart = async (item) => {
    console.log('Delete Item from Cart List', item);
  };

  return (
    <>
      <Button
        variant='light'
        onClick={() => {
          addItemCart('Item');
        }}
        style={{ display: 'inline' }}>
        <CartPlus color='black'></CartPlus>
      </Button>

      <Button
        variant='light'
        onClick={() => {
          deleteItemCart('Item');
        }}
        style={{ display: 'inline' }}>
        <CartDashFill color='red'></CartDashFill>
      </Button>
    </>
  );
};
export default ItemCartButton;
