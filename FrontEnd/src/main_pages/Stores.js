/** @format */

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import cookie from 'react-cookies';
import { Form, Row, Col } from 'react-bootstrap';

import { axiosInstance, apiUrl } from '../Axios';
import StoreCard from '../components/Cards/StoreCard';

const Stores = () => {
  const [storesList, setStoresList] = useState([]);

  // Send Request to GET Stores Data
  async function getStoresList() {
    const token = cookie.load('token');
    const response = await axios.get(`${apiUrl}/stores`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    console.log('response.data', response.data);
    setStoresList(response.data);
    setfilteredList(response.data);
  }
  useEffect(() => {
    getStoresList();
  }, []);
  //

  // Search Filter
  const [filteredList, setfilteredList] = useState([]);
  const [search, setSearch] = useState();
  const updateSearch = (e) => {
    console.log('updateSearch', e.target.value);
    setSearch(e.target.value);
    setfilteredList([]);
    storesList.map((store) => {
      if (store.store_name.toLowerCase().includes(search.toLowerCase())) {
        setfilteredList((prev) => [...prev, store]);
      }
    });
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

      <Row lg={2}>
        {filteredList &&
          filteredList.map((store) => (
            <Col key={store._id}>
              <StoreCard store={store} />
            </Col>
          ))}
      </Row>
    </>
  );
};
export default Stores;
