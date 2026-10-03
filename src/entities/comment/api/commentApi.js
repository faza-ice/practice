import data from '@/shared/config/db.json'

const {comments} = data

export function getComments(){
    return comments
}