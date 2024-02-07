"use client"

import { useState } from "react";
import Toggle from "./components/toggle";

const WHITE_LOGO = '/ncoded-logo-white.png';
const BLACK_LOGO = '/ncoded-logo-black.png';

export default function Home() {

  const [logo, setLogo] = useState(WHITE_LOGO);

  function toggleChangeHandler(state) {
    setLogo(state ? BLACK_LOGO : WHITE_LOGO);
  }

  return (
    <main className="flex flex-col items-center">
      <h1 className="text-5xl">Welcome to my first NextJS project!</h1>
      <img src={logo} alt="Ncoded-logo" className="w-32 h-32 object-cover"/>
      <Toggle onToggle={toggleChangeHandler} />
      <p>🔥 Toggle the button above 🔥</p>
    </main>
  );
}
