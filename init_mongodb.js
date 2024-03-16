const mongoose =require('mongoose')

mongoose .connect('mongodb://localhost:27017/fruits', { useNewUrlParser: true, useUnifiedTopology: true })

.then(()=>{
    console.log('mongo db connected')
})

.catch((err)=> console.log(err.message))

mongoose.connection.on('connected',()=>{
    console.log("mongoose connected to db")
})

mongoose.connection.on('error',(err)=>{
    console.log(err.message)
})

mongoose.connection.on('disconnected',()=>{
    console.log("mongoose disconnected ")
})

process.on('SIGINT' ,async()=>{
    await mongoose.connection.close()
    process.exit(0)
})