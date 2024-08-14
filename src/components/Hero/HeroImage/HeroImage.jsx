import styles from "./HeroImage.module.css";
// import next from "next";
import Image from "next/image";

const HeroImage = () => {
  return (
    <Image
      src="/images/hero-desktop.png"
      alt="Cozy living room with a fireplace"
      className={styles.heroImage}
      width={500}
      height={500}
    />
  );
};

export default HeroImage;
