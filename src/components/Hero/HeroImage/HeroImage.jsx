
import styles from './HeroImage.module.css'
import next from 'next'
import Image from next


const HeroImage = () => {
    return (
        <Image
        src="public\images\hero-desktop.png"
        alt="Cozy living room with a fireplace"
        className={styles.heroImage}
      />
    )
}

export default HeroImage