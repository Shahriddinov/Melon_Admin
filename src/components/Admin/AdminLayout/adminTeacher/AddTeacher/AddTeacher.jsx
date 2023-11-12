import React from "react";
import "./addTeacher.scss";
import { LeftOutlined } from "@ant-design/icons";
// import AdminLayout from "../../AdminLayout";
import { Link } from "react-router-dom";
import TeacherForma from "./TeacherForma/TeacherForma";
export function AddTeacher() {
  return (
    <>
      <div className="add">
        <div className="add_teacher">
          <LeftOutlined className="add_teacher_icon" />
          Ustoz
        </div>
        <div>
          <Link to="/admin">
            <button className="add_cansel">Bekor qilish</button>
          </Link>
          <Link to="/admin">
            <button className="add_added">Tastiqlangan</button>
          </Link>
        </div>
      </div>
      <TeacherForma/>
    </>
  );
}

