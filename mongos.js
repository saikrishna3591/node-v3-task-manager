// const mongodb= require('mongodb')
// const MongoClient = mongodb.MongoClient
const {MongoClient,ObjectID} = require('mongodb')

const connectionURL = 'mongodb://localhost:27017/'
const databaseName = 'task-manager'

const id = new ObjectID()

MongoClient.connect(connectionURL, { useNewUrlParser:true,useUnifiedTopology: true }, (error,client) => {
    if(error){
        return console.log('unable to connect database')
    }
    const db=client.db(databaseName)
    const collection = db.collection('users')
    // collection.insertMany([{
    //     name:'Sai',
    //     age:27
    //      },{
    //     name:'krishna',
    //     city:'Hyd'
    //     }
    //     ],(error,result)=>{
    //         if(error){
    //             return console.log('unable to insert documents')
    //         }
    //         console.log(result.ops)
            
    //     })
    // collection.findOne({_id:id("125634")},(error,tasks)=>{
    //     console.log(tasks)
    // })
    // collection.find({completed:false}).toArray((error,tasks)=>{
    //     console.log(tasks)
    // })
    // collection.updateOne({_id:id('5656')},{
    //     // $set:{
    //     //     name:'mike'
    //     // }
    //     $inc:{
    //         age:1
    //     }
    // }).then((result)=>{
    //     console.log(result)
    // }).catch((error)=>{
    //     console.log(error)
    // })
    // collection.updateMany({completed:false},{
    //     $set:{
    //         completed:true
    //     }
    // }).then((result)=>{
    //     console.log(result.modifiedCount)
    // }).catch((error)=>{
    //     console.log(error)
    // })
    // collection.deleteMany({
    //     age:27
    // }).then((result)=>{
    //     console.log(result)
    // }).catch((error)=>{
    //     console.log(error)
    // })
    collection.deleteOne({
         description:"clean the house"
        }).then((result)=>{
            console.log(result)
        }).catch((error)=>{
            console.log(error)
        })
})
