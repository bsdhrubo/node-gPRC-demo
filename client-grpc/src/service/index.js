import {client} from '../../grpc-client.js'
import {promisify} from 'util'

const usePromise=async(method, args)=>{
    const req =  promisify(method).bind(client)
    return await req(args)
}

export const insertMany = async()=>{ 
    return await usePromise(client.insertMany)
} 

export const getAll = async()=>{   
    return await usePromise(client.getAll)
}

export const insertOne = async(data)=>{
    return await usePromise(client.insertOne, data)
} 

export const deleteById = async(id)=>{ 
    return await usePromise(client.deleteById, id)
}