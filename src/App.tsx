import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useState } from "react";

const Menu = (props) => {
  return (
    <li className="bg-yellow-100 text-zinc-900 pr-2 py-2 pl-6 rounded-2xl m-2 flex items-center text-center">
      <div className="flex gap-3 w-24"></div>
      <div className="flex-1">
        {props.label}({props.price}円 × {props.count}個)
      </div>
    </li>
  );
};

const Button = (props) => {
  return (
    <button
      onClick={props.onClick}
      className="w-8 h-8 border rounded bg-white flex items-center justify-center text-zinc-900"
    >
      {props.label}
    </button>
  );
};

export default function App() {
  const [counts, setCounts] = useState([0, 0, 0]);

  const menus = [
    { id: 0, label: "牛丼", price: 400 },
    { id: 1, label: "カレー", price: 500 },
    { id: 2, label: "サラダ", price: 300 },
  ];

  const menuItems = menus.map((menu) => (
    <Menu
      key={menu.id}
      count={counts[menu.id]}
      label={menu.label}
      price={menu.price}
    />
  ));

  return (
    <div className="min-h-dvh bg-red-200 px-4 py-6 rounded-xl">
      <div className="mx-auto max-w-sm rounded-xl bg-red-200">
        <h1 className="text-2xl font-bold text-zinc-900 mb-6 text-center">
          メニュー
        </h1>
        <ul>{menuItems}</ul>
        <p className="mt-6 text-right text-zinc-900">合計：{total}円</p>
      </div>
    </div>
  );
}
