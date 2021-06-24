import React, { useState } from "react";
import { Table, Space, Button } from 'antd';

export default function TableList() {
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
      render: () => (
        <Space size="middle">
          <span onClick={editList}>编辑</span>
          <span onClick={delList}>删除</span>
        </Space>
        // 怎么用record不报错
      // render: (record) => (
      //   <Space size="middle">
      //     <span onClick={editList(record)}>编辑</span>
      //     <span onClick={addList(record)}>删除</span>
      //   </Space>
      )
    },
  ];
  const data = [
    {
      user: 'admin',
      state: '冻结',
      name: 'admin',
      time: '2021-1-2',
      key: '1'
    },
    {
      user: 'admin',
      state: '冻结',
      name: 'admin',
      time: '2021-1-2',
      key: '2'
    },
    {
      user: 'admin',
      state: '冻结',
      name: 'admin',
      time: '2021-1-2',
      key: '3'
    },
    {
      user: 'admin',
      state: '冻结',
      name: 'admin',
      time: '2021-1-2',
      key: '4'
    },

  ];
  // let selectedRowKeys: number[] = [];
  let hasSelected = selectedRowKeys.length > 0;


  const onSelectChange = (selectedRowKey: []) => {
    setSelectedRowKeys(selectedRowKey)
    console.log('change', selectedRowKey, selectedRowKeys);
    hasSelected = selectedRowKeys.length > 0;
  };

  const rowSelection:any = {
    selectedRowKeys,
    onChange: onSelectChange
  };

  const delList = () => {
    const keys = selectedRowKeys
    keys.map((key) => {
      console.log(key)
    })
    console.log('删除');

  };
  const addList = () => {
    console.log('添加')
  };

  const editList = () => {
    console.log('编辑')
  };
return (
    <div>
      <Button onClick={addList}>添加</Button>
      <Button type="primary" onClick={delList} disabled={!hasSelected} >删除</Button>
      <Table rowSelection={rowSelection} dataSource={data} columns={columns} />
    </div>
  )
  

}