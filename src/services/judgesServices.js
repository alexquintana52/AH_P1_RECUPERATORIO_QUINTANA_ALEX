import { MongoClient, ObjectId } from "mongodb"
import votesServices from './votesServices.js'

const client = new MongoClient('mongodb://127.0.0.1:27017')
const db = client.db('AH_2023_P1')
const JudgesCollection = db.collection('judges')

async function GetJudgeById(id) {
    await client.connect()
    return JudgesCollection.findOne({ _id: new ObjectId(id) })
}

async function CreateJudgeVote(voteData) {
    return votesServices.SaveVote(voteData)
}

export default {
    GetJudgeById,
    CreateJudgeVote
}