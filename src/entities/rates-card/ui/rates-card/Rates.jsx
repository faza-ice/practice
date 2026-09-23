import Button from '@/shared/ui/button'
import Title from '@/shared/ui/title'
import Text from '@/shared/ui/text'
import styles from './Rates.module.css'

const Rates = (props)=>{
    const {option, them, name, price, isHit = false} = props
    const par = []
    const str = "Полный курс видеолекций. Интерактивное приложение 24/7. Поддержка личного куратора. Без практических занятий. Помощь в оформлении документов."
    const description = str.split(". ");

    return(
        <div className={`${styles.rates} ${styles[option]}`}>
            <div className={styles.head}>
                <div className={styles.subHead}>
                    <Title className={styles.them}>{them}</Title>
                    {isHit && (<Title className={styles.hit}>ХИТ</Title>)}
                </div>
                <Title className={styles.name}>{name}</Title>
                <Title className={styles.price}>{price}</Title>
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