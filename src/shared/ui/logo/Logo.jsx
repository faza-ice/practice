import clsx from 'clsx'
import Title from '../title'
import styles  from './Logo.module.css'

const Logo = (props)=>{
    const {className, children} = props

    return(
        <div className={clsx(className, styles.logo)}>
            <Title className={styles.title}>{children}</Title>
        </div>
    )
}

export default Logo