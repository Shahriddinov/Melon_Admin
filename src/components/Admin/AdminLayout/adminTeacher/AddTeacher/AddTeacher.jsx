import React from "react";
import "./addTeacher.scss";
import { LeftOutlined } from "@ant-design/icons";
import AdminLayout from "../../AdminLayout";
import { Link } from "react-router-dom";
import TeacherForma from "./TeacherForma/TeacherForma";
function AddTeacher() {
  return (
    <AdminLayout>
      <div className="add">
        <div className="add_teacher">
          <LeftOutlined className="add_teacher_icon" />
          Ustoz
        </div>
        <div>
          <button className="add_cansel">Bekor qilish</button>

          <Link to="/admin/Teacher/add">
            <button className="add_added">Tastiqlangan</button>
          </Link>
        </div>
      </div>
      <TeacherForma/>
    </AdminLayout>
  );
}

export default AddTeacher;
