import express, { Application } from 'express';
import bodyParse from 'body-parser';
import { readFile, writeFile } from './utils';
import { ITableData } from './typings';

const app: Application = express();

app.use(bodyParse.urlencoded({ extended: true }));
app.use(bodyParse.json());

app.all('*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'POST,GET,PUT,DELELTE,OPTIONS');
  next();
});

app.get('/tabledata', function (req, res) {
  const tabledata: string = readFile('table.json');
  res.send(tabledata);
});


app.post('/remove', function(req, res) {
  console.log(req)
  let tabledata: ITableData[] = JSON.parse(readFile('table.json') || '[]');
  let body = req.body
  let firstParam =""
  for (const key in body) {
    firstParam = key
    break
  }
  firstParam = JSON.parse(firstParam)
  const key = firstParam['key']
  console.log("firstKey_______",key)
  tabledata = tabledata.filter((list: ITableData) => list.key !== key);

  writeFile('table.json', tabledata);
  res.send({
    msg: 'ok',
    statusCode: '200'
  })

});

app.post('/add', function (req, res) {

});

app.post('/edit', function (req, res) {

});

app.listen(8080, function() {
  console.log('welcome to express');
  console.log('8080')
})


