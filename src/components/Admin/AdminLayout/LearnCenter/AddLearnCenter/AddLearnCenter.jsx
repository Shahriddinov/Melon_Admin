import React, { useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { LeftOutlined } from '@ant-design/icons'
import FormControl from "../../../../Inputs/Inputs"
import ImgIcon from "../../../../../assets/images/Icon pack.svg"
import { request } from '../../../../../services/api/request'
import "./addLearnCenter.scss"

export function AddLearnCenter() {
  const [education_name, setEdu] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [address, setAddress] = useState('');
  const [phone_number, setPhone] = useState('');
  const [lesson_duration, setLesson] = useState('');
  const image = useRef('')
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('education_name', education_name);
    formData.append('price', price);
    formData.append('description', description);
    formData.append('address', address);
    formData.append('phone_number', phone_number);
    formData.append('lesson_duration', lesson_duration);
    formData.append('username', username);
    formData.append('password', password);
    formData.append('image', image.current.files[0]);
    try {
      await request.post('/edu', formData);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="add">
        <div className="add_LearnCenter">
          <NavLink to={'/center'} style={{ color: '#000' }}>
            <LeftOutlined className="add_LearnCenter_icon" />  O’quv markazi
          </NavLink>
        </div>
        <div>
          <button type='reset' className="add_cansel">Bekor qilish</button>
          <button type='submit' className="add_added">Tastiqlangan</button>
        </div>
      </div>
      <div className='FormaLearnCenter'>
        <div className="FormaLearnCenter_form">
          <div className="FormaLearnCenter_form_inputs">
            <FormControl
              placeholder={"Telefon Raqam"}
              id={"phoneNumber"}
              type="tel"
              label={"Telefon Raqam"}
              onChange={(e) => setPhone(e.target.value)}
            ></FormControl>
            <FormControl
              placeholder={"O'quv markazining nomi"}
              id={"learnCenterName"}
              type="text"
              label={"O'quv markazining nomi"}
              onChange={(e) => setEdu(e.target.value)}
            ></FormControl>
            <FormControl
              placeholder={"Username"}
              id={"Username"}
              type="text"
              label={"Username"}
              style={{ border: '1px solid red' }}
              onChange={(e) => setUsername(e.target.value)}
            ></FormControl>
            <FormControl
              type="text"
              placeholder={"Manzil"}
              id={"address"}
              label={"Manzil"}
              onChange={(e) => setAddress(e.target.value)}
            ></FormControl>
          </div>
          <div className="FormaLearnCenter_form_inputs">
            <FormControl
              placeholder={"Darslik davomilgi"}
              id={"learnDuration"}
              label={"Darslik davomilgi"}
              onChange={(e) => setLesson(e.target.value)}
            ></FormControl>
            <FormControl
              type="number"
              placeholder={"Narxi"}
              id={"stydentNumber"}
              label={"Narxi"}
              onChange={(e) => setPrice(e.target.value)}
            ></FormControl>
            <FormControl
              type="password"
              placeholder={"Password"}
              id={"Password"}
              label={"Password"}
              onChange={(e) => setPassword(e.target.value)}
            ></FormControl>
          </div>
          <div className="FormaLearnCenter_form_inputs">
            <label className="FormaLearnCenter_form_inputs_imgUploud" htmlFor="file">
              <input
                className=""
                style={{ display: "none" }}
                type="file"
                name="img"
                id="file"
                accept="image/*"
                ref={image}
              />

              <img
                className="FormaLearnCenter_form_inputs_imgUploud_imgs"
                src={ImgIcon}
                alt="uploud"
              />
              <span className="FormaLearnCenter_form_inputs_spans">
                Suratni yuklang
              </span>
            </label>
          </div>
        </div>
        <label htmlFor="text">Qisqacha ma'lumot</label>
        <textarea className="FormaLearnCenter_area" placeholder="text" onChange={(e) => setDescription(e.target.value)} />
      </div>
    </form>

  )
}
