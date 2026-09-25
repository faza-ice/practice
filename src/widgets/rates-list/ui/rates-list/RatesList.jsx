import Title from '@/shared/ui/title'
import Rates from '@/entities/rates-card'
import {getFilterRates, getProgramById} from '@/shared/api'
import styles from './RatesList.module.css'

const RatesList = (props)=>{
    const {programId} = props
    const rates = getFilterRates(programId);
    const symbol = getProgramById(programId).symbol;

    return(
        <div className={styles.category}>
            <Title>Категория {symbol}</Title>
            <div className={styles.rates}>
                {rates.map((rate)=>{
                    return (
                    <Rates 
                        option={rate.isHit ? 'red': 'grey'} 
                        them={rate.them.toUpperCase()} 
                        name={rate.name.toUpperCase()} 
                        price={rate.price.toLocaleString('ru-RU',{style:'currency', currency:'RUB', maximumFractionDigits: 0})} 
                        isHit={rate.isHit}
                    ></Rates>
                    )
                })}
            </div>
        </div>
    )
}

export default RatesList