import Plate from '@/shared/ui/plate'
import Title from '@/shared/ui/title'
import Text from '@/shared/ui/text'
import Transports from '@/entities/transport'
import imag1 from '@/shared/assets/images/kawasaki.png'
import imag2 from '@/shared/assets/images/granta.png'
import imag3 from '@/shared/assets/images/gaz.png'
import styles from './Autopark.module.css'

const Autopark = ()=>{

    return(
        <div className={styles.autopark}>
            <div className={styles.head}>
                <Plate>НАШ АВТОПАРК</Plate>
                <div className={styles.headCont}>
                    <Title>НОВЫЙ И ТЕХНИЧЕСКИ ИСПРАВНЫЙ ТРАНСПОРТ</Title>
                    <Text>Все машины застрахованы, регулярно проходят ТО и оснащены дублирующими педалями для вашей безопасности.</Text>
                </div>
            </div>
            <div className={styles.transports}>
                <Transports
                    images = {imag1}
                    title = "Kawasaki Ninja600"
                    year = '2026'
                    transmission = 'МКПП / АКПП'
                ></Transports>
                <Transports
                    images = {imag2}
                    title = "Lada Granta Sport"
                    year = '2026'
                    transmission = 'МКПП / АКПП'
                ></Transports>
                <Transports
                    images = {imag3}
                    title = "ГАЗон Next"
                    year = '2026'
                    transmission = 'МКПП'
                ></Transports>
            </div>
        </div>
    )
}

export default Autopark