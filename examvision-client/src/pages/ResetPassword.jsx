import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function ResetPassword() {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value.trim()) {
      alert("И-мэйл эсвэл утасны дугаараа оруулна уу.");
      return;
    }
    // mock
    alert(`Нууц үг сэргээх холбоос ${value} руу илгээгдлээ (mock).`);
  };

  return (
    <div className="card form-card">
      <div className="card-left">
        <div className="logo-sm">EV</div>
        <h2 className="title">Нууц үг сэргээх</h2>
        <p className="subtitle">И-мэйл эсвэл утас оруулж нууц үг сэргээх холбоос хүсэх</p>

        <form onSubmit={handleSubmit} className="form">
          <label className="input-label">И-мэйл эсвэл утас</label>
          <input className="input" value={value} onChange={(e) => setValue(e.target.value)} />

          <button className="btn btn-primary" type="submit">Илгээх</button>

          <p className="form-switch">
            Санаж байна уу? <Link to="/login" className="link-primary">Нэвтрэх</Link>
          </p>
        </form>
      </div>

      <div className="card-right">
        <h3 className="right-title">Аюулгүй холбоос</h3>
        <p className="right-text">Нууц үг сэргээх холбоосыг бид богино хугацаанд илгээж, таны бүртгэлийн аюулгүй байдлыг хангана.</p>
      </div>
    </div>
  );
}
