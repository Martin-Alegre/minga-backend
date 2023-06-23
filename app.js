import 'dotenv/config.js'               //configura las variables de entorno de la aplicacion
import express from 'express'         //modulo necesario para levantar y configurar un servidor
import path from 'path'               //modulo necesario para conocer la ubicacion de nuestro servidor
import logger from 'morgan'               //modulo para registrar las peticiones que se realizan al servidor(libreria)          
import cors from 'cors'                  //modulo para permitir origines cruzados (front con el back)
import { __dirname } from './utils.js'   //importo la configuracion
import indexRouter from './routes/index.js'  //enrutador principal de la aplicacion

let app = express();  //defino una variable con la ejecución del módulo de express para poder CREAR un servidor

// view engine setup
//set es un metodo QUE CONFIGURA algo
app.set('views', path.join(__dirname, 'views'));  //configuro que la carpeta donde estan las vistas generadas en el backend estan en la carpeta views
app.set('view engine', 'ejs');                    //configuro que las vistas se van a definir con el lenguaje EJS (motor de plantilla)

//MIDDLEWARE
// son funciones que se ejecutan con cada peticion y que van a PERMITIR/NO PERMITIR realizar algo 
//use es un metodo QUE OBLIGA ( en este caso) A MI APLICACION a usar algo (ejecutar una funcion)
app.use(logger('dev'));   //obliga al servidor a usar el middleware de registro de peticiones
app.use(express.json());  //obliga al servidor a traformar/manejar formato json (post/put)
app.use(express.urlencoded({ extended: false }));  //obliga al servidor a acceder a consultas complejas (permite leer queries y params de una peticion)
app.use(express.static(path.join(__dirname, 'public'))); //obliga al servidor a generar una carpeta de acceso PUBLICO al cliente(carpeta public)
app.use(cors())               //obliga al servidor a permitir el cruce de origines de front/back

//ENDPOINT
app.use('/api', indexRouter);       //obliga al servidor a usar las rutas definidas en el enrutador principal con la palabra "/api"


export default app
