import React from "react";
import "./formInput.scss"
export default function FormInput({ label, placeholder, type, id, value, onChange}) {
  return (
    <div className="formInput">
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        id={id}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
