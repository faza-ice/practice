import {RatesList} from '@/features/rates-list'
import Plate from '@/shared/ui/plate'
import styles from './RatesBlock.module.css'

export const RatesBlock = ()=>{
    return(
        <div className={styles.container}>
            <div className={styles.head}>
                <Plate>ЦЕНЫ И ТАРИФЫ</Plate>
                <RatesList programId={1}></RatesList>
            </div>
            <RatesList programId={2}></RatesList>
            <RatesList programId={3}></RatesList>
        </div>
    )
}