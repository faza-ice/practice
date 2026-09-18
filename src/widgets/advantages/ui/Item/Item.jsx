import Title from '@/shared/ui/Title'
import Text from '@/shared/ui/Text'
import clsx from 'clsx'
import styles from './Item.module.css'

const Item = (props)=>{
    const {imag, title, text, className} = props

    return(
        <div className={clsx(styles.item, className)}>
            <img src={imag} alt="" className={styles.imag}/>
            <Title className={styles.title}>{title}</Title>
            <Text className={styles.text}>{text}</Text>
        </div>
    )
}

export default Item