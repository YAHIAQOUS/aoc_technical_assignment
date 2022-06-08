/** @format */

import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

import StoreCard from '../components/Cards/StoreCard';

const Stores = () => {
  // Search Filter
  const [filteredList, setfilteredList] = useState([]);
  const [search, setSearch] = useState();
  const updateSearch = (e) => {
    console.log('updateSearch', e.target.value);
    setSearch(e.target.value);
    setfilteredList([]);
    // storesList.map((store) => {
    //   if (
    //     store.name.toLowerCase().includes(search.toLowerCase())
    //   ) {
    //     setfilteredList((prev) => [...prev, store]);
    //   }
    // });
  };

  return (
    <>
      <div className='col-md-2'>
        <Form.Control
          type='textField'
          placeholder={`Search in Stores`}
          onChange={updateSearch}
          style={{ borderRadius: '25px' }}
        />
      </div>

      <h2>Discover Stores</h2>

      <StoreCard />
    </>
  );
};
export default Stores;
