import Field from '@/shared/ui/field'
import Select from '@/shared/ui/select'
import Button from '@/shared/ui/button'
import clsx from 'clsx'
import styles from './AddEntry.module.css'

const AddEntry = ()=>{
      const opt = [{value:"val", label:'lab'},{value:"val2", label:'lab2'}]
    

    return(
        <div className={clsx(styles.addEntry)}>
            <div className={styles.head}>
                <Field placeholder='ФИО'></Field>
                <Field placeholder='Номер телефона'></Field>
                <Field placeholder='Email'></Field>
                <Select options={opt}></Select>
                <Select options={opt}></Select>
            </div>
            <Button option='red' className={styles.button}>Отправить заявку
                <svg 
                    width={24}
                    height={13}
                    viewBox='8 4 8 8'
                    fill='rgba(255, 255, 255,1)'
                >
                    <path d='M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z'/>
                </svg>
            </Button>
        </div>
    )
}

export default AddEntry