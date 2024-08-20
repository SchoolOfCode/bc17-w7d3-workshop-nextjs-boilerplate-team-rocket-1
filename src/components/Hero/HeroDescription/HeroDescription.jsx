import styles from "./HeroDescription.module.css";
import Link from "next/link";

const HeroDescription = () => {
  return (
    <div className={styles.heroDescription}>
      <p className={styles.heroHeadline}>
        Discover the <br />
        perfect fireplace ...
      </p>
      <p className={styles.consultationParagraph}>
        <Link className={styles.numberSpan} href="/booking">
          Book consultation
        </Link>
      </p>
    </div>
  );
};

export default HeroDescription;
