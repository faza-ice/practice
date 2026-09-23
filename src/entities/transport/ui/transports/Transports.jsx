import Title from '@/shared/ui/title'
import Text from '@/shared/ui/text'
import styles from './Transports.module.css'

const Transports = (props)=>{
    const {
        images,
        title,
        year,
        transmission,
    } = props

    return(
        <div 
            className = {styles.transports}
        >
            <img src={images} alt="" />
            <div className={styles.info}>
                <Title className={styles.title}>{title}</Title>    
                <div className={styles.tech}> 
                    <Text className={styles.year}>Год: {year}</Text> 
                    <Text className={styles.transmission}>{transmission}</Text>
                </div>
            </div>
        </div>
    )
}

export default Transports