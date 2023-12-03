import express from 'express'
import judgesControllers from '../controllers/judgesControllers.js'

const router = express.Router()

router.post('/judges/vote', judgesControllers.CreateVote)

export default router