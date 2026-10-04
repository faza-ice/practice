import {RatesList} from '@/features/rates-list'
import Plate from '@/shared/ui/plate'
import Title from '@/shared/ui/title'
import styles from './RatesBlock.module.css'

export const RatesBlock = ()=>{
    return(
        <div className={styles.container}>
            <div className={styles.list}>
                <div className={styles.head}>
                    <Plate>ЦЕНЫ И ТАРИФЫ</Plate>
                    <Title>Категория A</Title>
                </div>
                <RatesList programId={1}></RatesList>
            </div>
            <div className={styles.list}>
                <Title>Категория B</Title>
                <RatesList programId={2}></RatesList>
            </div>
            <div className={styles.list}>
                <Title>Категория C</Title>
                <RatesList programId={3}></RatesList>
            </div>
        </div>
    )
}