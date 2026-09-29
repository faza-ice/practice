import clsx from 'clsx'
import styles from './Select.module.css'

const Select = (props)=>{
    const {options, className} = props

    return(
        <select className={clsx(styles.select)}>
            {
                options.map((opt)=>{
                    return(
                        <option
                            key={opt.value}
                            value={opt.value}
                        >{opt.label}</option>
                    )
                })
            }
        </select>
    )
}

export default Select