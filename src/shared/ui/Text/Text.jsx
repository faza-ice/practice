import clsx from 'clsx'
import styles from './Text.module.css'

const Text = (props)=>{
    const {className, children} = props

    return(
        <span className = {clsx(styles.text, className)}>{children}</span>
    )
}

export default Text