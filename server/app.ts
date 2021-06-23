import express, { Application } from 'express';
import bodyParse from 'body-parser';
import { readFile, writeFile } from './utils';
import { ITodoData } from './typings';

const app: Application = express();

app.use(bodyParse.urlencoded({ extended: true }));
app.use(bodyParse.json());

app.all('*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'POST,GET,PUT,DELELTE,OPTIONS');
  next();
});

app.get('/todolist', function (req, res) {
  const todoList: string = readFile('todo.json');
  res.send(todoList);
});

app.post('/toggle', function (req, res) {


});

app.post('/remove', function(req, res) {
  console.log(req)
  const id: number = parseInt(req.body.id);

  let todoList: ITodoData[] = JSON.parse(readFile('todo.json') || '[]');

  todoList = todoList.filter((todo: ITodoData) => todo.id !== id);

  writeFile('todo.json', todoList);

  res.send({
    msg: 'ok',
    statusCode: '200'
  })

});

app.post('/add', function (req, res) {

});

app.listen(8080, function() {
  console.log('welcome to express');
  console.log('8080')
})


