import bodyParser from 'body-parser'
import express from 'express'
import router from './src/routers/index.js'

const app = express()
app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(router)

const port=3000

app.listen(port, ()=> console.log(`http://localhost:${port}`))