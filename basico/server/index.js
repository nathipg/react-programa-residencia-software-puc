const express = require('express');
const sequelize = require('./database');
const cors = require('cors');
const Aluno = require('./Aluno');

sequelize.sync({force: true}).then(() => console.log('db criado'));

const app = express();

app.use(cors());

app.use(express.json());

// Aluno

app.get('/alunos', async (req, res) => {
  const alunos = await Aluno.findAll();
  res.send(alunos);
});

app.get('/alunos/:id', async (req, res) => {
  const id = req.params.id;
  const aluno = await Aluno.findOne({where: {id: id}});
  res.send(aluno);
});

app.post('/alunos', async (req, res) => {
  await Aluno.create(req.body);
  res.send({
    msg: 'Aluno criado com sucesso'
  });
});

app.delete('/alunos/:id', async (req, res) => {
  const id = req.params.id;
  await Aluno.destroy({where: {id: id}});
  res.send('Aluno deletado com sucesso');
});

app.put('/alunos/:id', async (req, res) => {
  const id = req.params.id;
  const aluno = await Aluno.findOne({where: {id: id}});
  aluno.nome = req.body.nome;
  aluno.idade = req.body.idade;
  aluno.telefone = req.body.telefone;
  await aluno.save();
  res.send('Aluno atualizado com sucesso');
});


app.listen(3001, () => {
  console.log('app is running');
});
