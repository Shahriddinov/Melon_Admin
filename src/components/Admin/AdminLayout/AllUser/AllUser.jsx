import React from "react";
import "./allUser.scss";
import { LeftOutlined } from "@ant-design/icons";
import Tables from "../Table";

export function AllUser() {
  return (
    <>
      <div className="adminTeacher">
        <div className="table">
          <div className="table_teacher">
            <LeftOutlined className="table_teacher_icon" />USER
          </div>
          <button className="filter">Filter</button>
        </div>
        <Tables />
      </div>
    </>
  );
}
