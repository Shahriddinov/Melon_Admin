import React from "react";
import Tables from "../Table";
import { LeftOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

export  function LearnCenter() {
  return (
    <>
      <div className="table">
        <div className="table_teacher">
          <LeftOutlined className="table_teacher_icon" />  O'quv Markazlar
        </div>
        <Link to="add">
          <button className="table_added">Qo'shish</button>
        </Link>
      </div>
      <Tables />
    </>
  );
}
