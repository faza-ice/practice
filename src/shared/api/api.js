import data from './db.json'

const {programs, rates, transport, coach} = data

export function getPrograms(){
    return programs
}

export function getRates(){
    return rates
}

export function getTransports(){
    return transport
}

export function getCoach(){
    return coach
}

export function getFilterRates(programId){
    return rates.filter(rate=>rate.programId===programId)
}
export function getProgramById(programId){
    return programs.find(program=>program.id===programId)
}