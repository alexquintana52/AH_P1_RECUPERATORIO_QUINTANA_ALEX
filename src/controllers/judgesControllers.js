import judgesServices from "../services/judgesServices.js"
import gamesServices from "../services/gamesServices.js"
import votesServices from "../services/votesServices.js"

async function CreateVote(req, res) {

    const judgeId = await judgesServices.GetJudgeById(req.body.judge_id)
    const gameId = await gamesServices.GetGameById(req.body.game_id)

    const vote = {
        judge: {
            "judge_id": req.body.judge_id,
            "judge_name": judgeId.name,
        },
        game: {
            "game_id": req.body.game_id,
            "game_name": gameId.name,
        },
        points: {
            "gameplay": req.body.gameplay,
            "art": req.body.art,
            "sound": req.body.sound,
            "theme": req.body.theme
        }
    }

    votesServices.CreateVote(vote)
        .then(voted => {
            const total_points = req.body.gameplay + req.body.art + req.body.sound + req.body.theme 
            const idGame = req.body.game_id
            gamesServices.UpdatePoints(idGame, total_points)
            res.status(200).json(voted)
        })
        .catch(error => {
            res.status(500).json({ msg: error.msg })
        })
}


export default {
    CreateVote
}