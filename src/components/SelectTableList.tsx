import React from "react";
import { DatePicker, Input, Select } from "antd";

const { Search } = Input;
const { RangePicker } = DatePicker;
const { Option } = Select;

const onSearch = (value: any) => {
  console.log('shousuo', value)
};
const chandleDate = (value: any) => {
  console.log(value)
}
const handleSelect = (value: string) => {
  console.log(value)
}
export default function SelectTableList() {
return (
    <div>
      <Search onSearch={onSearch} style={{width: '200px'}} placeholder="请输入用户名"></Search>
      <span>创建时间</span>
      <RangePicker onChange={chandleDate} />
      <span>状态</span>
      <Select defaultValue="全部" style={{width: '100px'}} onChange={handleSelect}>
        <Option value="全部">全部</Option>
        <Option value="冻结">冻结</Option>
        <Option value="正常">正常</Option>
      </Select>
    </div>
  )
  

}