import React from 'react'
import { useParams } from 'react-router-dom'
import { LeftOutlined } from "@ant-design/icons";
import FormControl from "../../../../Inputs/Inputs";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import { useState } from 'react';
import { request } from '../../../../../services/api/request';
import "./changeusrInfo.scss";

export function UserUpdate() {
  const { id } = useParams();

  const items = [
    {
      label: '1st menu item',
      key: "0",
    },
    {
      label: '2nd menu item',
      key: "1",
    },
    {
      label: "3rd menu item",
      key: "2",
    },
  ];
  const [phone, setPhone] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [info, setInfo] = useState('');
  const [username, setUsername] = useState('');

  const editInfo = async (e) => {
    e.preventDefault();
    if (firstname !== "" && lastname !== '' && email !== '' && phone !== '' && info !== '') {
      try {
        const res = await request.put(`/user/profile/${id}`, {
          firstname,
          lastname,
          email,
          phone,
          info,
          username
        })
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    }
  }
  return (
    <form onSubmit={editInfo}>
      <div className="add">
        <div className="add_user">
          <LeftOutlined className="add_user_icon" />
          USER {id}
        </div>
        <div>
          <button type='reset' className="add_cansel">Bekor qilish</button>
          <button type='submit' className="add_added">Tastiqlangan</button>
        </div>
      </div>
      <div className="ChangeUserForma">
        <div className="ChangeUserForma_form">
          <div className="ChangeUserForma_form_inputs">
            <FormControl
              type="tel"
              placeholder={"Telefon raqam"}
              id={"PhoneNumber"}
              label={"Telefon Raqam"}
              onChange={(e) => setPhone(e.target.value)}
            ></FormControl>
            <FormControl
              placeholder={"Ism"}
              id={"firstname"}
              label={"Ism"}
              onChange={(e) => setFirstname(e.target.value)}
            ></FormControl>
            <FormControl
              placeholder={"Familiya"}
              id={"lastName"}
              label={"Familiya"}
              onChange={(e) => setLastname(e.target.value)}
            ></FormControl>
            <FormControl
              placeholder={"Elektron pochta"}
              id={"email"}
              label={"Elektron Pochta"}
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            ></FormControl>
            <FormControl
              placeholder={"User Name"}
              id={"username"}
              label={"User Name"}
              onChange={(e) => setUsername(e.target.value)}
            ></FormControl>
          </div>
          <div className="ChangeUserForma_form_inputs">
            <label htmlFor="text">Qisqacha ma'lumot</label>
            <textarea className="ChangeUserForma_area" placeholder="text" onChange={(e) => setInfo(e.target.value)} />
            <div className="ChangeUserForma_form_inputs_dropdown">
              <div className="ChangeUserForma_form_inputs_dropdown_labels">O’quv markazi yoki domla ismi</div>
              <Dropdown
                menu={{
                  items,
                }}
                trigger={["click"]}
              >
              <Space className="ChangeUserForma_form_inputs_dropdown_click">
                Mualim o’quv markazi
                <DownOutlined style={{ color: "#A8A8BD" }} />
              </Space>
              </Dropdown>
            </div>
          </div>
        </div>
      </div>
    </form>
  )
}
