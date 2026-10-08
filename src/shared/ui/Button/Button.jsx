import clsx from 'clsx'
import styles from './Button.module.css'


const Button = (props)=>{
    const {option, children, className, disabled}=props




    return (
        <button
            className = {clsx(styles.button, styles[option], className)}
            disabled = {disabled}
        >{children}
        </button>
    )
}

export default Button