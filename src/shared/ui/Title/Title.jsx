import clsx from 'clsx'
import styles from './Title.module.css'

const Title = (props)=>{
    const {className, children} = props

    return(
        <span className={clsx(styles.title, className)}>{children}</span>
    )
}

export default Title