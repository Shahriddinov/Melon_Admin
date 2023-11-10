import React from 'react'
import "./addLearnCenter.scss"
import AdminLayout from '../../AdminLayout'
import { Link } from 'react-router-dom'
import { LeftOutlined } from '@ant-design/icons'
import FormaLearnCenter from './FormaLearnCenter/FormaLearnCenter'
export default function AddLearnCenter() {
  return (
    <AdminLayout>
        <div className="add">
        <div className="add_LearnCenter">
          <LeftOutlined className="add_LearnCenter_icon" />
          O’quv markazi
        </div>
        <div>
          <button className="add_cansel">Bekor qilish</button>

          <Link to="/">
            <button className="add_added">Tastiqlangan</button>
          </Link>
        </div>
      </div>
      <FormaLearnCenter/>
    </AdminLayout>
  )
}
