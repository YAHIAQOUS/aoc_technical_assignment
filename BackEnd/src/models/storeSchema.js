/** @format */

'use strict';

const mongoose = require('mongoose');
const { Schema } = mongoose;

// Schema
const itemSchema = new Schema({
  item_name: { type: String, required: true },
  image_link: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
});

const storeSchema = new Schema({
  owner_username: { type: String, required: true },
  owner_id: { type: Number, required: true },
  store_name: { type: String, required: true },
  image_link: { type: String, required: true },
  phone_number: { type: Number, required: true },
  items: [itemSchema],
});

const orderSchema = new Schema({
  seller_id: { type: String, required: true },
  seller_name: { type: String, required: true },
  shopper_id: { type: String, required: true },
  shopper_name: { type: String, required: true },
  store_name: { type: String, required: true },
  items: [itemSchema],
  order_status: { type: String, required: true, default: 'Pending' },
  date: { type: Date, required: true, default: Date.now },
});

// Model
const storeModel = mongoose.model('stores', storeSchema);
const orderModel = mongoose.model('orders', orderSchema);

module.exports = { storeModel, orderModel };
