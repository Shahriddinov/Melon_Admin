import React from "react";
import AdminLayout from "../AdminLayout";
import Tables from "../Table";
import {LeftOutlined } from "@ant-design/icons"
import { Link } from "react-router-dom";

function AdminTeacher(props) {
  return (
    <AdminLayout>
      <div className="adminTeacher">
        <div className="table">
          <div className="table_teacher"><LeftOutlined className='table_teacher_icon' />Ustozlar</div>
          <Link to="/admin/Teacher/add">
          <button className="table_added">Qo'shish</button>

          </Link>
        </div>
        <Tables />
      </div>
    </AdminLayout>
  );
}

export default AdminTeacher;
