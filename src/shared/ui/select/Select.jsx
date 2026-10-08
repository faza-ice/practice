import clsx from 'clsx'
import styles from './Select.module.css'

const Select = (props)=>{
    const {options, className, onChange, name} = props

    return(
        <select className={clsx(styles.select)} name={name}>
            {
                options.map((opt)=>{
                    return(
                        <option
                            key={opt}
                            value={opt}
                            onChange = {onChange}
                        >{opt}</option>
                    )
                })
            }
        </select>
    )
}

export default Select