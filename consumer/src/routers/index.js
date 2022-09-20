import { Router} from 'express' 
import { deleteById, getAll, insertMany, insertOne } from '../service/index.js' 

const router = Router()

router.get('/', (req, res)=>{
    res.send("Server Working")
})

router.get('/all', async (req, res)=>{
    const page = parseInt(req.query.page) || 1
    const response = await getAll(page)
    console.log({response});
    res.send(response)
})

router.get('/insert-many', async (req, res)=>{
    const response = await insertMany() 
    res.send(response)
})
router.post('/insert-one', async (req, res)=>{
    const response = await insertOne(req.body)
    res.send(response)
})
router.delete('/delete/:id', async (req, res)=>{
    const response = await deleteById(req.params.id)
    res.send(response)
})

export default router