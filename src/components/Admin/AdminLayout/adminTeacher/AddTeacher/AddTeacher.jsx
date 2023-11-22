import React, { useState } from "react";
import { LeftOutlined } from "@ant-design/icons";
import FormControl from "../../../../Inputs/Inputs";
import ImgIcon from "../../../../../assets/images/Icon pack.svg";
import { useRef } from "react";
import { Link, useParams } from "react-router-dom";
import { request } from "../../../../../services/api/request";
import "./addTeacher.scss";

export function AddTeacher() {
  const { id } = useParams('')
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [phone, setPhone] = useState('');
  const [edu, setEdu] = useState('');
  const avatar = useRef('')
  const [description, setDescription] = useState('');
  const [username, setUsername] = useState('');
  const [lesson, setLesson] = useState('');
  const [count, setCount] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('firstname', firstname);
    formData.append('lastname', lastname);
    formData.append('description', description);
    formData.append('phone_number', phone);
    formData.append('student_count', count);
    formData.append('avatar', avatar.current.files[0]);
    formData.append('username', username);
    formData.append('place_education', edu);
    formData.append('lesson_duration', lesson);
    formData.append('password', password);
    try {
      await request.post(`/teacher`, formData)
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <form onSubmit={handleSubmit} >
      <div className="add">
        <div className="add_teacher">
          <Link to={'/admin'} style={{ color: '#000' }}>
            <LeftOutlined className="add_teacher_icon" /> Ustoz {id}
          </Link>
        </div>
        <div>
          {/* <Link to="/admin"> */}
          <button type="reset" className="add_cansel">Bekor qilish</button>
          {/* </Link> */}
          {/* <Link to="teacher/add"> */}
          <button type="submit" className="add_added">Tastiqlangan</button>
          {/* </Link> */}
        </div>
      </div>
      <div className="TeacherForma" >
        <div className="TeacherForma_form">
          <div className="TeacherForma_form_inputs">
            <FormControl
              placeholder={"Ism"}
              id={"firstname"}
              label={"Ism"}
              name="firstname"
              type={'text'}
              min='3'
              onChange={(e) => setFirstname(e.target.value)}
            ></FormControl>
            <FormControl
              placeholder={"Familiya"}
              id={"lastName"}
              label={"Familiya"}
              name="lastname"
              type={'text'}
              min='3'
              onChange={(e) => setLastname(e.target.value)}
            ></FormControl>
            <FormControl
              placeholder={"Username"}
              id={"username"}
              label={"username"}
              name="username"
              type={'text'}
              min="2"
              onChange={(e) => setUsername(e.target.value)}
            ></FormControl>
            <FormControl
              type="tel"
              placeholder={"Telefon raqam"}
              id={"PhoneNumber"}
              label={"Telefon Raqam"}
              name="phone_number"
              min="9"
              max='11'
              onChange={(e) => setPhone(e.target.value)}
            ></FormControl>
          </div>
          <div className="TeacherForma_form_inputs">
            <FormControl
              placeholder={"O’qigan joyingiz nomi"}
              id={"learnplace"}
              label={"O’qigan joyingiz nomi"}
              name="place_education"
              type={'text'}
              min='3'
              onChange={(e) => setEdu(e.target.value)}
            ></FormControl>
            <FormControl
              type="number"
              placeholder={"Qancha shogirt chiqargane siz"}
              id={"stydentNumber"}
              label={"Qancha shogirt chiqargane siz"}
              name="student_count"
              onChange={(e) => setCount(e.target.value)}
            ></FormControl>
            <FormControl
              type="text"
              placeholder={"5 - oy"}
              id={"text"}
              label={"Dars davomiyligi"}
              name="lesson_duration"
              min='6'
              max='8'
              onChange={(e) => setLesson(e.target.value)}
            ></FormControl>
            <FormControl
              type="password"
              placeholder={"5 - oy"}
              id={"password"}
              label={"Password"}
              name="password"
              min='6'
              max='8'
              onChange={(e) => setPassword(e.target.value)}
            ></FormControl>
          </div>
          <div className="TeacherForma_form_inputs">
            <label className="TeacherForma_form_inputs_imgUploud" htmlFor="file">
              <input
                required
                style={{ visibility: 'hidden' }}
                type="file"
                name="avatar"
                id="file"
                accept="image/*"
                ref={avatar}
              />
              <img
                className="TeacherForma_form_inputs_imgUploud_imgs"
                src={ImgIcon}
                alt="uploud"
              />
              <span className="TeacherForma_form_inputs_spans">
                Suratni yuklang
              </span>
            </label>
          </div>
        </div>
        <label htmlFor="text">Qisqacha ma'lumot</label>
        <textarea required className="TeacherForma_area" min='10' placeholder="text" name="description" onChange={(e) => setDescription(e.target.value)} />
      </div>
    </form>
  );
}

