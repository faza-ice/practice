import clsx from 'clsx'
import Text from '../Text'
import imag from '@/shared/assets/dot.svg'
import styles from './Plate.module.css'

const Plate = (props)=>{
    const{className, children} = props

    return(
        <div className={clsx(styles.plate, className)}>
            <img src={imag} alt="" className={styles.imag}/><Text className={styles.text}>{children}</Text>
        </div>
    )
}

export default Plate