import styles from './Button.module.css'
import clsx from 'clsx'


const Button = (props)=>{
    const {option}=props




    return (
        <button
            className = {clsx(styles.button, styles[option])}
        >
        </button>
    )
}

export default Button