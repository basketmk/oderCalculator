import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useState } from "react";

const Menu = (props) => {
  const [count, setCount] = useState(0);
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  const increment = () => {
    setCount(count + 1);
  };
  return (
    <li className={`${menuBox}`}>
      <button
        className="w-8 h-8 border rounded flex items-center justify-center font-bold mr-2 bg-gray-200 cursor-pointer"
        onClick={decrement}
      >
        -
      </button>
      <button
        className="w-8 h-8 border rounded flex items-center justify-center font-bold mr-5 bg-gray-200 cursor-pointer"
        onClick={increment}
      >
        +
      </button>
      {props.label}({props.price}円 × {count}個)
    </li>
  );
};

const menus = [
  { id: 0, label: "牛丼", price: 400 },
  { id: 1, label: "カレー", price: 500 },
  { id: 2, label: "サラダ", price: 300 },
];

const menuItems = menus.map((menu) => {
  return <Menu key={menu.label} label={menu.label} price={menu.price} />;
});

const menuBox =
  "flex items-center justify-center text-md font-bold border rounded-2xl mt-2 p-2 border-gray-500";

function App() {
  return (
    <div className="max-w-md mx-auto bg-red-200 px-4 py-4 rounded-xl">
      <h1 className="text-2xl font-bold text-zinc-900 mb-6 text-center">
        メニュー
      </h1>
      <ul>{menuItems}</ul>
      <p className="text-md font-bold text-right mt-3 mr-2">合計: 0円</p>
    </div>
  );
}

export default App;
