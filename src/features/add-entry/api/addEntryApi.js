import {getPrograms} from '@/entities/program'
import {getRates, getRatesByProgramId} from '@/entities/rates-card'

export function getDate(){
    return {
        rates: getRatesByProgramId(getRates(),1).map((r)=>r.name),
        programs: getPrograms().map((p)=>p.name)
    }
}