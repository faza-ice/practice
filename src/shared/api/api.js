import data from './db.json'
import {transportImage, programImage} from './image'

const {programs, rates, transports, coachs} = data

export function getPrograms(){
    return programs.map((program)=>({
        ...program,
        image: programImage[program.image] ?? null,
    })) 
}

export function getRates(){
    return rates
}

export function getTransports(){
    return transports.map((transport)=>({
        ...transport,
        image: transportImage[transport.image] ?? null,
    })) 
}

export function getCoach(){
    return coachs
}

export function getFilterRates(programId){
    return rates.filter(rate=>rate.programId===programId)
}
export function getProgramById(programId){
    return programs.find(program=>program.id===programId)
}