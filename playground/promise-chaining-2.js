require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('64cccc5fe9b98d33b4099246').then((task)=>{
//     console.log(task)
//     return Task.countDocuments({complete:false})
// }).then((result)=>{
//     console.log(result)
// }).catch((error)=>{
//     console.log(error)
// })

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    const complete = await Task.countDocuments({complete:false})
    return complete
}

deleteTaskAndCount('64cccdcc3e39fe3558f2dca6').then((count)=>{
    console.log(count)
}).catch((error)=>{
    console.log(error)
})