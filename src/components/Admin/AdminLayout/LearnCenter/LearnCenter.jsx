import React, { useEffect } from "react";
import { LeftOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { Table } from "../../../Table/Table";
import { Dropdown } from "../../../Dropdown/Dropdown";
import { useState } from "react";
import Doulbe from "../../../../assets/images/doulbe.svg";
import { request } from "../../../../services/api/request";
import Skeleton from 'react-loading-skeleton'
import { Pagination } from "antd";
import 'react-loading-skeleton/dist/skeleton.css'
import "./main.scss";

export function LearnCenter() {
  const [active, setActive] = useState(false);
  const [menuId, setMenuId] = useState(0);
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 4;
  useEffect(() => {
    fetch(`http://meelon.uz/edu?page=${currentPage}&limit=${8}`)
      .then(res => res.json())
      .then(data => {
        setData(data?.data?.data)
        setLoading(false)
      })
  }, [count, currentPage]);
  const handleDelete = async (id) => {
    try {
      await request.delete(`/edu/${id}`)
      setCount(count + 1)
      setLoading(true)
      setActive(false)
    } catch (error) {
      console.log(error);
    }
  }
  const handlePageChange = (page) => {
    setCurrentPage(page);
    setLoading(true)
  };

  data.slice((currentPage - 1) * pageSize, currentPage * pageSize);
  if (loading) return <Skeleton count={5} height={30} />
  return (
    <>
      <div className="table">
        <div className="table_teacher">
          <LeftOutlined className="table_teacher_icon" />  O'quv Markazlari
        </div>
        <Link to="add">
          <button className="table_added">Qo'shish</button>
        </Link>
      </div>
      <Table name='Nomi'>
        {
          data?.map((item, index) => {
            return <tr key={index} className="table-col">
              <td>0{index + 1}</td>
              <td>{item.id}</td>
              <td>{item.education_name}</td>
              <td>{item.createdAt}</td>
              <td>
                <button className="center-btn">Tasdiqlangan</button>
              </td>
              <td className="menu-wrap">
                <img src={Doulbe} alt='img' onClick={() => {
                  setActive(!active)
                  setMenuId(item.id)
                }} />
                {
                  item.id === menuId && <Dropdown id={item.id}
                    active={active}
                    handleDelete={() => handleDelete(item.id)}
                    pathChat='/chat'
                    pathVideo='/video'
                    pathEdit={`/center/edit/${item.id}`}
                  />
                }
              </td>
            </tr>
          })
        }
      </Table>
      <Pagination className="pagination" current={currentPage} pageSize={pageSize} total={data.length} onChange={handlePageChange} />
    </>
  );
}
