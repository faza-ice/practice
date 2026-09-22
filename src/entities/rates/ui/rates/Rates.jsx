import Button from '@/shared/ui/Button'
import Title from '@/shared/ui/Title'
import styles from './Rates.module.css'

const Rates = ()=>{


    return(
        <div className={styles.rates}>
            <div className={styles.head}>
                <Title className={styles.them}>БЫСТРЫЙ СТАРТ</Title>
                <Title className={styles.name}>ТЕОРИЯ ОНЛАЙН</Title>
                <Title className={styles.price}>5 000 ₽</Title>
            </div>
            <div>
                <ul>
                    <li>Полный курс видеолекций</li>
                    <li>Интерактивное приложение 24/7</li>
                </ul>
            </div>
            <Button option='grey' className={styles.button}>ВЫБРАТЬ ТАРИФ</Button>
        </div>
    )
}

export default Rates