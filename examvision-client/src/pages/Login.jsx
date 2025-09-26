import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({ emailOrPhone: "", password: "" });

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!loginData.emailOrPhone || !loginData.password) {
      alert("Email/Phone and Password are required!");
      return;
    }

    // Placeholder: API call хийх хэсэг
    alert(`Logged in successfully with ${loginData.emailOrPhone}`);

    // Navigation example: Login → Dashboard (одоохондоо Register page)
    navigate("/register"); 
  };

  return (
    <div style={{ maxWidth: "400px", margin: "50px auto" }}>
      <h2>Нэвтрэх</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "10px" }}>
          <label>И-мэйл хаяг эсвэл Утасны дугаар</label>
          <input
            type="text"
            name="emailOrPhone"
            value={loginData.emailOrPhone}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px" }}
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>Нууц үг</label>
          <input
            type="password"
            name="password"
            value={loginData.password}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px" }}
          />
        </div>

        <button type="submit" style={{ padding: "8px 16px" }}>Нэвтрэх</button>
      </form>

      <div style={{ marginTop: "15px" }}>
        <Link to="/reset">Нууц үг мартсан?</Link> | <Link to="/register">Бүртгүүлэх</Link>
      </div>
    </div>
  );
}

export default Login;
