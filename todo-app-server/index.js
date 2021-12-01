const express = require('express');
const cors = require('cors');

const sequelize = require('./database');
const Task = require('./Task');

sequelize.sync({force: true}).then(() => console.log('db created'));

const app = express();

app.use(cors());

app.use(express.json());

// Task

app.get('/task', async (req, res) => {
  const tasks = await Task.findAll();
  res.send(tasks);
});

app.get('/task/:id', async (req, res) => {
  const id = req.params.id;
  const task = await Task.findOne({where: {id: id}});
  if(!task) {
    res.statusCode = 404;
    res.send({
      msg: 'Task not found'
    });
  } else {
    res.send(task);
  }
});

app.post('/task', async (req, res) => {
  const result = await Task.create(req.body);
  res.send(result.dataValues);
});

app.delete('/task/:id', async (req, res) => {
  const id = req.params.id;
  await Task.destroy({where: {id: id}});
  res.send('Task successfully deleted');
});

app.put('/task/:id', async (req, res) => {
  const id = req.params.id;
  const task = await Task.findOne({where: {id: id}});
  task.title = req.body.title;
  task.date = req.body.date;
  task.description = req.body.description;
  task.done = req.body.done;
  await task.save();
  res.send({
    msg: 'Task successfully updated'
  });
});

app.listen(3001, () => {
  console.log('app is running');
});
