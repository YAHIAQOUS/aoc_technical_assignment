/** @format */

import React from 'react';
import { Button } from 'react-bootstrap';
import { Trash } from 'react-bootstrap-icons';

const StoreTrashButton = (props) => {
  // Send Request to Delete Store
  const deleteStore = async (store) => {
    console.log('Delete Store', store);
  };

  return (
    <Button
      variant='light'
      onClick={() => {
        deleteStore('store');
      }}
      style={{ display: 'inline' }}>
      <Trash color='red'></Trash>
    </Button>
  );
};
export default StoreTrashButton;
