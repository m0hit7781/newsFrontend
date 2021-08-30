// import { useState } from "react";
import "../../App.css";

const Input = ({ placeholder, label, type, onChange, name }) => {
  return (
    <div className="form-group">
      <label htmlFor="logininput">{label}</label>
      <input className="logininput" type={type} placeholder={placeholder} onChange ={onChange} name={name} />
    </div>
  );
};

export default Input;
