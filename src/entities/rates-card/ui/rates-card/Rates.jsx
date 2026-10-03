import Button from '@/shared/ui/button'
import Title from '@/shared/ui/title'
import Text from '@/shared/ui/text'
import styles from './Rates.module.css'

export const Rates = (props)=>{
    const {option, them, name, price, isHit = false, description} = props
    const str = description.split(". ");

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
                    {str.map((el)=>{
                        return <li><Text className={styles.text}>{el}</Text></li>
                    })}
                </ul>
            </div>
        </div>
    )
}
