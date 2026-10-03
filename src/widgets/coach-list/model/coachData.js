import {getCoachs} from '@/entities/coach'

export const coachs = getCoachs().map((coach)=>({
    ...coach,
    fullName: `${coach.surname} ${coach. name}`
}))