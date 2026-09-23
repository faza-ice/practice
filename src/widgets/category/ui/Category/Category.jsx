import Title from '@/shared/ui/Title'
import Rates from '@/entities/rates'
import {getFilterRates, getProgramById} from '@/shared/api'
import styles from './Category.module.css'

const Category = (props)=>{
    const rates = getFilterRates(1);
    const title = getProgramById(1).name;

    return(
        <div className={styles.category}>
            <Title>{title}</Title>
            <div className={styles.rates}>
                {rates.map((rate)=>{
                    return (
                    <Rates 
                        option={rate.isHit ? 'red': 'grey'} 
                        them={rate.them} 
                        name={rate.name} 
                        price={rate.price.toLocaleString('ru-RU',{style:'currency', currency:'RUB', maximumFractionDigits: 0})} 
                        isHit={rate.isHit}
                    ></Rates>
                    )
                })}
            </div>
        </div>
    )
}

export default Category