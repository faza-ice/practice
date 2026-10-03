import {getComments} from '@/entities/comment'
import {getProgramById} from '@/entities/program'

export const comments = getComments().map((comment)=>({
    ...comment,
    symbol: getProgramById(comment.programId).symbol
}))