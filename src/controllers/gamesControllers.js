import gamesServices from "../services/gamesServices.js"

function GetAllGames(req, res) {
    gamesServices.GetAllGames(req.query)
        .then(games => {
            res.status(200).json(games)
        })
        .catch(error => {
            res.status(500).json({ msg: error.msg })
        })
}

function GetGameById(req, res) { 
    const { idGame } = req.params

    gamesServices.GetGameById(idGame)
        .then(game => {
            res.status(200).json(game)
        })
        .catch(error => {
            res.status(500).json({ msg: error.msg })
        })
}

function CreateGame(req, res) {
    const gameData = {
        name: req.body.name,
        genre: req.body.genre,
        members: req.body.members,
        edition: req.body.edition,
        total_points: 0
    }
    
    gamesServices.CreateGame(gameData)
        .then(game => {
            res.status(200).json(game)
        })
        .catch(error => {
            res.status(500).json({ msg: error.msg })
        })
}

function EditGame(req, res) {
    const { idGame } = req.params

    gamesServices.EditGame(idGame, req.body)
        .then(game => {
            res.status(200).json(game)
        })
        .catch(error => {
            res.status(500).json({ msg: error.msg })
        })
}

function GetGameByEdition(req, res) {
    const { edition } = req.params

    gamesServices.GetGameByEdition(edition)
        .then(sortEdition => {
            res.status(200).json(sortEdition)
        })
        .catch(error => {
            res.status(500).json({ msg: error.msg })
        })
}

export default {
    GetAllGames,
    GetGameById,
    CreateGame,
    EditGame,
    GetGameByEdition
}