import Title from '@/shared/ui/title'
import Text from '@/shared/ui/text'
import styles from './Coach.module.css'

const Coach = (props)=>{
    const {image, name, exp, description} = props

    return(
        <div className={styles.coach}>
            <img src={image} alt="" className={styles.image}/>
            <div className={styles.container}>
                <div className={styles.head}>
                    <Title className={styles.name}>{name}</Title>
                    <Text className={styles.exp}>{exp} лет опыта</Text>
                </div>
                <Text className={styles.description}>{description}</Text>
            </div>
        </div>
    )
}

export default Coach