import app  from '../app.js'  //importo la aplicacion de back configura
import debug from 'debug'
import http from 'http'  //importo el modulo para crear servidores

const logger = debug('back-48:server') //se configura el debugeador
let port = normalizePort(process.env.PORT || '8080');  //defino el puerto donde va a funcionar nuestro servidor
//defino un operador || para normalizar el puerto porque cuando hostee/deployee el servidor el hosting me va a asignar el puerto que tenga libre para mi app

app.set('port', port);  //configuro el puerto con la variable port definida anteriormente

let server = http.createServer(app);   //utilizo el modulo http para crear un servidor (con las configuracion que se realizan)

function ready() {                        //ready es una función que se va a ejecutar cuando se levante correctamente el servidor
  console.log('server ready on port '+port)           //me informa en la consola que el servidor se levantó correctamente en el puerto PORT
}

//listen se utiliza para escuchar un puerto y es el encargado de levantar efectivamente el servidor (empieza a funcionar)
server.listen(port, ready );    //primer parametro necesario el puerto donde tiene que funcionar el servidor
server.on('error', onError);
server.on('listening', onListening);

function normalizePort(val) {
  let port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  let bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

function onListening() {
  let addr = server.address();
  let bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);
}
