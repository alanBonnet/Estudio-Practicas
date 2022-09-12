//importaciones
const User = require('../models/USER')
const ctrlUser = {};

ctrlUser.getUsers = async (req, res)=>{ //request handler
    const users = await User.find();

    return res.json({
        message: "Usuarios encontrados",
        users
    })
}
ctrlUser.postUsers = async (req, res)=>{ //request handler
    // destructuración de datos
    const {name, email, password} =req.body;
    // res.json({
    //     name,email,password
    // })
    // crea el nuevo usuario
    const nuevoUsuario = new User({
        name,
        password,
        email
    });
    const usuario = await nuevoUsuario.save()
    
    return res.json({
        message: "Usuario creado correctamente.",
        usuario
    })
}
ctrlUser.putUsers = (req, res)=>{ //request handler
    res.json({
        msg: 'PUT - putUsers'
    })
}
ctrlUser.deleteUsers = (req, res)=>{ //request handler
    res.json({
        msg: 'DELETE - deleteUsers'
    })
}


module.exports = ctrlUser;