import Plate from '@/shared/ui/plate'
import Title from '@/shared/ui/title'
import Text from '@/shared/ui/text'
import Transports from '@/entities/transport'
import { getTransports } from '@/shared/api'
import styles from './Autopark.module.css'

const Autopark = ()=>{
    const transports = getTransports()

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
                {
                    transports.map((transport)=>{
                        return(
                            <Transports
                                images = {transport.image}
                                title = {`${transport.mark} ${transport.model}`}
                                year = {transport.year}
                                transmission = {transport.kpp}
                            ></Transports>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Autopark