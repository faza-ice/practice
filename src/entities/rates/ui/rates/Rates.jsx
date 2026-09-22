import Button from '@/shared/ui/Button'
import Title from '@/shared/ui/Title'
import Text from '@/shared/ui/Text'
import styles from './Rates.module.css'

const Rates = (props)=>{
    const {option} = props
    const str = "Полный курс видеолекций. Интерактивное приложение 24/7. Поддержка личного куратора. Без практических занятий. Помощь в оформлении документов."
    const description = str.split(". ");

    return(
        <div className={`${styles.rates} ${styles[option]}`}>
            <div className={styles.head}>
                <Title className={styles.them}>БЫСТРЫЙ СТАРТ</Title>
                <Title className={styles.name}>ТЕОРИЯ ОНЛАЙН</Title>
                <Title className={styles.price}>5 000 ₽</Title>
            </div>
            <div>
                <ul className={styles.ul}>
                    {description.map((el)=>{
                        return <li><Text className={styles.text}>{el}</Text></li>
                    })}
                </ul>
            </div>
            <Button option={option} className={styles.button}>ВЫБРАТЬ ТАРИФ</Button>
        </div>
    )
}

export default Rates