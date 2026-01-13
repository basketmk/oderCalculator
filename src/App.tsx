import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useState } from "react";

export default function App() {
  return (
    <div className="min-h-dvh bg-red-200 px-4 py-6 rounded-xl">
      <div className="mx-auto max-w-sm rounded-xl bg-red-200">
        <h1 className="text-2xl font-bold text-zinc-900 mb-6 text-center">
          メニュー
        </h1>
        <ul></ul>
        <p className="mt-6 text-right text-zinc-900">合計：0円</p>
      </div>
    </div>
  );
}
