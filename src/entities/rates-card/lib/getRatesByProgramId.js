export function getRatesByProgramId(rates, programId){
    return rates.filter(rate=>rate.programId===programId)
}