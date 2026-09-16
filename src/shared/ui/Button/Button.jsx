import clsx from 'clsx'
import styles from './Button.module.css'


const Button = (props)=>{
    const {option, children, style}=props




    return (
        <button
            className = {clsx(styles.button, styles[option], style)}
        >{children}
        </button>
    )
}

export default Button