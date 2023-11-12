import React from 'react'
import { LeftOutlined } from "@ant-design/icons";
import { Tables } from '../../../components/AdminTable/AdminTable';
import "./index.scss";
export function ApprovedUser() {
  return (
    <div>
        <div className='table'>
            <div className='table-head'>
                <LeftOutlined className="table_teacher_icon" /> USER
            </div>
            <button className="filter">Filter</button>
        </div>

        <Tables />
    </div>
  )
}

