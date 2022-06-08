/** @format */

import React from 'react';
import { Button } from 'react-bootstrap';
import { PlusCircle } from 'react-bootstrap-icons';

const ItemPlusButton = (props) => {
  // Send Request to Post Item
  const postItem = async () => {
    console.log('Post New Item');
  };

  return (
    <Button variant='light' onClick={postItem}>
      <PlusCircle color='red'></PlusCircle>
    </Button>
  );
};
export default ItemPlusButton;
