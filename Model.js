const mongoose=require('mongoose')
const Schema = mongoose.Schema

const FruitSchema = new Schema({
    id:{type:Number,required:
    true},
    fruit: { type: String, required: true },
    })

const User = mongoose.model('fruit',FruitSchema)
module.exports=User