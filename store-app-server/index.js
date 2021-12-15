const express = require('express');
const cors = require('cors');

const sequelize = require('./database');
const Product = require('./models/Product');
const User = require('./models/User');
const Order = require('./models/Order');
const OrderItem = require('./models/OrderItem');

Order.belongsTo(User);
User.hasMany(Order);
Order.belongsToMany(Product, { through: OrderItem });

sequelize.sync().then(() => { // {force: true}
  (async () => {
    const adminUser = await User.findOne({
      where: {
        username: 'admin',
      },
    });
    
    if(!adminUser) {
      await User.create({
        name: 'Admin',
        email: 'admin@admin.com',
        username: 'admin',
        password: 'pwd',
        admin: 1,
      });
    }
  })();
});

const app = express();

app.use(cors());

app.use(express.json());

// Login
app.post('/login', async (req, res) => {
  const login = req.body;
  const user = await User.findOne({
    where: {
      username: login.username,
      password: login.password,
    },
  });

  if(user) {
    user.token = Math.random().toString(16).substr(2);
    await user.save();

    res.send(user.dataValues);
    return;
  }

  res.statusCode = 401;
  res.send();
});

app.post('/token', async (req, res) => {
  const user = await User.findOne({
    where: {
      token: req.body.token,
    },
  });

  if(user) {
    res.send(user.dataValues);
  }

  res.statusCode = 404;
  res.send();
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

// Product
app.get('/product', async (req, res) => {
  const products = await Product.findAll();
  res.send(products);
});

app.post('/product', async (req, res) => {
  const result = await Product.create(req.body);
  res.send(result.dataValues);
});

// Order

app.get('/order', async (req, res) => {
  const orders = await Order.findAll({
    include: Product,
  });
  res.send(orders);
});

app.post('/order', async (req, res) => {
  const todayObj = new Date();
  const today = `${todayObj.getFullYear()}-${todayObj.getMonth() + 1}-${todayObj.getDate()}`;
  
  const user = await User.findByPk(req.body.userId);
  const order = await user.createOrder({
    total: req.body.total,
    date: today,
  });

  for(const item of req.body.items) {
    const product = await Product.findByPk(item.id);
    await order.addProduct(product, {
      through: {
        qty: item.orderItem.qty,
        price: item.orderItem.price,
      },
    });
  }

  const result = await Order.findByPk(order.id, {
    include: Product,
  });

  res.send(result);
});

app.listen(3001, () => {
  console.log('app is running');
});
