import clsx from 'clsx'
import Title from '../title'
import imag from '@/shared/assets/dot.svg'
import styles from './Plate.module.css'

const Plate = (props)=>{
    const{className, children} = props

    return(
        <div className={clsx(styles.plate, className)}>
            <img src={imag} alt="" className={styles.imag}/><Title className={styles.title}>{children}</Title>
        </div>
    )
}

export default Plate