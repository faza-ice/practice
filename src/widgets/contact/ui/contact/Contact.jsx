import Title from '@/shared/ui/title'
import Text from '@/shared/ui/text'
import Plate from '@/shared/ui/plate'
import tel from '@/shared/assets/contactSvg/icon-tel.svg'
import mail from '@/shared/assets/contactSvg/icon-mail.svg'
import map from '@/shared/assets/contactSvg/icon-map.svg'
import {AddEntry} from '@/features/add-entry'
import styles from './Contact.module.css'

export const Contact = ()=>{

    return(
        <div className={styles.contact}>
            <div className={styles.head}>
                <Plate>КОНТАКТЫ</Plate>
                <Title>СВЯЖИТЕСЬ С НАМИ СЕГОДНЯ</Title>
                <Text className={styles.headText}>Наши менеджеры готовы проконсультировать вас по любым тарифам и подобрать удобную группу обучения.</Text>
            </div>
            <div className={styles.contactBlock}>
                <div className={styles.contactLine}>
                    <img src={tel} alt="" />
                    <div className={styles.contactInfo}>
                        <Title className={styles.contactTitle}>+7 (800) 555-35-35</Title>
                        <Text className={styles.contactText}>Звонок по РФ бесплатный</Text>
                    </div>
                </div>
                <div className={styles.contactLine}>
                    <img src={mail} alt="" />
                    <div className={styles.contactInfo}>
                        <Title className={styles.contactTitle}>info@autoschool.ru</Title>
                        <Text className={styles.contactText}>Для деловых предложений</Text>
                    </div>
                </div>
                <div className={styles.contactLine}>
                    <img src={map} alt="" />
                    <div className={styles.contactInfo}>
                        <Title className={styles.contactTitle}>ул. Волховстроя, д. 74</Title>
                        <Text className={styles.contactText}>Главный офис (с 10:00 до 20:00)</Text>
                    </div>
                </div>
            </div>
            <AddEntry></AddEntry>
        </div>
    )
}