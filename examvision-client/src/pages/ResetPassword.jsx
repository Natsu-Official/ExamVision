import React, { useState } from "react";
import { Link } from "react-router-dom";

function ResetPassword() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      alert("Email required!");
      return;
    }
    alert(`Password reset link sent to ${email}`);
  };

  return (
    <div style={{ maxWidth: "400px", margin: "50px auto" }}>
      <h2>Нууц үг мартсан</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "10px" }}>
          <label>И-мэйл</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ width: "100%", padding: "8px" }}
          />
        </div>
        <button type="submit" style={{ padding: "8px 16px" }}>Код илгээх</button>
      </form>
      <div style={{ marginTop: "15px" }}>
        <Link to="/login">Нэвтрэх хэсэг рүү буцах</Link>
      </div>
    </div>
  );
}

export default ResetPassword;
