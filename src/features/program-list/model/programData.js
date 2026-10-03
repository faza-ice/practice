import {getRatesByProgramId} from '@/entities/rates-card'
import {getMinPrice, getMinPractice} from '@/entities/rates-card'

export function getProgramsData(programs, rates){
    return (programs.map((program)=>{
        const programRates = getRatesByProgramId(rates, program.id)
        return ({
            ...program,
            price: getMinPrice(programRates),
            practice: getMinPractice(programRates)
        })
    }))
}