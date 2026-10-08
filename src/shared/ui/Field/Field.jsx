import styles from './Field.module.css'

const Field = (props)=>{
    const {placeholder, value, onChange, name} = props



    return(
        <input type="text" className={styles.field} placeholder={placeholder} value={value} onChange={onChange} name={name}/>
    )
}

export default Field