import {Coach} from '@/entities/coach'
import {coachs} from '../../model/coachData'
import Plate from '@/shared/ui/plate'
import Title from '@/shared/ui/title'
import styles from './CoachList.module.css'

export const CoachList = ()=>{

    return(
        <div className={styles.container}>
            <div className={styles.head}>
                <Plate>КОМАНДА ПРОФЕССИОНАЛОВ</Plate>
                <Title>ОПЫТНЫЕ И ТЕРПЕЛИВЫЕ ИНСТРУКТОРЫ</Title>
            </div>
            <div className={styles.coachList}>
            {
                coachs.map((coach)=>{
                    return (
                        <Coach
                            image = {coach.image}
                            name = {coach.fullName}
                            exp = {coach.experience}
                            description = {coach.description}
                        ></Coach>
                    )
                })
            }
        </div>
        </div>
        
    )
}