import { Form, Input } from 'antd'
import React from 'react'

export const CenterProfile = () => {
  return (
    <div style={{padding: '25px 60px'}}>
    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '62px' }}>
      <h2>O'quv markazi</h2>
      <button className='bg-[#000]'>O'zgartirish</button>
    </div>
    <Form name="wrap"
      labelCol={{
        flex: '110px',
      }}
      labelAlign="left"
      labelWrap
      wrapperCol={{
        flex: 1,
      }}
      colon={false}
      style={{display: 'flex', justifyContent: 'space-between'}}>

      <div style={{width: '289px'}}>
        <Form.Item label="Telefon raqam" name="phone">
          <Input />
        </Form.Item>
        <Form.Item label="Ism familiyasi" name="username">
          <Input />
        </Form.Item>
        <Form.Item label="Elektron pochta" name="email">
          <Input />
        </Form.Item>
        <Form.Item label="O’quv markazi yoki domla ismi" name="name">
          <Input />
        </Form.Item>
      </div>
      <div>
        <Form.Item name={['user', 'introduction']} label="Sharoyit">
          <Input.TextArea  style={{minWidth: '626px', minHeight: '278px'}} placeholder="Sharoyite juda yaxshi"/>
        </Form.Item>
      </div>
    </Form>
  </div>
  )
}
