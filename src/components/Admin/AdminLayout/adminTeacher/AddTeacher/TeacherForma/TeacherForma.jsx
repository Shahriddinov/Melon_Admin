import React from "react";
import "./TeacherForma.scss";
import FormControl from "../../../FormInput";
import ImgIcon from "../../../../../../assets/images/Icon pack.svg";
export default function TeacherForma() {
  return (
    <div className="TeacherForma">
      <div className="TeacherForma_form">
        <div className="TeacherForma_form_inputs">
          <FormControl
            placeholder={"Ism"}
            id={"firstname"}
            label={"Ism"}
          ></FormControl>
          <FormControl
            placeholder={"Familiya"}
            id={"lastName"}
            label={"Familiya"}
          ></FormControl>
          <FormControl
            placeholder={"LastName"}
            id={"lastname"}
            label={"LastName"}
          ></FormControl>
          <FormControl
            type="number"
            placeholder={"Telefon raqam"}
            id={"PhoneNumber"}
            label={"Telefon Raqam"}
          ></FormControl>
        </div>
        <div className="TeacherForma_form_inputs">
          <FormControl
            placeholder={"O’qigan joyingiz nomi"}
            id={"learnplace"}
            label={"O’qigan joyingiz nomi"}
          ></FormControl>
          <FormControl
            type="number"
            placeholder={"Qancha shogirt chiqargane siz"}
            id={"stydentNumber"}
            label={"Qancha shogirt chiqargane siz"}
          ></FormControl>
          <FormControl
            type="password"
            placeholder={"Password"}
            id={"Password"}
            label={"Password"}
          ></FormControl>
        </div>
        <div className="TeacherForma_form_inputs">
          <label className="TeacherForma_form_inputs_imgUploud" htmlFor="file">
            <input
              className=""
              style={{ display: "none" }}
              type="file"
              name="img"
              id="file"
              accept="image/*"
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
      <textarea className="TeacherForma_area" placeholder="text"/>
    </div>
  );
}
