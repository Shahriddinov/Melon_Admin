import React from "react";
import "./allUser.scss";
import AdminLayout from "../AdminLayout";
import { Link } from "react-router-dom";
import { LeftOutlined } from "@ant-design/icons";
import Tables from "../Table";

export default function AddUser() {
  return (
    <AdminLayout>
      <div className="adminTeacher">
        <div className="table">
          <div className="table_teacher">
            <LeftOutlined className="table_teacher_icon" />
            Foydalanuvchilar
          </div>
          <Link to="/admin/alluser/infoUser">
            <button className="filter">Filter</button>
          </Link>
        </div>
        <Tables />
      </div>
    </AdminLayout>
  );
}
