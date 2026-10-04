import data from '@/shared/config/db.json'
import {transportImage} from '@/shared/api/image'

const {transports} = data

export function getTransports(){
    return transports.map((transport)=>({
        ...transport,
        image: transportImage[transport.image] ?? null,
    })) 
}