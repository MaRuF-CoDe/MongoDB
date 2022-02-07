//CRUD create read update delete

const { MongoClient,ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

const id = new ObjectID()
console.log(id.id.length)
console.log(id.toHexString().length)

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database!')
    }
    const db = client.db(databaseName)

    // db.collection('user').insertOne({
    //     name : 'Maruf',
    //     age : 25
    // })
    // db.collection('user').insertMany([
    //     {
    //         name: 'Tahmid',
    //         age: 35,
    //         occupation: 'Student'
    //     },
    //     {
    //         name: 'Bijon',
    //         age: 23,
    //         Hobby: 'Doing Everything'
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert documents!')
    //     }

    //     console.log(result.insertedCount)
    // })

    // db.collection('tasks').insertMany([
    //     {
    //         descriptio: 'Cleaning',
    //         completed: true
    //     },
    //     {
    //         descriptio: 'Inspection',
    //         completed: false
    //     }, {
    //         descriptio: 'Planting',
    //         completed: false
    //     },
    // ], (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert documents!')
    //     }

    //     console.log(result.insertedCount)
    // })

})