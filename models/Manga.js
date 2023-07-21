import { Schema,model,Types } from "mongoose"

let collection = 'mangas'
let schema = new Schema({
    author_id: { type:Types.ObjectId,ref: 'authors',required:true },
    company_id: { type: String},
    title: { type: String},
    cover_photo: { type:String,required:true },
    description: { type:String},
    category_id: { type:Types.ObjectId,ref: 'categories',required:true }
},{
    timestamps:true
})

const Manga = model(collection,schema)
export default Manga