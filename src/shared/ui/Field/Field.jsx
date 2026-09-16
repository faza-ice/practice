import styles from './Field.module.css'

const Field = (props)=>{
    const {placeholder, value} = props



    return(
        <input type="text" className={styles.field} placeholder={placeholder} value={value}/>
    )
}

export default Field