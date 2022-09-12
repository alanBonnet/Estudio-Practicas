const mongoose = require('mongoose');

const connectDB = async () =>{

    try {
        mongoose.connect( process.env.MONGODB_URI, { useNewUrlParser: true,  })
        console.log("Conectado a la base de datos")
    } catch (error) {
        console.log(`Error la base de datos está enojada porque : ${error.message}`)
    }
}

module.exports = connectDB;