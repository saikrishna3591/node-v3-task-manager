const express = require('express')
require('./db/mongoose')
// const User = require('./models/user')
// const Task = require('./models/task')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')


const app = express()
const port = process.env.PORT || 3000

// const multer = require('multer')
// const upload = multer({
//     dest:'images',
//     limits:{
//         fileSize:1000000
//     },
//     fileFilter(req,file,cb){
//         if(!file.originalname.match(/\.(doc|docx)$/)){
//             return cb(new Error('Please upload a WORD file'))
//         }
//         cb(undefined,true)
//     }
// })

// app.post('/upload',upload.single('upload'),(req,res)=>{
//     res.send()
// },(error,req,res,next)=>{
//     res.status(400).send({error:error.message})
// })


// app.use((req,res,next)=>{
//     if(req.method === 'GET'){
//         res.send('GRT requests are disabled')
//     }else{
//         next() 
//     }
// })

// app.use((req,res,next)=>{
//     res.status(503).send('Si te is currently down. Check back soon')
// })
app.use(express.json())
app.use(userRouter)
app.use(taskRouter)


app.listen(port,()=>{
    console.log('Server is up on port ' + port)
})

const Task = require('./models/task')
const User = require('./models/user')

const main = async()=>{
    // const task = await Task.findById('64d1cd181180ad4edcf47b09')
    // await task.populate('owner').execPopulate()
    // console.log(task.owner)
    // const user = await User.findById('64d11f4472d49306fc784393')
    // await user.populate('tasks').execPopulate()
    // console.log(user.tasks)
 }
main()
// const jwt = require('jsonwebtoken')
// const bcrypt = require('bcryptjs')

// const myFunction = async () => {

//     const password = 'Red12345!'
//     const hashedPassword = await bcrypt.hash(password,8)
//     console.log(password)
//     console.log(hashedPassword)
//     const isMatch = await bcrypt.compare('red12345!',hashedPassword)
//     console.log(isMatch)

// }

// myFunction()