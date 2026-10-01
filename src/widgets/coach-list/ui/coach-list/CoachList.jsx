import {Coach, getCoachs} from '@/entities/coach'
import styles from './CoachList.module.css'

export const CoachList = ()=>{
    const coachs = getCoachs()

    return(
        <div className={styles.coachList}>
            {
                coachs.map((coach)=>{
                    return (
                        <Coach
                            image = {coach.image}
                            name = {`${coach.surname} ${coach. name}`}
                            exp = {coach.experience}
                            description = {coach.description}
                        ></Coach>
                    )
                })
            }
        </div>
    )
}