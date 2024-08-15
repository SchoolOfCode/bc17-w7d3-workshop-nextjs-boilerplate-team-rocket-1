import styles from './Header.module.css'
import Link from 'next/link';

const Header = () => {
  return (
    <>
    <header className={styles.headerContainer}>
      <h1 className={styles.title}>🔥 Fireplace Palace</h1>
      <Link href="/founders">Hamsa</Link>
    </header>
    </>
  );
};

export default Header;
