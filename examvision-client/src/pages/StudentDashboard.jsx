import React from "react";

export default function StudentDashboard() {
  return (
    <div className="dashboard">
      <h2>Оюутны Самбар</h2>
      <div className="dashboard-grid">
        <div className="card">
          <h3>Миний шалгалтууд</h3>
          <p>Таныг хүлээж буй шалгалтууд энд гарна.</p>
        </div>
        <div className="card">
          <h3>Шалгалтын түүх</h3>
          <p>Өмнө өгсөн шалгалтын дүн, тайланг эндээс харна.</p>
        </div>
      </div>
    </div>
  );
}
