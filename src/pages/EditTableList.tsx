import React from 'react';
import { Form, Input, Select, Button } from 'antd';
import { history } from '../utils/history';

const { Option } = Select;

const formStyle = {
   width: '30%',
};

const handleSelect = (value: string) => {
  console.log('输出', value)
};
const handleSubmit = (form: any) => {
  console.log(form)
};
const toHome = () => {
  history.push('/')
}

export default function AddTableList() {
  return (
    <div>
      <h1>编辑用户信息</h1>
      <span onClick={toHome}>--返回</span>
      <Form style={formStyle} onFinish={handleSubmit}>
        <Form.Item 
         label="用户名称"
         name="userName"
        >
          <span>111</span>
        </Form.Item>
        <Form.Item
         label="用户状态"
         name="state"
         initialValue="正常"
         >
          <Select onChange={handleSelect} style={{width: '200px'}}>
            <Option value="正常">正常</Option>
            <Option value="冻结">冻结</Option>
          </Select>
        </Form.Item>
        <Form.Item
         label="邮箱"
         name="email"
         rules={[
          {
            required: true,
            message: '请填写邮箱,格式为XXX@XXX.com'
          },
        ]}
         >
          <Input />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">提交</Button>
        </Form.Item>
      </Form>
    </div>
  )
  

}