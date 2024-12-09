import React, { useState } from "react";
import "./App.css";

function App() {
  // State สำหรับเก็บข้อความที่จะแสดงในกล่อง greeting
  const [message, setMessage] = useState("Greeting Message");

  // ฟังก์ชันเปลี่ยนข้อความตามปุ่มที่กด
  function handleButtonClick(newMessage) {
    setMessage(newMessage); // อัปเดต State ด้วยข้อความใหม่
  }

  return (
    <div className="App">
      {/* กล่องข้อความที่เปลี่ยนแปลงตาม State */}
      <div className="greeting-container">{message}</div>
      <div className="buttons">
        <button
          onClick={function () {
            handleButtonClick("สวัสดี");
          }}
        >
          สวัสดี!
        </button>
        <button
          onClick={function () {
            handleButtonClick("Hi!");
          }}
        >
          Hi!
        </button>
        <button
          onClick={function () {
            handleButtonClick("你好!");
          }}
        >
          你好!
        </button>
      </div>
    </div>
  );
}

export default App;