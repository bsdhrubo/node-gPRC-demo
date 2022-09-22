import TodoModel from './model.js'


export const insertMany = async ({request}, callback) =>{ 
    try { 
        const data = [{task:"a"},{task:"b"},{task:"c"}]
        
        await TodoModel.collection.drop()
        let res = await TodoModel.insertMany(data) 
        callback(null, {tasks: res})
    } catch (error) { 
        callback(null, {tasks: error})
    }
} 

export const getAll = async({request}, callback)=>{ 
    let res = await TodoModel.find({})
    await callback(null, {tasks: res})
}

export const insertOne = async({request}, callback)=>{  
    const data = request
    if(data){
        const res = await TodoModel.create(data)
        callback(null, res)
    }else{
        callback(null, null)
    }
    
} 

export const deleteById = async({request}, callback)=>{ 
    const id = request
    if(id){
        const res = await TodoModel.findOneAndDelete(id)
        callback(null, res)
    }else{
        callback(null, null)
    }
} 
