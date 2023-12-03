import express from 'express'
import gamesControllers from '../controllers/gamesControllers.js'

const router = express.Router()

router.post('/games', gamesControllers.CreateGame)

router.put('/games/:idGame', gamesControllers.EditGame)

router.get('/games', gamesControllers.GetAllGames)

router.get('/games/:idGame', gamesControllers.GetGameById)

router.get('/games/edition/:edition', gamesControllers.GetGameByEdition)


export default router