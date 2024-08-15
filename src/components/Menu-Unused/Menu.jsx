import styles from "./Menu.module.css";
import Link from "next/link";

export default function Menu() {
  return (
    <>
      <div>
        <button>X</button>
        <Link href="/">Home</Link>
        <Link href="/founders">Founders</Link>
      </div>
    </>
  );
}
