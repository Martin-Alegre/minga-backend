import {dirname} from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export {__filename, __dirname}

//esta variable es necesaria es configurarla manualmente debido a que
//esmodule no la incluye por default.