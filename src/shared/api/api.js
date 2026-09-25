import data from './db.json'
import {transportImage, programImage, coachImage} from './image'

const {programs, rates, transports, coachs, comments} = data

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

export function getCoachs(){
    return coachs.map((coach)=>({
        ...coach,
        image: coachImage[coach.image] ?? null,
    }))
}

export function getFilterRates(programId){
    return rates.filter(rate=>rate.programId===programId)
}

export function getProgramById(programId){
    return programs.find(program=>program.id===programId)
}

export function getComments(){
    return comments
}