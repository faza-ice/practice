import clsx from 'clsx'
import imag from '@/shared/assets/dot.svg'
import styles from './Plate.module.css'

const Plate = (props)=>{
    const{className, children} = props

    return(
        <div className={clsx(styles.plate, className)}>
            <img src={imag} alt="" className={styles.imag}/><span>{children}</span>
        </div>
    )
}

export default Plate