// Importaciones de librerias
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path')
// const dotenv = r
require("dotenv").config();

// Importaciones de archivos
// conexion a la base de datos
const connectDB = require('./connection')
connectDB()
// Se inicializa la librería
const app = express();
// dotenv.config()
// Configuraciones
const port = process.env.PORT || 3000;

// middlewares

app.use(cors());
app.use(morgan('combined'));
app.use(express.json());
// Recursos estáticos
// const myPath = __dirname;
// const myPath2 = path.join(__dirname, './public');
// console.table({myPath, myPath2})

app.use(express.static(path.join(__dirname,'public')));
// Rutas
app.use(require('./routes/users.routes'))
// Iniciar servidor
app.listen(port, console.log(`Servidor iniciado en el puerto ${port} \nhttp://localhost:${port}`))

//console.log(process)
//express / nodemon / dotenv / morgan / cors
// mongoose
/* 
    npm i express dotenv morgan cors mongoose --save
    npm i nodemon -D


    "dependencies": {
    "cors": "^2.8.5",
    "dotenv": "^16.0.2",
    "express": "^4.18.1",
    "mongoose": "^6.6.0",
    "morgan": "^1.10.0"
    },
    "devDependencies": {
        "nodemon": "^2.0.19"
    }
*/
// cors sirve para algo relacionado a la seguridad
// mongoose es un odn para interactuar con mongodb

/* let limpiarConsola = false;
(limpiarConsola)?console.clear():"" */