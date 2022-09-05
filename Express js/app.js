const EXPRESS = require("express");

const app = EXPRESS();
//Para que el sv comprenda archivos json
app.use(EXPRESS.json())
let acumulador = 0;
/* res contiene la información de la petición
   req contiene la información de la respuesta*/
app.get('/', (req, res) =>{
    
    res.send({
        message: "Holita mai beibi",
        estatus: 200,
        pulfitos:[{
            0: "Puflitos Caseros",
            1: "Puflitos Estatales",
            2: "Puflitos Nacionales",
            3: "Puflitos Galacticos"
        }]
    })
    acumulador++

    console.log(`Se hizo ${acumulador} peticiones get en /`)
});

app.use(require("./routes/home.routes"))//importo las rutas de /home

// PUT
app.put('/put', (req, res) => {
    res.send({
        message: "Este método es Put"
    })
})
app.get('/put', (req, res) => {
    
    res.status(400).json({
        
        message: "Este método es Put pero no usó la peticion adecuada que es PUT"
    });
})
app.post('/put', (req, res) => {
    const {name} = req.body;
    res.status(400).json({
        user: name
        
    })
})
// PUT
app.listen(3000, ()=>console.log("Servidor abierto en http://localhost:3000"))