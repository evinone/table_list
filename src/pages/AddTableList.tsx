import React from 'react';
import { Form, Input } from 'antd';

export default function AddTableList() {
return (
    <div>
      <Form>
        <Form.Item label="用户名称" name="userName">
          <Input />
        </Form.Item>
        <Form.Item label="密码" name="password">
          <Input.Password />
        </Form.Item>
      </Form>
    </div>
  )
  

}