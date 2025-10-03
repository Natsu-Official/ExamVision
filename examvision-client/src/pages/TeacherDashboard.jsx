import React from "react";

export default function TeacherDashboard() {
  return (
    <div className="dashboard">
      <h2>Багшийн Самбар</h2>
      <div className="dashboard-grid">
        <div className="card">
          <h3>Шалгалт оруулах</h3>
          <p>Шалгалтын материал үүсгэж, оруулах хэсэг.</p>
          <button className="btn btn-primary">Шинэ шалгалт нэмэх</button>
        </div>
        <div className="card">
          <h3>Шалгуулагчдын мэдээлэл</h3>
          <p>Оюутнуудын өгсөн шалгалт болон дүнг харах.</p>
        </div>
      </div>
    </div>
  );
}
