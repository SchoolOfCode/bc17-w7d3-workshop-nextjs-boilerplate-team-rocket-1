"use client";

import styles from "./Header.module.css";
import Link from "next/link";
import { useState } from "react";
// import Menu from "../Menu-Unused/Menu.js";

const Header = () => {
  const [menuStatus, setMenuStatus] = useState(false);

  /* TODO - Still need to move the standard JavaScript menu function below,
  which just returns JSX for a fullscreen menu <div>, to its own React component. */
  function menu() {
    return (
      <>
        <div className={styles.menu}>
          <button onClick={handleClick}>X (Close Menu)</button>
          <Link onClick={handleClick} href="/">
            Home
          </Link>
          <Link onClick={handleClick} href="/founders">
            Founders
          </Link>
        </div>
      </>
    );
  }

  function handleClick() {
    setMenuStatus(!menuStatus);
    // console.log(menuStatus);
  }

  return (
    <>
      <header className={styles.headerContainer}>
        <Link href="/">
          <h1 className={styles.title}>🔥 Fireplace Palace</h1>
        </Link>
        <button onClick={handleClick} className={styles.menuHamburgerButton}>
          ≡
        </button>
        {menuStatus && menu()}
      </header>
    </>
  );
};

export default Header;
