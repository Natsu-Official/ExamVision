import React, { useState } from "react";

function Register() {
  const [role, setRole] = useState("student"); // default
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    code: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation
    if (!formData.firstName || !formData.lastName) {
      alert("First and Last name required!");
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    alert(`Registered as ${role} successfully!`);
  };

  return (
    <div style={{ maxWidth: "500px", margin: "50px auto" }}>
      <h2>Бүртгүүлэх</h2>
      
      <div style={{ marginBottom: "10px" }}>
        <label>Хэрэглэгч: </label>
        <button type="button" onClick={() => setRole("student")} style={{ marginRight: "5px" }}>
          Оюутан
        </button>
        <button type="button" onClick={() => setRole("teacher")}>
          Багш
        </button>
        <p>Сонгогдсон хэрэглэгч: {role}</p>
      </div>

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "10px" }}>
          <label>Овог</label>
          <input type="text" name="lastName" value={formData.firstName} onChange={handleChange} style={{ width: "100%", padding: "8px" }} />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>Нэр</label>
          <input type="text" name="firstName" value={formData.lastName} onChange={handleChange} style={{ width: "100%", padding: "8px" }} />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>Код (Оюутан/Багш)</label>
          <input type="text" name="code" value={formData.code} onChange={handleChange} style={{ width: "100%", padding: "8px" }} />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>И-мэйл</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} style={{ width: "100%", padding: "8px" }} />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>Утасны дугаар</label>
          <input type="text" name="phone" value={formData.phone} onChange={handleChange} style={{ width: "100%", padding: "8px" }} />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>Нууц үг</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} style={{ width: "100%", padding: "8px" }} />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>Нууц үг давтах</label>
          <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} style={{ width: "100%", padding: "8px" }} />
        </div>

        <button type="submit" style={{ padding: "8px 16px" }}>Бүртгүүлэх</button>
      </form>
    </div>
  );
}

export default Register;
