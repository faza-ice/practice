import Title from '@/shared/ui/Title'
import Rates from '@/entities/rates'
import styles from './Category.module.css'

const Category = (props)=>{
    const rate = [
        {id:1, them:'БЫСТРЫЙ СТАРТ', name:'ТЕОРИЯ ОНЛАЙН', price:'12 900 ₽', isHit:false},
        {id:2, them:'РЕКОМЕНДУЕМ', name:'СТАНДАРТ', price:'36 500 ₽', isHit:true},
        {id:3, them:'МАКСИМУМ ВОЖДЕНИЯ', name:'ПРАКТИКУМ ПЛЮС', price:'71 900 ₽', isHit:false},
    ]

    return(
        <div className={styles.category}>
            <Title></Title>
            <div className={styles.rates}>
                {rate.map((rate)=>{
                    (<Rates option={rate.isHit ? 'red': 'grey'} them={rate.them} name={rate.name} price={rate.price} isHit={rate.isHit}></Rates>)
                })}
                
            </div>
        </div>
    )
}

export default Category