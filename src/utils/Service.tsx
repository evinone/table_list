// import React from 'react';
import axios from 'axios';
import { ITableData } from '../typings';

export function  getTableData (callback:Function) {
  let data : ITableData[] = []
  let res = axios.get('http://localhost:8080/tabledata').then((res) => {
    if(res) {
      // if (res.message = )
      console.log('server___',res.data);
      data = res.data
      callback(data)
      //return data;
    } else {
     // return data;

    }
  })
  console.log(res)
  return res
}

export function  delTableList (key) {
  let data : ITableData[] = []
  let res = axios.post('http://localhost:8080/remove', JSON.stringify({key})).then((res) => {
    if(res) {
      console.log('server___',res.data);
      data = res.data
      return data;
    } else {
      return data;

    }
  })
}