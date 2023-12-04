import { MongoClient, ObjectId } from "mongodb"

const client = new MongoClient('mongodb://127.0.0.1:27017')
const db = client.db('AH_2023_P1')
const VotesCollection = db.collection('votes')

async function CreateVote(data) {
    await client.connect()
    
    const voteData = {
        _id: new ObjectId(),
        ...data
    }
    
    return VotesCollection.insertOne(voteData)
}

export default {
    CreateVote
}