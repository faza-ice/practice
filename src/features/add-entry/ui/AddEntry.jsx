import Field from '@/shared/ui/field'
import Select from '@/shared/ui/select'
import Button from '@/shared/ui/button'
import clsx from 'clsx'
import { useAddRecord } from '../model/useAddRecord';
import { useState } from 'react';
import {getDate} from '../api/addEntryApi'
import styles from './AddEntry.module.css'

export const AddEntry= ({ onAdded })=>{
    const [values, setValues] = useState({ name: '', tel: '', email: ''});
    const { submit, isSaving, error } = useAddRecord();

    const handleChange = (e) => {
        console.log('name:', e.target.name, 'value:', e.target.value, 'tag:', e.target.tagName);
        setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(values)
        const record = await submit(values);
        setValues({ name: '', tel: '', email: ''});
        onAdded?.(record);
    };
    const opt = getDate()

    return(
        <form className={clsx(styles.addEntry)} onSubmit={handleSubmit}>
            
            <div className={styles.head}>
                <Field placeholder='ФИО' onChange={handleChange} name="name"></Field>
                <Field placeholder='Номер телефона' onChange={handleChange} name="tel"></Field>
                <Field placeholder='Email' onChange={handleChange} mask="/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/" name="email"></Field>

            </div>
            <Button option='red' className={styles.button} disabled={isSaving}>Отправить заявку
                <svg 
                    width={24}
                    height={13}
                    viewBox='8 4 8 8'
                    fill='rgba(255, 255, 255,1)'
                >
                    <path d='M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z'/>
                </svg>
            </Button>
        </form>
    )
}