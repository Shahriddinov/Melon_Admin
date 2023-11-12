import React from 'react'
import "./changeusrInfo.scss"
import AdminLayout from '../../AdminLayout'
import { Link } from 'react-router-dom'
import { LeftOutlined } from "@ant-design/icons";
import ChangeUserForma from './ChangeUserForma/ChangeUserForma';
export default function ChangeUserInfo() {
  return (
    <>
        <div className="add">
        <div className="add_user">
          <LeftOutlined className="add_user_icon" />
          Foydalanuvchi
        </div>
        <div>
          <button className="add_cansel">Bekor qilish</button>

          <Link to="/admin/alluser">
            <button className="add_added">Tastiqlangan</button>
          </Link>
        </div>
      </div>
      <ChangeUserForma/>
    </>
  )
}
