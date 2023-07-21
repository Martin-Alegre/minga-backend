import { Schema,model,Types } from "mongoose"

let collection = 'categories'
let schema = new Schema({
    name: { type:String,required:true },
    color: {type:String },
    hover: { type:String},
    description: { type:String},
    cover_photo: { type:String,required:true },
    character_photo: { type:String},
    admin_id: { type:Types.ObjectId,ref: 'users',required:true}
},{
    timestamps:true
})

const Category = model(collection,schema)
export default Category