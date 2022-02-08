//CRUD create read update delete

const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'MongoDB_CRUD'



// const id = new ObjectID()
// console.log(id.id.length)
// console.log(id.toHexString().length)

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database!')
    }
    const db = client.db(databaseName)

    //CREATE

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
    //         description: 'Cleaning',
    //         completed: true
    //     },
    //     {
    //         description: 'Inspection',
    //         completed: false
    //     }, {
    //         description: 'Planting',
    //         completed: false
    //     },
    // ], (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert documents!')
    //     }

    //     console.log(result.insertedCount)
    // })



    //READ



    // db.collection('user').findOne({ _id: new ObjectID("6202db425d5ccecf0ee4657d") }, (error, user) => {
    //         if (error) {
    //             return console.log('Unable to fetch')
    //         }

    //         console.log(user)
    //     })

    //     db.collection('user').find({ age: 25 }).toArray((error, users) => {
    //         console.log(users)
    //     })

    // db.collection('tasks').findOne({ _id: new ObjectID("6202db425d5ccecf0ee46580") }, (error, task) => {
    //     console.log(task)
    // })

    // db.collection('tasks').find({ completed: false }).toArray((error, tasks) => {
    //     console.log(tasks)
    // })


    // UPDATE

    // db.collection('user').updateOne({
    //     _id: new ObjectID("6202db425d5ccecf0ee4657f")
    // }, {
    //     $inc: {
    //         age: 1
    //     }
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })



    // db.collection('tasks').updateMany({
    //     completed: false
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }).then((result) => {
    //     console.log(result.modifiedCount)
    // }).catch((error) => {
    //     console.log(error)
    // })



    //DELETE

        db.collection('user').deleteMany({
        age: 23
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })

    db.collection('tasks').deleteOne({
        description: "Cleaning"
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })

})