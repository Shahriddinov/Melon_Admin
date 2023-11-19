import React, { useState } from "react";
import { LeftOutlined } from "@ant-design/icons";
import FormControl from "../../../../Inputs/Inputs";
import ImgIcon from "../../../../../assets/images/Icon pack.svg";
import { useRef } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import "./editTeacher.scss";

export function EditTeacher() {
  const { id } = useParams('')
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [phone, setPhone] = useState('');
  const [edu, setEdu] = useState('');
  const [lesson, setLesson] = useState('');
  const avatar = useRef('')
  const [description, setDescription] = useState('');
  const [username, setUsername] = useState('');
  const [count, setCount] = useState('');

  const handleEdit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('firstname', firstname);
    formData.append('lastname', lastname);
    formData.append('description', description);
    formData.append('phone_number', phone);
    formData.append('student_count', count);
    formData.append('avatar', avatar.current.files[0]);
    formData.append('username', username);
    formData.append('edu', edu);
    formData.append('lesson_duration', lesson);
    try {
      const res = await axios.patch(`http://admin.meelon.uz/teacher/${id}`, formData, {
        headers: {
          "Authorization": `Bearer ${localStorage.getItem('token')}`
        }
      })
      toast.success(res?.data.message)
    } catch (error) {
      toast.error(error.message)
    }

  }
  return (
    <form onSubmit={handleEdit} >
      <div className="add">
        <div className="add_teacher">
          <Link to={'/admin/teacher'} style={{ color: '#000' }}>
            <LeftOutlined className="add_teacher_icon" /> Ustoz
          </Link>
        </div>
        <div>
          <button type="reset" className="add_cansel">Bekor qilish</button>
          <button type="submit" className="add_added">Tastiqlangan</button>
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
              name="edu"
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
              placeholder={"Dars davomiyligi"}
              id={"lesson-duration"}
              label={"Qancha shogirt chiqargane siz"}
              name="lesson_duration"
              onChange={(e) => setLesson(e.target.value)}
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

