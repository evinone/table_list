import React, { useState, useEffect } from "react";
import { Table, Space, Button } from 'antd';
import { getTableData, delTableList } from "../utils/Service";
import { ITableData } from '../typings';
// import { history } from "../utils/history";
import { withRouter } from "react-router";
let data: ITableData[] = [
  {
    user: 'admin',
    state: '冻结',
    name: 'admin',
    time: '2021-1-2',
    key: 1
  },
];

function TableList({history}) 
{
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const columns = [
    {
      title: '用户名称',
      dataIndex: 'user',
      key: 'user'
    },
    {
      title: '用户状态',
      dataIndex: 'state',
      key: 'state'
    },
    {
      title: '创建者',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: '创建时间',
      dataIndex: 'time',
      key: 'time'
    },
    {
      title: '操作',
      dataIndex: 'action',
      key: 'action',
      render: (text, record) => {
        console.log("record_________________________AAA",record)
        return <Space size="middle">
          <span onClick={()=>editList(record.key)}>编辑</span>
          <span onClick={()=>delList(record.key)}>删除</span>
        </Space>
    }
    },
  ];

  const [data2, setData2] = useState(null)
  useEffect(()=>{
    getTableData((data)=>setData2(data));
  },[])

  let hasSelected = selectedRowKeys.length > 0;



  console.log('data2_______', data2)
  const onSelectChange = (selectedRowKey: []) => {
    setSelectedRowKeys(selectedRowKey)
    console.log('change', selectedRowKey, selectedRowKeys);
    hasSelected = selectedRowKeys.length > 0;
  };

  const rowSelection: any = {
    selectedRowKeys,
    onChange: onSelectChange
  };

  const delList = (key) => {
    console.log('record_______________',key)
    const keys = selectedRowKeys;
    keys.map((key) => {
      console.log(key)
      delTableList(key);
    });
    console.log('删除');

  };
  const addList = () => {
    console.log('添加');
    history.push('/add')
    // onGoTo('/add');
  };

  const editList = (record:object) => {
    console.log('编辑');
    history.push('/edit');
  };
console.log("history_______________________",history)  
return (
    <div>
      <Button onClick={addList}>添加</Button>
      <Button type="primary" onClick={delList} disabled={!hasSelected} >删除</Button>
      <Table rowSelection={rowSelection} dataSource={data2} columns={columns} />
    </div>
  )
  

}

export default withRouter(TableList) 