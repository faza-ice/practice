import Title from '@/shared/ui/title'
import {Rates} from '@/entities/rates-card'
import {getRatesData} from '../../model/ratesData'
import styles from './RatesList.module.css'

export const RatesList = (props)=>{
    const {programId} = props
    const rates = getRatesData(programId)
    const symbol = 'A'

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
                        description={rate.description}
                    ></Rates>
                    )
                })}
            </div>
        </div>
    )
}