/** @format */

import React from 'react';

import CreateStoreButton from '../components/Buttons&Icons/CreateStoreButton';
import YourStoreCard from '../components/Cards/YourStoreCard';

const YourStore = () => {
  return (
    <>
      <h2>Create and Update Your Online Store</h2>

      <CreateStoreButton />
      <YourStoreCard />
    </>
  );
};
export default YourStore;
