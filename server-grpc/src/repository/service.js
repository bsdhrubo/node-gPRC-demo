import TodoModel from './model.js'


export const insertMany = async(call, callback) =>{ 
    try {
        console.log(callback);
        const data = [{task:"a"},{task:"b"},{task:"c"}]
        console.log({data});
        await TodoModel.collection.drop()
        await TodoModel.insertMany(data)
        const res = await getAll(1,callback) 
        console.log(res);
        return res
    } catch (error) {
        console.log(error);
        return false 
    }
} 

export const getAll = async(call, callback)=>{
    const {page} = call.request
    let res = await TodoModel.find({}).skip((page-1)*20).limit(20)
    res = res.map(e => {
        return {task: e.task}
    }) 
    await callback(null, {tasks: res})
}

export const insertOne = async(data, callback)=>{ 
    const res = await TodoModel.create(data)
    callback(null, res)
} 

export const deleteById = async(id, callback)=>{ 
    const res = await TodoModel.findOneAndDelete(id)
    callback(null, res)
} 
