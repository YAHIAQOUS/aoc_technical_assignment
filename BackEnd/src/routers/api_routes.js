/** @format */

'use strict';

const express = require('express');

// Import Inerface to Contact DB
const Interface = require('../models/Interface');
// Import Store Model
const { storeModel, orderModel } = require('../models/storeSchema');
// New Instance of Interface
const interfaceStore = new Interface(storeModel);
const interfaceOrder = new Interface(orderModel);

// Access Control List Middleware
const permissions = require('../middlwares/acl');
// Bearer Auth Middlware
const bearerAuth = require('../middlwares/bearerAuth');

// Express Router
const router = express.Router();

// Routes:
// Store Routes
router.get('/stores', bearerAuth, permissions('read'), getAllStoresHandler);
router.post('/store', bearerAuth, permissions('write'), createStoreHandler);
router.put('/store', bearerAuth, permissions('edit'), updateStoreHandler);
router.delete('/store', bearerAuth, permissions('delete'), deleteStoreHandler);

// Item Routes
router.put('/item', bearerAuth, permissions('edit'), updateItemHandler);
router.delete('/item', bearerAuth, permissions('delete'), deleteItemHandler);

// Order Routes
router.get('/orders', bearerAuth, permissions('read'), getAllOrdersHandler);
router.post('/order', bearerAuth, permissions('write'), createOrderHandler);
router.put('/order', bearerAuth, permissions('edit'), updateOrderHandler);
router.delete('/order', bearerAuth, permissions('delete'), deleteOrderHandler);

//
// Store Functions
async function getAllStoresHandler(req, res, next) {
  try {
    let allData = await interfaceStore.get();
    res.status(200).send(allData);
  } catch (error) {
    next(error.message, 'Error Getting Stores Data');
  }
}

async function createStoreHandler(req, res, next) {
  const username = req.user.username;
  const { store_name, image_link, phone_number } = req.body;
  try {
    const newStore = await interfaceStore.create({
      owner_username: username,
      store_name: store_name,
      image_link: image_link,
      phone_number: phone_number,
    });
    res.status(200).send(newStore);
  } catch (error) {
    next(error.message, 'Error Creating Store Data');
  }
}

async function updateStoreHandler(req, res, next) {
  const { store_name, image_link, phone_number } = req.body;
  try {
    const oldStore = await storeModel.findOne({ _id: req.body._id });
    oldStore.store_name = store_name;
    oldStore.image_link = image_link;
    oldStore.phone_number = phone_number;
    oldStore.save();
    res.status(200).send(oldStore);
  } catch (error) {
    next(error.message, 'Error Updating Store Data');
  }
}

async function deleteStoreHandler(req, res, next) {
  try {
    const oldStore = await storeModel.deleteOne({ _id: req.body._id });
    res.status(200).send(oldStore);
  } catch (error) {
    next(error.message, 'Error Deleting Store Data');
  }
}

// Item Functions
async function updateItemHandler(req, res, next) {
  try {
    const oldStore = await storeModel.findOne({ _id: req.body._id });
    if (oldStore?.items?.length) {
      for (let i = 0; i < oldStore.items.length; i++) {
        if (oldStore.items[i]._id == req.body.item._id) {
          oldStore.items[i] = req.body.item;
          oldStore.save();
          res.status(200).send(oldStore);
          return;
        }
      }
    }
    oldStore.items.push(req.body.item);
    oldStore.save();
    res.status(200).send(oldStore);
  } catch (error) {
    next(error.message, 'Error Updating Item Data');
  }
}

async function deleteItemHandler(req, res, next) {
  try {
    const oldStore = await storeModel.findOne({ _id: req.body._id });
    if (oldStore?.items?.length) {
      for (let i = 0; i < oldStore.items.length; i++) {
        if (oldStore.items[i]._id == req.body.item._id) {
          oldStore.items.splice(i, 1);
          oldStore.save();
          res.status(200).send(oldStore);
          return;
        }
      }
    }
  } catch (error) {
    next(error.message, 'Error Deleting Item Data');
  }
}

// Order Functions
async function getAllOrdersHandler(req, res, next) {
  try {
    let role = req.user.role;
    let id_type;
    if (role == 'seller') {
      id_type = 'seller_id';
    } else if (role == 'shopper') {
      id_type = 'shopper_id';
    }
    const userOrders = await orderModel.find({ id_type: req.user._id });
    res.status(200).send(userOrders);
  } catch (error) {
    next(error.message, 'Error Getting Orders Data');
  }
}

async function createOrderHandler(req, res, next) {
  const { username, _id } = req.user;
  const { seller_id, seller_name, store_name, items } = req.body;
  try {
    const newOrder = await interfaceOrder.create({
      seller_id: seller_id,
      seller_name: seller_name,
      shopper_id: _id,
      shopper_name: username,
      store_name: store_name,
      items: items,
    });
    res.status(200).send(newOrder);
  } catch (error) {
    next(error.message, 'Error Creating Order Data');
  }
}

async function updateOrderHandler(req, res, next) {
  const { _id, order_status } = req.body;
  try {
    const oldOrder = await orderModel.findOne({ _id });
    oldOrder.order_status = order_status;
    oldOrder.save();
    res.status(200).send(oldOrder);
  } catch (error) {
    next(error.message, 'Error Updating Order Data');
  }
}

async function deleteOrderHandler(req, res, next) {
  const { _id } = req.body;
  try {
    const oldOrder = await orderModel.deleteOne({ _id });
    res.status(200).send(oldOrder);
  } catch (error) {
    next(error.message, 'Error Deleting Order Data');
  }
}

module.exports = router;
