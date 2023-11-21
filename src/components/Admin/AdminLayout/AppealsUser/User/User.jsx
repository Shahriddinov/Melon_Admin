import React, { useEffect, useState } from "react";
import { LeftOutlined } from "@ant-design/icons";
import { Table } from "../../../../Table/Table";
import { Dropdown } from "../../../../Dropdown/Dropdown";
import Doulbe from "../../../../../assets/images/doulbe.svg";
import { request } from "../../../../../services/api/request";
import userAvatar from "../../../../../assets/images/user-avatar.svg";
import Skeleton from 'react-loading-skeleton'
import { Pagination } from "antd";
import "./user.scss";

export function User() {
  const [active, setActive] = useState(false);
  const [menuId, setMenuId] = useState(0);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  // const [currentPage, setCurrentPage] = useState(1);
  // const pageSize = 4;

  useEffect(() => {
    request.get('/appeals')
    .then(res => {
      setData(res?.data); 
      setLoading(false);
    })
    .catch(error => console.log(error))
  }, []);

  // const handlePageChange = (page) => {
  //   setCurrentPage(page);
  //   setLoading(true)
  // };
  if (loading) return <Skeleton count={5} height={30} />
  return (
    <>
      <div className="adminTeacher">
        <div className="table">
          <div className="table_teacher">
            <LeftOutlined className="table_teacher_icon" />USER
          </div>
          <button className="filter">Filter</button>
        </div>
        <Table name={'Ism familiyasi'}>
          {
            data?.data?.map((item, index) => {
              return <tr key={index} className="table-col">
                <td>0{index + 1}</td>
                <td>{item.id}</td>
                <td className="user-info">
                  <img className="user-avatar" src={userAvatar} alt='user avatar' />
                  {item.firstname} {item.lastname}
                </td>
                <td>{item.createdAt}</td>
                <td>
                  <button className="table-btn">Tasdiqlangan</button>
                </td>
                <td className="menu-wrap">
                  <img src={Doulbe} alt='img' onClick={() => {
                    setActive(!active)
                    setMenuId(item.id)
                  }} />
                  {
                    item.id === menuId && <Dropdown id={item.id}
                      active={active}
                      pathChat='chat'
                      pathVideo='video'
                      pathEdit={`add/${item.id}`}
                    />
                  }
                </td>
              </tr>
            })
          }
        </Table>
        <Pagination className="pagination"  />
      </div>
    </>
  );
}
