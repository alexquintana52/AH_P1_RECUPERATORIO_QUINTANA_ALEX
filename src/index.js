import express from 'express'
import cors from 'cors'
import gamesRoutes from './routes/gamesRoutes.js'
import judgesRoutes from './routes/judgesRoutes.js'

const app = express()
app.use(cors())
app.use(express.json())

app.use(gamesRoutes)
app.use(judgesRoutes)

app.listen(5000, () => {
    console.log('El servidor está conectado 🔥: http://localhost:5000')
})