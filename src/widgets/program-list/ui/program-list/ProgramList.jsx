import Program from '@/entities/program'
import { getFilterRates, getPrograms } from '@/shared/api'
import styles from './ProgramList.module.css'

const ProgramList = ()=>{
    const programs = getPrograms();

    function getMinPrice(programId){
        const rates = getFilterRates(programId);
        return Math.min(...rates.map(r=>r.price)) 
    }
    function getMinPractice(programId){
        const rates = getFilterRates(programId);
        return Math.min(...rates.filter( r=> r.practice > 0).map(r=>r.practice)) 
    }

    return(
        <div className={styles.programList}>
            {
                programs.map((program)=>{
                    return (
                        <Program 
                            image = {program.image}
                            description = {program.description}
                            price = { getMinPrice(program.id).toLocaleString('ru-RU',{style:'currency', currency:'RUB', maximumFractionDigits: 0})}
                            time = {program.time}
                            theory = {program.theory}
                            practice = {getMinPractice(program.id)}
                            symbol = {program.symbol}
                            name = {program.name}
                        ></Program>
                    )
                })
            }
        </div>
    )
}
export default ProgramList