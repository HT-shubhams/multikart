import React from "react";
import "./index.css";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import UserList from "./components/UserList";

function App() {
  return (
    <div className="flex h-screen font-poppins">
      <Sidebar />
      <div className="h-full w-full">
        <Header />
        <UserList />
      </div>
    </div>
  );
}

export default App;
