const ctrlUser ={};


ctrlUser.getUser = (req, res) =>{
    res.send("<h1>Listado de usuarios GET</h1>")
};

ctrlUser.postUser = (req, res) =>{
    const {user,password} = req.body;
    res.send(`
    <h1>Peticion POST para cargar nuevo user</h1>
    <br />
    <h2>Hola ${user}</h2>
    <h2>Esta es su password ${password}</h2>
    `)
};

ctrlUser.putUser = (req, res) =>{
    const {user, password} = req.body;
    res.send(`<h1>Peticion PUT para actualizar user: ${user} pass: ${password}</h1>`)
};

ctrlUser.delUser = (req, res) =>{
    const {user} = req.body;
    res.send(`<h1>Peticion DELETE para eliminar user: ${user}</h1>`)
};

module.exports = ctrlUser;
