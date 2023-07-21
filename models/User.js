import { Schema, model } from 'mongoose'
//cluster: conjunto de base de datos (el link de mongo que obtienen es del cluster)
//db: conjunto de colecciones (coleccion hace referencia a recurso y recurso hace referencia a los modelos de datos que necesita mi aplicacion)
//coleccion: conjunto de documentos
//colecciones: usuarios, capitulos, productos, carritos
//documento: al dato
//el array de eventos que se fetcheaba en AME me traia toda la coleccion de eventos , cada objeto de ese array era un documento de la coleccion

let collection = 'users'  //nombre de la coleccion donde se van a guardar todos los documentos
//los nombres de las colecciones van siempre en plural (porque son un conjunto de)
//tienen que ser descriptivos del recurso
//recurso category => coleccion categorias
//recurso author => coleccion authors
let schema = new Schema({        //defino el primer objeto con las propiedades necesarias para el modelo // molde de los datos 
    email: { type:String,required:true},
    password: { type:String,required:true },
    photo: { type:String,required:true },
    role: { type:Number, default:0},
    online: { type:Boolean, default:false },
    verified: { type:Boolean, default: true},
    verify_code: {type:String }
},{             //timestamps
    timestamps:true
})

let User = model(collection, schema)
export default User