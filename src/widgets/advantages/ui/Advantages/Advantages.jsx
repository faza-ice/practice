import Item from '../Item'
import Plate from '@/shared/ui/Plate'
import Title from '@/shared/ui/Title'
import Text from '@/shared/ui/Text'
import imag from '@/shared/assets/images/share.png'
import svg1 from '@/shared/assets/homeSvg/clock.svg'
import svg2 from '@/shared/assets/homeSvg/card.svg'
import svg3 from '@/shared/assets/homeSvg/VR.svg'
import styles from './Advantages.module.css'

const Advantages = ()=>{


    return(
        <div className={styles.advantages}>
            <div className={styles.head}>
                <Plate>ПРЕИМУЩЕСТВА</Plate>
                <div className={styles.headCont}>
                    <Title>ПОЧЕМУ КУРСАНТЫ ВЫБИРАЮТ НАС?</Title>
                    <Text>Мы создали идеальную экосистему обучения, где каждый этап продуман до мелочей для вашего комфорта и гарантированного результата.</Text>
                </div>
            </div>
            <div className={styles.container}>
                <Item
                    imag={svg1}
                    title='Гибкий график занятий'
                    text='Выбирайте удобное время для вождения с 7:00 до 22:00. Теорию можно проходить онлайн через приложение в любое время суток.'
                ></Item>
                <Item 
                    imag={svg2}
                    title='Оплата картой любого банка'
                    text='Оплачивайте обучение комфортно. Без справок о доходах и скрытых комиссий банка.'
                ></Item>
                <div className={styles.itemActive}>
                    <div className={styles.itemActiveCont}>
                        <Title className={styles.itemActiveTitle}>Сдаем экзамены в ГИБДД вместе с вами</Title>
                        <Text className={styles.itemActiveText}>Мы берем на себя всю бюрократию: готовим документы, организуем экзамен на автомобилях автошколы и сопровождаем вас на каждом этапе. Поддержка до получения прав!</Text>
                    </div>
                    <img src={imag} alt="" className={styles.itemActiveImg}/>
                </div>
                <Item 
                    imag={svg3}
                    title='Умный симуляторы VR'
                    text='Отрабатывайте сложные аварийные дорожные сценарии на VR-тренажерах перед выездом в плотный городской поток.'
                ></Item>
            </div>
        </div>
    )
}

export default Advantages