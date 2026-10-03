import {Program, getPrograms} from '@/entities/program'
import {getRates} from '@/entities/rates-card'
import { getProgramsData } from '../../model/programData'
import styles from './ProgramList.module.css'

export const ProgramList = ()=>{
    const programsData = getProgramsData(getPrograms(), getRates())

    return(
        <div className={styles.programList}>
            {
                
                programsData.map((program)=>{
                    console.log(program.practice)
                    return (
                        <Program 
                            image = {program.image}
                            description = {program.description}
                            price = { program.price?.toLocaleString('ru-RU',{style:'currency', currency:'RUB', maximumFractionDigits: 0})}
                            time = {program.time}
                            theory = {program.theory}
                            practice = {program.practice}
                            symbol = {program.symbol}
                            name = {program.name}
                        ></Program>
                    )
                })
            }
        </div>
    )
}
