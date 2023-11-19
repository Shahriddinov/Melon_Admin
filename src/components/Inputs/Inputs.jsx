import React from "react";
import "./index.scss";

export default function FormInput({ label, placeholder, type, id, value, onChange, name, min, max, className}){
  return (
    <div className="formInput">
      <label htmlFor={id}>{label}</label>
      <input
        required
        min={min}
        max={max}
        type={type}
        placeholder={placeholder}
        id={id}
        value={value}
        onChange={onChange}
        name={name}
        className={className}
      />
    </div>
  );
}
