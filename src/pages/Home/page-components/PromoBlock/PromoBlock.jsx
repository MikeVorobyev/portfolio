
import BackgroundText from './BackgroundText/BackgroundText'
import NameCard from './NameCard/NameCard'


import styles from './promoBlock.module.scss'

const PromoBlock = () => {
    return (
        <div className={styles.promoBlock}>
            <div className={styles.nameCard_wrapper}>
                <NameCard />
            </div>

            <div className={styles.backgroundText_wrapper}>
                <BackgroundText />
            </div>
        </div>
    )
}

export default PromoBlock