import {client} from '../../grpc-client.js'

const callback = async (err, res)=>{
    console.log(err, res)
    if(!err)
        return res
    else
        console.log(err);
}

export const insertMany = async()=>{ 
    try {
        
        const res = await client.insertMany({}, callback)
        return res
    } catch (error) {
        console.log(error);
        return false 
    }
} 

export const getAll = async(page=1)=>{  
    await client.getAll({page}, callback)
    // if(!err)
    //     console.log(res);
    //     return res
}

export const insertOne = async(data)=>{
    const res = client.insertOne(data, callback)
    return res
} 

export const deleteById = async(id)=>{ 
    const res = client.deleteById(id, callback)
    return res
} 