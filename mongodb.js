//CRUD create read update delete

const { MongoClient,ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'


// const id = new ObjectID()
// console.log(id.id.length)
// console.log(id.toHexString().length)

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database!')
    }
    const db = client.db(databaseName)

    //create

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



//Read



// db.collection('user').findOne({ _id: new ObjectID("62018e5ebc942c70534a2720") }, (error, user) => {
//         if (error) {
//             return console.log('Unable to fetch')
//         }

//         console.log(user)
//     })

//     db.collection('user').find({ age: 25 }).toArray((error, users) => {
//         console.log(users)
//     })

    db.collection('tasks').findOne({ _id: new ObjectID("6201933b7c3452e7cab21778") }, (error, task) => {
        console.log(task)
    })

    db.collection('tasks').find({ completed: false }).toArray((error, tasks) => {
        console.log(tasks)
    })
})