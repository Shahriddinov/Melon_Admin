import React, { useState } from "react";
import { Space, Table, Tag } from "antd";
import "./table.scss";
import Double from "../../../assets/images/doulbe.svg";
import { Link, useLocation } from "react-router-dom";
const { Column, ColumnGroup } = Table;

export default function Tables() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const registerHeader = pathname.split("/")[1];


  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const data = [
    {
      key: "1",
      Id: "#1",
      firstName: "John Uils",
      data: "01/01/2023",
      confirmation: "Tasdiqlangan",
      tags: (
        <div className="advanced-settings">
          <img
            src={Double}
            alt=""
            onClick={toggleMenu}
            className="menu-trigger"
          />
          {isMenuOpen && (
             <div className="menu">
             <ul>
               <Link to={registerHeader.includes("admin")} style={{ textDecoration: "none", color: "black" }}>
                 <li >Chatni oching</li>
               </Link>
               <Link to="/#" style={{ textDecoration: "none", color: "black" }}>
                 <li>O'zgartirish</li>
               </Link>
               <Link to="/#" style={{ textDecoration: "none", color: "black" }}>
                 <li>Oʻchirish</li>
               </Link>
               <Link to="/#" style={{ textDecoration: "none", color: "black" }}>
                 <li>Video qo’shish</li>
               </Link>
             </ul>
             {/* Add your advanced settings options here */}
           </div>
          )}
        </div>
      ),
    },
    {
      key: "2",
      Id: "/#2",
      firstName: "Jim  Quvvatov",
      data: "02/02/2023",
      confirmation: "Tasdiqlanmagan",
      tags: (
        <div className="advanced-settings">
          <img
            src={Double}
            alt=""
            onClick={toggleMenu}
            className="menu-trigger"
          />
          {isMenuOpen && (
            <div className="menu">
              <ul>
                <Link to="/#" style={{ textDecoration: "none", color: "black" }}>
                  <li>Chatni oching</li>
                </Link>
                <Link to="/#" style={{ textDecoration: "none", color: "black" }}>
                  <li>O'zgartirish</li>
                </Link>
                <Link to="/#" style={{ textDecoration: "none", color: "black" }}>
                  <li>Oʻchirish</li>
                </Link>
                <Link to="/#" style={{ textDecoration: "none", color: "black" }}>
                  <li>Video qo’shish</li>
                </Link>
              </ul>
              {/* Add your advanced settings options here */}
            </div>
          )}
        </div>
      ),
    },
    {
      key: "3",
      Id: "/#3",
      firstName: "Joe Jamilov",
      data: "03/03/2023",
      confirmation: "Tasdiqlangan",
      tags: (
        <div className="advanced-settings">
          <img
            src={Double}
            alt=""
            onClick={toggleMenu}
            className="menu-trigger"
          />
          {isMenuOpen && (
            <div className="menu">
            <ul>
              <Link to="/#" style={{ textDecoration: "none", color: "black" }}>
                <li>Chatni oching</li>
              </Link>
              <Link to="/#" style={{ textDecoration: "none", color: "black" }}>
                <li>O'zgartirish</li>
              </Link>
              <Link to="/#" style={{ textDecoration: "none", color: "black" }}>
                <li>Oʻchirish</li>
              </Link>
              <Link to="/#" style={{ textDecoration: "none", color: "black" }}>
                <li>Video qo’shish</li>
              </Link>
            </ul>
            {/* Add your advanced settings options here */}
          </div>
          )}
        </div>
      ),
    },
  ];
  console.log(isMenuOpen);
  return (
    <>
      <Table dataSource={data}>
        <Column title="#" dataIndex="key" key="id" />
        <Column title="Id" dataIndex="Id" key="Id" />

        <Column title="Ism Familiyasi" dataIndex="firstName" key="firstName" />
        <Column title="Yaratilgan Sanasi" dataIndex="data" key="data" />
        <Column title="Holati" dataIndex="confirmation" key="confirmation" />

        <Column title="Qisqa sozlamalar" key="tags" dataIndex="tags"></Column>
      </Table>
    </>
  );
}
