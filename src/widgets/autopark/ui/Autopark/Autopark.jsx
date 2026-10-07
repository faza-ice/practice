import Plate from '@/shared/ui/plate'
import Title from '@/shared/ui/title'
import Text from '@/shared/ui/text'
import {Transports} from '@/entities/transport'
import { transportData } from '../../model/autoparkData'
import styles from './Autopark.module.css'

export const Autopark = ()=>{

    return(
        <div className={styles.autopark}>
            <div className={styles.head}>
                <Plate>НАШ АВТОПАРК</Plate>
                <div className={styles.headCont}>
                    <Title className={styles.title}>НОВЫЙ И ТЕХНИЧЕСКИ ИСПРАВНЫЙ ТРАНСПОРТ</Title>
                    <Text>Все машины застрахованы, регулярно проходят ТО и оснащены дублирующими педалями для вашей безопасности.</Text>
                </div>
            </div>
            <div className={styles.transports}>
                {
                    transportData.map((transport)=>{
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
