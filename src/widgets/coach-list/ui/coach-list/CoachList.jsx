import Coach from '@/entities/coach'
import {getCoachs} from '@/shared/api'
import styles from './CoachList.module.css'

const CoachList = ()=>{
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

export default CoachList