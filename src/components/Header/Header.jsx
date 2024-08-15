"use client";

import styles from "./Header.module.css";
import Link from "next/link";
import { useState } from "react";
import Menu from "../Menu/Menu.jsx"

const Header = () => {
  const [menuStatus, setMenuStatus] = useState(false);

  function handleClick() {
    setMenuStatus(!menuStatus);
    // console.log(menuStatus);
  }

  return (
    <>
      <header className={styles.headerContainer}>
        <h1 className={styles.title}>🔥 Fireplace Palace</h1>
        <button onClick={handleClick}>Racoon menu</button>
        <Menu> </Menu>
      </header>
    </>
  );
};

export default Header;
