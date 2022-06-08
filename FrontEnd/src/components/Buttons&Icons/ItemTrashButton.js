/** @format */

import React from 'react';
import { Button } from 'react-bootstrap';
import { Trash } from 'react-bootstrap-icons';

const ItemTrashButton = (props) => {
  // Send Request to Delete Item
  const deleteItem = async (item) => {
    console.log('Delete Item', item);
  };

  return (
    <Button
      variant='light'
      onClick={() => {
        deleteItem('Item');
      }}
      style={{ display: 'inline' }}>
      <Trash color='red'></Trash>
    </Button>
  );
};
export default ItemTrashButton;
