import { MongoClient, ObjectId } from "mongodb"

const client = new MongoClient('mongodb://127.0.0.1:27017')
const db = client.db('AH_2023_P1')
const VotesCollection = db.collection('votes')

async function GetIdJudgeVote(id) {
    await client.connect()
    return VotesCollection.find({ "judge_id": id }).toArray
}

async function GetIdGameVote(id) {
    await client.connect()
    return VotesCollection.find({ "game_id": id }).toArray
}

async function SaveVote(data) {
    await client.connect()
    
    const voteData = {
        _id: new ObjectId(),
        ...data
    }
    
    return VotesCollection.insertOne(voteData)
}

export default {
    GetIdJudgeVote,
    GetIdGameVote,
    SaveVote
}