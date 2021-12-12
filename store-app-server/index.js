const express = require('express');
const cors = require('cors');

const sequelize = require('./database');
const Product = require('./models/Product');
const User = require('./models/User');
const Order = require('./models/Order');

sequelize.sync().then(() => console.log('db created')); // {force: true}

const app = express();

app.use(cors());

app.use(express.json());

// Product
app.get('/product', async (req, res) => {
  const products = await Product.findAll();
  res.send(products);
});

app.post('/product', async (req, res) => {
  const result = await Product.create(req.body);
  res.send(result.dataValues);
});

// User
app.get('/user', async (req, res) => {
  const users = await User.findAll();
  res.send(users);
});

app.post('/user', async (req, res) => {
  const result = await User.create(req.body);
  res.send(result.dataValues);
});

// Order

app.listen(3001, () => {
  console.log('app is running');
});
