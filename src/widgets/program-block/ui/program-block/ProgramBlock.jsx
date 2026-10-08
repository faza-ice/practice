import Plate from '@/shared/ui/plate'
import Title from '@/shared/ui/title'
import {ProgramList} from '@/features/program-list'
import styles from './ProgramBlock.module.css'

export const ProgramBlock = ()=>{

    return(
        <div className={styles.container}>
            <div className={styles.head}>
                <Plate>КАТЕГОРИИ ОБУЧЕНИЯ</Plate>
                <Title className={styles.title}>ПРОГРАММЫ ПОД ЛЮБЫЕ ЦЕЛИ</Title>
            </div>
            <ProgramList></ProgramList>
        </div>
    )
}