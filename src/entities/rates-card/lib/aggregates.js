import {MIN_PRACTICE_HOURSE} from '../model/constants'

export function getMinPrice(rates){
    if(!rates.length) return null
    return Math.min(...rates.map(r=>r.price)) 
}

export function getMinPractice(rates){
    const practice = Math.min(...rates.filter( r=> r.practice > MIN_PRACTICE_HOURSE).map(r=>r.practice)) 
    if (practice === Infinity) return null
    return practice
}