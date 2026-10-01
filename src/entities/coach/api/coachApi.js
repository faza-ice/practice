import data from '@/shared/config/db.json'
import {coachImage} from '@/shared/api/image'

const {coachs} = data

export function getCoachs(){
    return coachs.map((coach)=>({
    ...coach,
    image: coachImage[coach.image] ?? null,
}))
}

export function getCoachById(id){
    return coachs.find((coach)=>coach.id===id)
}