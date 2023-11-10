import React from "react";
import "./changeUserforma.scss";
import FormControl from "../../../FormInput";
import ImgIcon from "../../../../../../assets/images/Icon pack.svg";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
const items = [
  {
    label: <a href="https://www.antgroup.com">1st menu item</a>,
    key: "0",
  },
  {
    label: <a href="https://www.aliyun.com">2nd menu item</a>,
    key: "1",
  },
  {
    type: "divider",
  },
  {
    label: "3rd menu item",
    key: "3",
  },
];
export default function ChangeUserForma() {
  return (
    <div className="ChangeUserForma">
      <div className="ChangeUserForma_form">
        <div className="ChangeUserForma_form_inputs">
          <FormControl
            type="number"
            placeholder={"Telefon raqam"}
            id={"PhoneNumber"}
            label={"Telefon Raqam"}
          ></FormControl>
          <FormControl
            placeholder={"Ism"}
            id={"firstname"}
            label={"Ism"}
          ></FormControl>
          <FormControl
            placeholder={"Familiya"}
            id={"lastName"}
            label={"Familiya"}
          ></FormControl>
          <FormControl
            placeholder={"Elektron pochta"}
            id={"email"}
            label={"Elektron Pochta"}
            type="email"
          ></FormControl>
          <div className="ChangeUserForma_form_inputs_dropdown">
            <div className="ChangeUserForma_form_inputs_dropdown_labels">O’quv markazi yoki domla ismi</div>
            <Dropdown
              menu={{
                items,
              }}
              trigger={["click"]}
            >
              <a onClick={(e) => e.preventDefault()}>
                <Space className="ChangeUserForma_form_inputs_dropdown_click">
                Mualim o’quv markazi 
                  <DownOutlined style={{color:"#A8A8BD"}} />
                </Space>
              </a>
            </Dropdown>
          </div>
        </div>
        <div className="ChangeUserForma_form_inputs">
          <label htmlFor="text">Qisqacha ma'lumot</label>
          <textarea className="ChangeUserForma_area" placeholder="text" />
          <FormControl
            placeholder={"User Name"}
            id={"username"}
            label={"User Name"}
          ></FormControl>

          <FormControl
            type="password"
            placeholder={"Password"}
            id={"Password"}
            label={"Password"}
          ></FormControl>
        </div>
      </div>
    </div>
  );
}
