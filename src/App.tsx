import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useState } from "react";

const Menu = () => {
  return <li className={`${menuBox}`}>牛丼</li>;
};

const menuBox = "text-md font-bold border rounded-2xl mt-2 p-2 border-gray-500";

function App() {
  return (
    <div className="max-w-xl mx-auto bg-red-200 px-4 py-4 rounded-xl">
      <h1 className="text-2xl font-bold text-zinc-900 mb-6 text-center">
        メニュー
      </h1>
      <ul>
        <Menu />
        <Menu />
        <Menu />
      </ul>
      <p className="text-md font-bold text-right mt-3 mr-2">合計: 0円</p>
    </div>
  );
}

export default App;
