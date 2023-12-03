import { MongoClient, ObjectId } from "mongodb"

const client = new MongoClient('mongodb://127.0.0.1:27017')
const db = client.db('AH_2023_P1')
const GamesCollection = db.collection('games')

function filterQueryToMongo(filter) {
    const filterMongo = {}

    for (const filed in filter) {
        if (isNaN(filter[filed])) {
            filterMongo[filed] = filter[filed]
        } else {

            const [field, op] = filed.split('_')

            if (!op) {
                filterMongo[filed] = parseInt(filter[filed])
            } else {
                if (op === 'min') {
                    filterMongo[field] = {
                        $gte: parseInt(filter[filed])
                    }
                } else if (op === 'max') {
                    filterMongo[field] = {
                        $lte: parseInt(filter[filed])
                    }
                }
            }
        }
    }

    return filterMongo
}

async function GetAllGames(filter = {}) {
    await client.connect()
    const filterMongo = filterQueryToMongo(filter)
    return GamesCollection.find(filterMongo).toArray()
}

async function GetGameById(id) {
    await client.connect()
    return GamesCollection.findOne({ _id: new ObjectId(id) })
}

async function CreateGame(gameData) {
    await client.connect()
    const newGame = {
        ...gameData
    }
    return GamesCollection.insertOne(newGame)
}

async function EditGame(id, gameData) {
    await client.connect()
    return await GamesCollection.updateOne({ _id: new ObjectId(id)}, { $set: { ...gameData } })
}

async function GetGameByEdition(edition) {
    const filterEdition = { "edition": parseInt(edition) }
    await client.connect()
    return GamesCollection.find(filterEdition).sort({ "total_points": -1 }).toArray()
}

async function UpdatePoints(idGame, total_points) {
    let gameData = await GetGameById(idGame)
    gameData.total_points += total_points
    EditGame(idGame, gameData)
}

export default {
    GetAllGames,
    GetGameById,
    CreateGame,
    EditGame,
    GetGameByEdition,
    UpdatePoints
}