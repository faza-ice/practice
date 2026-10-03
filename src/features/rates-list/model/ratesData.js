import {getRates, getRatesByProgramId} from '@/entities/rates-card'
import {getProgramById} from '@/entities/program'

export function getRatesData(programId){
    const rates = getRatesByProgramId(getRates(), programId)
    return rates.map((rate)=>({
        ...rate,
        symbol: getProgramById(programId).symbol
    }))
}

