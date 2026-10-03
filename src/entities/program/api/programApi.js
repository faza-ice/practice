import data from '@/shared/config/db.json'
import {programImage} from '@/shared/api/image'

const {programs} = data

export function getPrograms(){
    return programs.map((program)=>({
        ...program,
        image: programImage[program.image]
    }))
}

export function getProgramById(programId){
    return programs.find(program=>program.id===programId)
}