'use client'
import styles from './Header.module.css'
import Link from 'next/link';
import { useState } from 'react'

const [ menuStatus, setMenuStatus ] = useState(false)

function handleClick() {
  setMenuStatus(!menuStatus)
}

const Header = () => {
  return (
    <>
    <header className={styles.headerContainer}>
      <h1 className={styles.title}>🔥 Fireplace Palace</h1>
      <button onClick={handleClick}>Racoon menu</button>
      <Link href="/founders">Hamsa</Link>
    </header>
    </>
  );
};

export default Header;
