import React from 'react'
import "./formLearnCenter.scss"
import FormControl from "../../../FormInput"
import ImgIcon from "../../../../../../assets/images/Icon pack.svg"
export default function FormaLearnCenter() {
  return (
    <div className='FormaLearnCenter'>
        <div className="FormaLearnCenter_form">
        <div className="FormaLearnCenter_form_inputs">
          <FormControl
            placeholder={"Telefon Raqam"}
            id={"phoneNumber"}
            type="number"
            label={"Telefon Raqam"}
          ></FormControl>
          <FormControl
            placeholder={"O'quv markazining nomi"}
            id={"learnCenterName"}
            type="text"
            label={"O'quv markazining nomi"}
          ></FormControl>
          <FormControl
            placeholder={"LastName"}
            id={"lastname"}
            type="text"
            label={"LastName"}
          ></FormControl>
          <FormControl
            type="text"
            placeholder={"Manzil"}
            id={"address"}
            label={"Manzil"}
          ></FormControl>
        </div>
        <div className="FormaLearnCenter_form_inputs">
          <FormControl
            placeholder={"Darslik davomilgi"}
            id={"learnDuration"}
            label={"Darslik davomilgi"}
          ></FormControl>
          <FormControl
            type="number"
            placeholder={"Narxi"}
            id={"stydentNumber"}
            label={"Narxi"}
          ></FormControl>
          <FormControl
            type="password"
            placeholder={"Password"}
            id={"Password"}
            label={"Password"}
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
      <textarea className="FormaLearnCenter_area" placeholder="text"/>
    </div>
  )
}
