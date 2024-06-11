import React from "react";
import "./index.css";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import UserList from "./components/UserList";

function App() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="w-4/5 h-full p-4">
        <Header />
        <UserList />
      </div>
    </div>
  );
}

export default App;
