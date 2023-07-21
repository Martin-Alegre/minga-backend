import { Schema,model,Types } from "mongoose"

let collection = 'authors'
let schema = new Schema({
    name: { type:String,required:true },
    last_name: { type:String },
    city: { type:String },
    date: { type:Date },
    photo: { type:String,required:true },
    user_id: {
        type:Types.ObjectId,       //
        ref:'users' ,              //
        required:true
    },
    active: { type:Boolean,default:false }       //default es un parametro que hace que:si el usuario envia un dato, lo usa y en caso contrario 
},{
    timestamps:true
})

const Author =model(collection,schema)
export default Author 