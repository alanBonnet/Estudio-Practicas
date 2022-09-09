const Express = require("express");

const app = Express();
const port = 3000;
// para que express y permita el paso de json a las REQ
app.use(Express.json())



app.get("/", (req, res) =>{
    res.send("<h1>Buenas</h1>")
} );

// importo rutas/controladores del USER
app.use(require("./routes/user.routes"))


app.listen(port, ()=>{
    console.log(`Servidor en http://localhost:${port}`)
})