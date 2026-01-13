import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useState } from "react";

export default function App() {
  const menuBox =
    "text-md font-bold border rounded-2xl m-2 p-2 border-gray-500";

  return (
    <div className="bg-red-200 px-4 py-6 rounded-xl">
      <h1 className="text-2xl font-bold text-zinc-900 mb-6 text-center">
        メニュー
      </h1>
      <ul>
        <li className={`${menuBox}`}>牛丼</li>
        <li className={`${menuBox}`}>牛丼</li>
        <li className={`${menuBox}`}>牛丼</li>
      </ul>
      <p className="text-md font-bold">合計: 0円</p>
    </div>
  );
}
